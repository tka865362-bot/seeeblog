import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { WindowFrame } from '../components/WindowFrame';
import { Button } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { BucksPicks } from '../components/BucksPicks';
import { BuckQuote } from '../components/BuckQuote';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  // Check for markers and split content
  let content = post.content;
  const buckQuoteMarker = '<!-- BUCK_QUOTE -->';
  const ctaMarker = '<!-- CTA_SECTION -->';
  const bucksPicksMarker = '<!-- BUCKS_PICKS -->';
  
  const hasBuckQuote = content.includes(buckQuoteMarker);
  const hasCTA = content.includes(ctaMarker);
  const hasBucksPicks = content.includes(bucksPicksMarker);
  
  // Split content based on markers
  let parts: string[] = [];
  
  if (hasBuckQuote) {
    const quoteParts = content.split(buckQuoteMarker);
    if (hasCTA && hasBucksPicks) {
      const ctaParts = quoteParts[1].split(ctaMarker);
      const bucksPicksParts = ctaParts[1].split(bucksPicksMarker);
      parts = [quoteParts[0], quoteParts[1].split(ctaMarker)[0], bucksPicksParts[0], bucksPicksParts[1]];
    } else if (hasCTA) {
      const ctaParts = quoteParts[1].split(ctaMarker);
      parts = [quoteParts[0], ctaParts[0], ctaParts[1]];
    } else {
      parts = quoteParts;
    }
  } else if (hasCTA && hasBucksPicks) {
    const ctaParts = content.split(ctaMarker);
    const bucksPicksParts = ctaParts[1].split(bucksPicksMarker);
    parts = [ctaParts[0], bucksPicksParts[0], bucksPicksParts[1]];
  } else if (hasCTA) {
    parts = content.split(ctaMarker);
  } else {
    parts = [content];
  }

  return (
    <div className="blog-post-page">
      <div className="back-button-container">
        <Link to="/">
          <Button variant="secondary">
            <ArrowLeft size={16} className="button-icon" />
            Back to Stories
          </Button>
        </Link>
      </div>

      <article className="blog-post">
        <WindowFrame title={post.category}>
          <div className="blog-post-content">
            {post.image && (
              <div className="blog-post-featured-image">
                <img src={post.image} alt={post.title} />
              </div>
            )}
            
            <header className="blog-post-header">
              <h1 className="blog-post-title">{post.title}</h1>
              <div className="blog-post-meta">
                <span className="post-date">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="meta-divider">•</span>
                <span className="post-read-time">{post.readTime}</span>
              </div>
            </header>

            <div className="blog-post-body">
              {hasBuckQuote && parts[0] && (
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {parts[0]}
                </ReactMarkdown>
              )}
              
              {hasBuckQuote && <BuckQuote />}
              
              {!hasBuckQuote && (
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {parts[0]}
                </ReactMarkdown>
              )}
              
              {hasBuckQuote && hasCTA && parts[1] && (
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {parts[1]}
                </ReactMarkdown>
              )}
              
              {hasCTA && <CTASection />}
              
              {hasBuckQuote && hasCTA && hasBucksPicks && parts[2] && (
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {parts[2]}
                </ReactMarkdown>
              )}
              
              {!hasBuckQuote && hasCTA && parts[1] && (
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {parts[1]}
                </ReactMarkdown>
              )}
              
              {hasBucksPicks && <BucksPicks />}
              
              {hasBuckQuote && hasBucksPicks && parts[3] && (
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {parts[3]}
                </ReactMarkdown>
              )}
              
              {!hasBuckQuote && hasBucksPicks && parts[2] && (
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {parts[2]}
                </ReactMarkdown>
              )}
            </div>
          </div>
        </WindowFrame>
      </article>

      <div className="post-footer">
        <Link to="/">
          <Button variant="primary">Read More Stories</Button>
        </Link>
      </div>
    </div>
  );
};
