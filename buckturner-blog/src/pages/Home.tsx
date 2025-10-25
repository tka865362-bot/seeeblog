import React from 'react';
import { WindowFrame } from '../components/WindowFrame';
import { StoryCard } from '../components/StoryCard';
import { blogPosts } from '../data/blogPosts';

export const Home: React.FC = () => {
  const featuredPosts = blogPosts.slice(0, 3);
  const latestPosts = blogPosts.slice(3);

  return (
    <div className="home-page">
      <section className="hero-section">
        <WindowFrame showExeTitle={true}>
          <div className="hero-content">
            <blockquote className="hero-quote">
              "One man's descent into paradise..and why he never came back.<br />
              I came for a week. Still here.<br />
              Not a guidebook. A confession..<br />
              buck."
            </blockquote>
            <div style={{ fontSize: '10px', opacity: 0.3, marginTop: '24px', letterSpacing: '2px', userSelect: 'none' }}>
              🃜🃚🃖🃁🂭🂺
            </div>
          </div>
        </WindowFrame>
      </section>

      <section className="featured-section">
        <h2 className="section-title">Featured Stories</h2>
        <div className="stories-grid">
          {featuredPosts.map(post => (
            <StoryCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="latest-section">
          <h2 className="section-title">more.buck.files</h2>
          <div className="stories-grid">
            {latestPosts.map(post => (
              <StoryCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
