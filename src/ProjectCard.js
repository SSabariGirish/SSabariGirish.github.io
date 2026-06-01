import React from 'react';

function ProjectCard({ title, badge, description, videoUrl, videoTitle, techTags, githubUrl, liveUrl }) {
  
  const tags = techTags.split(', ');

  return (
    <div className="project-card">
      
      <div className="video-responsive">
        <iframe 
          src={videoUrl} 
          title={videoTitle}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <div className="project-content">
        <h3 className="project-title">
          {title}
          {badge && <span className="project-badge">{badge}</span>}
        </h3>
        
        <div className="project-description">
          {description.split('<br><br>').map((paragraph, index) => (
              <p key={index} style={{ marginTop: 0 }}>{paragraph}</p>
          ))}
      </div>
        
        <ul className="project-tags">
          {tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        
        <div className="project-links">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Play it Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;