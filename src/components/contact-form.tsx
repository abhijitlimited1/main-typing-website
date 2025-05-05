

import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "./ui/button";
import { EnhancedButton } from "./ui/enhanced-button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField
} from './ui/form';
import { useToast } from '../hooks/use-toast';

// Define Zod schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100, { message: "Name must be less than 100 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }).max(100, { message: "Email must be less than 100 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000, { message: "Message must be less than 1000 characters." }),
});

type FormData = z.infer<typeof formSchema>;

// IMPORTANT: Replace with your actual Formspree endpoint ID
const FORMSPREE_ENDPOINT_ID = 'xeogaagj' as string; // <-- Updated endpoint ID

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [messageLength, setMessageLength] = useState(0);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onChange", // Enable validation on change
  });
  
  // Update message length counter
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'message' || !name) {
        setMessageLength(value.message?.length || 0);
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Check if Formspree ID is properly configured
    if (FORMSPREE_ENDPOINT_ID === 'YOUR_FORMSPREE_ENDPOINT_ID') {
        toast({
            title: "Setup Required",
            description: "Please replace 'YOUR_FORMSPREE_ENDPOINT_ID' in src/components/contact-form.tsx with your actual Formspree endpoint ID.",
            variant: "destructive",
            duration: 10000, // Show longer
        });
        return;
    }

    // Reset any previous errors and set submitting state
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Add a small delay to show the loading state (better UX)
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Send the form data to Formspree
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ENDPOINT_ID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          // Add submission timestamp for reference
          submittedAt: new Date().toISOString()
        }),
      });

      if (response.ok) {
        // Success handling
        toast({
          title: "Message Sent Successfully!",
          description: "Thanks for reaching out. We'll get back to you soon.",
        });
        form.reset(); // Reset form fields
      } else {
        // Handle API errors
        const responseData = await response.json();
        const errorMessage = responseData.errors?.map((err: any) => err.message).join(', ') || 'Submission failed. Please try again.';
        throw new Error(errorMessage);
      }
    } catch (error: any) {
      // Error handling
      const errorMessage = error.message || 'An unexpected error occurred. Please try again later.';
      setSubmitError(errorMessage);
      toast({
        title: "Submission Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium mb-1">Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your Name" 
                  className="py-6 px-4 text-base focus:ring-2 focus:ring-primary/30 transition-all duration-200" 
                  aria-required="true"
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-sm font-medium text-destructive mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium mb-1">Email</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="py-6 px-4 text-base focus:ring-2 focus:ring-primary/30 transition-all duration-200" 
                  aria-required="true"
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-sm font-medium text-destructive mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium mb-1">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Your message..." 
                  className="py-4 px-4 text-base focus:ring-2 focus:ring-primary/30 transition-all duration-200 min-h-[150px] resize-none" 
                  aria-required="true"
                  {...field} 
                  rows={5} 
                />
              </FormControl>
              <div className="flex justify-between items-center mt-1">
                <FormMessage className="text-sm font-medium text-destructive" />
                <span className={`text-xs ${messageLength > 900 ? 'text-amber-500' : 'text-muted-foreground'} ${messageLength > 1000 ? 'text-destructive font-medium' : ''}`}>
                  {messageLength}/1000
                </span>
              </div>
            </FormItem>
          )}
        />
        {submitError && (
          <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20">
            <p className="text-sm font-medium text-destructive">{submitError}</p>
          </div>
        )}
        <EnhancedButton 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full py-6 text-lg font-medium rounded-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] contact-btn-hover btn-press-effect" 
          glowEffect={true} 
          pulseEffect={!isSubmitting}
          variant="primary"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Send Message
            </div>
          )}
        </EnhancedButton>
      </form>
    </Form>
  );
}
