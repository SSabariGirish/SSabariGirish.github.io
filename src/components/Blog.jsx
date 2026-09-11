import { useEffect, useState } from "react";
import { ArrowUpRight, Newspaper, Rss } from "lucide-react";
import Reveal from "./Reveal";
import { blogPosts as staticPosts } from "../data/content";

const BLOG_SOURCE = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sabarigirish28nov";

function decodeHTMLEntities(text) {
  if (!text) return "";
  const doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent;
}

function useBlogPosts() {
  const [posts, setPosts] = useState(staticPosts);
  const [status, setStatus] = useState(staticPosts.length ? "ready" : "empty");

  useEffect(() => {
    if (!BLOG_SOURCE) return;
    let cancelled = false;
    setStatus("loading");

    fetch(BLOG_SOURCE)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        
        const items = Array.isArray(data.items) ? data.items : [];
        
        const normalised = items.slice(0, 6).map((d) => {
          const rawText = d.description ? d.description.replace(/<[^>]+>/g, '') : "";
          const cleanSnippet = rawText.length > 120 ? rawText.substring(0, 120).trim() + "..." : rawText;

          return {
            title: decodeHTMLEntities(d.title),
            description: decodeHTMLEntities(cleanSnippet) || "Read the full article on Medium.",
            url: d.link ?? "#",
            date: d.pubDate ?? "",
            tags: d.categories ? d.categories.slice(0, 2) : [],
          };
        });
        
        setPosts(normalised);
        setStatus(normalised.length ? "ready" : "empty");
      })
      .catch(() => !cancelled && setStatus("empty"));

    return () => {
      cancelled = true;
    };
  }, []);

  return { posts, status };
}


function PostCard({ post, index }) {
  return (
    <Reveal delay={index * 0.06}>
      <a
        href={post.url}
        target="_blank"
        rel="noreferrer"
        className="group flex h-full flex-col justify-between rounded-2xl border border-ink-700/60 bg-ink-900/40 p-6 transition-colors hover:border-accent/40 hover:bg-ink-900/70"
      >
        <div>
          {post.date && (
            <p className="font-mono text-xs text-ink-500">
              {new Date(post.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
            </p>
          )}
          <h4 className="mt-2 font-serif text-xl text-ink-50">{post.title}</h4>
          {post.description && <p className="mt-2 text-sm text-ink-300 line-clamp-3">{post.description}</p>}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {(post.tags || []).slice(0, 2).map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          <ArrowUpRight size={16} className="text-ink-500 transition-colors group-hover:text-accent" />
        </div>
      </a>
    </Reveal>
  );
}

function EmptyState() {
  return (
    <Reveal>
      <div className="flex flex-col items-center justify-center rounded-xl2 border border-dashed border-ink-600 bg-ink-900/30 px-6 py-20 text-center">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Newspaper size={22} />
        </div>
        <h4 className="font-serif text-2xl text-ink-100">Writing is on the way.</h4>
        <p className="mt-3 max-w-md text-sm text-ink-300">
          This feed is wired up and ready — write-ups on threat hunting, secure coding, and
          project post-mortems will land here automatically the moment they're published.
        </p>
        <div className="mt-6 flex items-center gap-2 rounded-full border border-ink-600 px-4 py-2 text-xs text-ink-400">
          <Rss size={13} className="text-accent" />
          Feed connects to Dev.to / Notion
        </div>
      </div>
    </Reveal>
  );
}

export default function Blog() {
  const { posts, status } = useBlogPosts();

  return (
    <section id="blog" className="section-pad py-28 md:py-36">
      <Reveal>
        <p className="kicker">Field notes</p>
        <h2 className="mt-4 max-w-2xl font-serif text-fluid-h2 text-ink-50">
          Writing on security, systems, and the occasional side project.
        </h2>
      </Reveal>

      <div className="mt-14">
        {status === "empty" || status === "loading" ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <PostCard post={post} index={i} key={post.url || post.title} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
