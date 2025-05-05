import { Helmet } from 'react-helmet';

interface OpenGraph {
  title?: string;
  description?: string;
  type?: string;
  url?: string;
  image?: string;
  siteName?: string;
}

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  canonical?: string;
  og?: OpenGraph;
}

const Meta = ({
  title = 'Type Ace - Improve Your Typing Speed',
  description = 'Free online typing test to measure your typing speed and accuracy. Practice and improve your WPM with Type Ace.',
  keywords = 'typing test, typing speed, WPM, words per minute, typing practice, keyboard skills',
  robots = 'index, follow',
  canonical,
  og,
}: MetaProps) => {
  // Default base URL (can be overridden by environment variable)
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://typeace.netlify.app';
  
  // Use the current URL as canonical if not specified
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : `${baseUrl}`);
  
  // Default OpenGraph data
  const defaultOg: OpenGraph = {
    title: title,
    description: description,
    type: 'website',
    url: canonicalUrl,
    image: `${baseUrl}/og-image.jpg`,
    siteName: 'Type Ace',
  };
  
  // Merge provided OG data with defaults
  const ogData = { ...defaultOg, ...(og || {}) };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={ogData.title} />
      <meta property="og:description" content={ogData.description} />
      <meta property="og:type" content={ogData.type} />
      <meta property="og:url" content={ogData.url} />
      {ogData.image && <meta property="og:image" content={ogData.image} />}
      {ogData.siteName && <meta property="og:site_name" content={ogData.siteName} />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogData.title} />
      <meta name="twitter:description" content={ogData.description} />
      {ogData.image && <meta name="twitter:image" content={ogData.image} />}
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Type Ace" />
      <meta name="application-name" content="Type Ace" />
      
      {/* Structured Data for Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Type Ace",
          "url": baseUrl,
          "description": description,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/typing-tests?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Type Ace",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "sameAs": [
            "https://twitter.com/typeace",
            "https://facebook.com/typeace",
            "https://instagram.com/typeace"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default Meta;