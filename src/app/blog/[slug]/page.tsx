// src/app/blog/[slug]/page.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { getBlogPostBySlug, BlogPost } from '../../../lib/blog-data';
import Meta from '../../../components/meta';
import TypingTestLink from '../../../components/typing-test-link';

// Markdown parser (simplified for this example)
const parseMarkdown = (markdown: string): string => {
  // This is a very basic implementation
  // In a real app, you'd use a proper markdown parser like marked or remark
  let html = markdown
    // Headers
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold my-4">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold my-3">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold my-2">$1</h3>')
    // Bold
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    // Lists
    .replace(/^\- (.*$)/gim, '<li class="ml-6 list-disc">$1</li>')
    .replace(/^\d\. (.*$)/gim, '<li class="ml-6 list-decimal">$1</li>')
    // Paragraphs
    .replace(/^\s*$/gm, '</p><p class="my-4">');
  
  // Wrap in paragraph tags
  html = '<p class="my-4">' + html + '</p>';
  
  // Fix any doubled paragraph tags
  html = html.replace(/<\/p><p class="my-4"><\/p><p class="my-4">/g, '</p><p class="my-4">');
  
  return html;
};

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (params.slug) {
      const blogPost = getBlogPostBySlug(params.slug);
      if (!blogPost) {
        setNotFound(true);
        return;
      }
      setPost(blogPost);
      setContent(parseMarkdown(blogPost.content));
    }
  }, [params.slug]);

  if (notFound || !post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle>Blog Post Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">The requested blog post could not be found.</p>
            <Link to="/blog" className="text-primary hover:underline">
              ← Back to Blog
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://typeace.netlify.app';
  const pageUrl = `${baseUrl}/blog/${post.slug}`;

  return (
    <>
      <Meta
        title={`${post.title} | Type Ace Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        canonical={pageUrl}
        og={{
          title: post.title,
          description: post.excerpt,
          type: 'article',
          url: pageUrl,
          image: `${baseUrl}/blog-images/${post.slug}.jpg`
        }}
      />

      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 md:p-12 lg:p-24 bg-background text-foreground">
        <article className="w-full max-w-3xl prose dark:prose-invert lg:prose-lg">
          <Link to="/blog" className="flex items-center text-primary hover:underline mb-8 no-underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime} min read</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author.name}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <Tag className="h-4 w-4 mr-1 text-muted-foreground" />
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{post.author.name}</h3>
                <p className="text-muted-foreground text-sm">{post.author.bio}</p>
              </div>
            </div>
            
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <div className="mt-8">
                <h3 className="font-semibold text-xl mb-4">Related Articles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {post.relatedPosts.map(slug => {
                    const relatedPost = getBlogPostBySlug(slug);
                    if (!relatedPost) return null;
                    
                    return (
                      <TypingTestLink 
                        key={slug} 
                        to={`/blog/${slug}`}
                        className="h-auto py-4"
                      >
                        <div>
                          <h4 className="font-medium">{relatedPost.title}</h4>
                          <p className="text-sm text-muted-foreground truncate">{relatedPost.excerpt}</p>
                        </div>
                      </TypingTestLink>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          
          {/* Article Schema for SEO */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "image": `${baseUrl}/blog-images/${post.slug}.jpg`,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author.name
              },
              "publisher": {
                "@type": "Organization",
                "name": "Type Ace",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${baseUrl}/logo.png`
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": pageUrl
              },
              "keywords": post.tags.join(', ')
            })}
          </script>
        </article>
      </div>
    </>
  );
}