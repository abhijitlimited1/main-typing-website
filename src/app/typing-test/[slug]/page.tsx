// src/app/typing-test/[slug]/page.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TypingTest from '../../../components/typing-test';
import { getSeoDataBySlug, PageSeoData } from '../../../lib/seo-data';
import { Card, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import Meta from '../../../components/meta';

// Define the route params interface with string index signature
interface RouteParams {
  [key: string]: string | undefined;
  slug?: string;
}

export default function TypingTestPage() {
  const params = useParams<RouteParams>();
  const slug = params.slug;
  const [pageData, setPageData] = useState<PageSeoData | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      const data = getSeoDataBySlug(slug);
      if (!data) {
        setNotFound(true);
        return;
      }
      setPageData(data);
    }
  }, [slug]);

  if (notFound || !pageData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle>Page Not Found</CardTitle>
            <CardDescription>The requested typing test could not be found</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:9002';
  const pageUrl = `${baseUrl}/typing-test/${pageData.slug}`;

  const generateSchema = (data: PageSeoData) => ({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": data.title,
    "description": data.description,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All",
    "url": pageUrl,
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "image": `https://picsum.photos/seed/${data.slug}-schema/800/400`,
    "keywords": [data.keyword, ...data.relatedKeywords].join(', ')
  });

  const schema = generateSchema(pageData);
  const keywords = [...new Set([
    pageData.keyword,
    ...pageData.relatedKeywords,
    'typing speed test',
    'typing practice'
  ])].join(', ');

  return (
    <>
      <Meta
        title={pageData.title}
        description={pageData.description}
        keywords={keywords}
        robots="index, follow"
        og={{
          title: pageData.title,
          description: pageData.description,
          type: 'website',
          url: pageUrl,
          image: `https://picsum.photos/seed/${slug}-og/1200/630`
        }}
      />

      <main className="flex min-h-screen flex-col items-center justify-start px-4 py-8 sm:px-8 md:px-12 lg:px-24 bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <header className="w-full max-w-3xl mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">{pageData.h1}</h1>
          <p className="text-muted-foreground text-base sm:text-lg">{pageData.description}</p>
        </header>

        <TypingTest />

        <section className="w-full max-w-3xl mt-12 space-y-6">
          {pageData.h2.map((heading, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-foreground mb-3">{heading}</h2>
              <p className="text-muted-foreground">
                Practice your {pageData.keyword} skills here. Improving your{' '}
                {pageData.relatedKeywords[0] || 'typing'} is essential. This section discusses 
                how our tool helps you achieve better {pageData.relatedKeywords[1] || 'results'}. 
                Consistent use of this {pageData.keyword} tool leads to better performance.
              </p>
            </div>
          ))}

          {pageData.faq && pageData.faq.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-primary" /> Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {pageData.faq.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              {/* FAQ Schema for SEO */}
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": pageData.faq.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": item.answer
                    }
                  }))
                })}
              </script>
            </div>
          )}
        </section>

        <div className="mt-8 w-full max-w-3xl">
          <img
            src={`https://picsum.photos/seed/${pageData.slug}/800/400`}
            alt={`Illustration representing ${pageData.keyword}`}
            className="rounded-md shadow-md w-full h-auto object-cover"
            loading="lazy"
            width={800}
            height={400}
          />
          <p className="text-center text-xs text-muted-foreground mt-2">
            Image related to {pageData.keyword}.
          </p>
        </div>
      </main>
    </>
  );
}