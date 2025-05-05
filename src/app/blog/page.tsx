// src/app/blog/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Clock, Calendar } from "lucide-react";
import Meta from '../../components/meta';
import { blogPosts } from '../../lib/blog-data';

export default function BlogPage() {
  return (
    <>
      <Meta
        title="Typing Tips & Guides | Type Ace Blog"
        description="Explore our collection of typing tips, guides, and resources to improve your typing speed and accuracy. Learn from experts and boost your productivity."
        keywords="typing tips, improve typing speed, typing guides, keyboard shortcuts, touch typing, typing practice"
      />
      
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 md:p-12 lg:p-24 bg-background text-foreground">
        <header className="w-full max-w-4xl mb-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <BookOpen className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Typing Tips & Resources</h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Explore our collection of articles, guides, and resources to help you improve your typing skills and boost productivity.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="block transition-transform hover:-translate-y-1">
              <Card className="h-full border-primary/20 hover:border-primary/50 transition-colors duration-200">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary">{post.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            New articles are published regularly. Check back often for the latest typing tips and resources.
          </p>
        </div>
      </div>
    </>
  );
}