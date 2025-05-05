// src/components/layout/footer.tsx
import { Link } from 'react-router-dom';

const footerLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t bg-background">
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {currentYear} Type Ace. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
             <Link
              to="/typing-tests"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
             >
                Typing Tests
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
