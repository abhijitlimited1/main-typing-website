// src/app/contact/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import ContactForm from '../../components/contact-form';
import { Mail } from 'lucide-react';
import Meta from '../../components/meta';

// IMPORTANT: Use the actual Formspree endpoint ID
const FORMSPREE_ENDPOINT_ID = 'xeogaagj' as string; // Updated endpoint ID

export default function ContactPage() {
  return (
    <>
      <Meta
        title="Contact Type Ace"
        description="Get in touch with the Type Ace team. Send us your questions, feedback, or suggestions using our contact form."
      />
      
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 bg-background text-foreground">
        <Card className="w-full max-w-2xl shadow-lg border-primary/10">
          <CardHeader className="text-center px-4 sm:px-6 pt-6 pb-2">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold">Contact Us</CardTitle>
            <CardDescription className="text-base sm:text-lg text-muted-foreground mt-2">
              Have questions or feedback? We'd love to hear from you!
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6 py-6">
            {/* Warning message will no longer display as the ID is updated */}
            {FORMSPREE_ENDPOINT_ID === 'YOUR_FORMSPREE_ENDPOINT_ID' && (
              <p className="text-center text-destructive font-semibold mb-4 p-3 bg-destructive/10 rounded-md">
                Note: Contact form requires setup. Replace 'YOUR_FORMSPREE_ENDPOINT_ID' in the code (src/components/contact-form.tsx).
              </p>
            )}
            {/* Render the client component for the form */}
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
