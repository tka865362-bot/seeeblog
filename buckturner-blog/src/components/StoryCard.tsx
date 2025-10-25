import React from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { WindowFrame } from './WindowFrame';
import { Button } from './Button';
import { BlogPost } from '../data/blogPosts';

interface StoryCardProps {
  post: BlogPost;
}

export const StoryCard: React.FC<StoryCardProps> = ({ post }) => {
  const cardClassName = post.comingSoon ? 'story-card story-card-locked' : 'story-card';
  
  return (
    <article className={cardClassName}>
      <WindowFrame title={post.category}>
        <div className="story-card-content">
          {post.comingSoon && (
            <div className="coming-soon-badge">
              <Lock size={24} />
              <span>COMING SOON</span>
            </div>
          )}
          {post.isNew && !post.comingSoon && (
            <div className="new-badge">
              <span>NEW</span>
            </div>
          )}
          {post.image && (
            <div className="story-card-image">
              <img src={post.image} alt={post.title} />
            </div>
          )}
          <h2 className="story-card-title">{post.title}</h2>
          <p className="story-card-excerpt">{post.excerpt}</p>
          <div className="story-card-meta">
            <span className="story-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="story-divider">•</span>
            <span className="story-read-time">{post.readTime} read</span>
          </div>
          {!post.comingSoon ? (
            <Link to={`/story/${post.slug}`}>
              <Button variant="primary">Read More</Button>
            </Link>
          ) : (
            <Button variant="secondary" disabled>
              <Lock size={16} />
              <span>Locked</span>
            </Button>
          )}
        </div>
      </WindowFrame>
    </article>
  );
};
