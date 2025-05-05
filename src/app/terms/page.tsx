// src/app/terms/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { FileText, Mail } from "lucide-react";

import Meta from '../../components/meta';
import TypingTestLink from '../../components/typing-test-link';

export default function TermsPage() {
  return (
    <>
      <Meta
        title="Terms of Service"
        description="Read the Terms of Service for using the Type Ace online typing test and practice platform. Understand your rights and responsibilities."
        robots="noindex, follow"
      />
      
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 md:p-12 lg:p-24 bg-background text-foreground">
      <Card className="w-full max-w-3xl shadow-lg bg-card/95">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center mb-4">
            <FileText className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl sm:text-4xl font-bold">Terms of Service</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Last Updated: {new Date().toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-left sm:text-lg leading-relaxed prose dark:prose-invert max-w-none">
          <p>
            Welcome to Type Ace! These Terms of Service ("Terms") govern your use of the Type Ace website and its related services (collectively, the "Service"), provided by Type Ace ("we," "us," or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h2 className="bg-primary/5 p-2 rounded-md">1. Use of the Service</h2>
          <p>
            Type Ace provides a platform for testing and practicing typing skills. You agree to use the Service only for its intended purposes and in compliance with all applicable laws and regulations. You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Service for personal, non-commercial purposes.
          </p>

          <h2 className="bg-primary/5 p-2 rounded-md">2. User Conduct</h2>
          <p>You agree not to use the Service to:</p>
          <ul className="space-y-2">
            <li className="pl-2 border-l-4 border-primary/30 hover:bg-primary/5 transition-colors duration-200">Engage in any activity that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</li>
            <li className="pl-2 border-l-4 border-primary/30 hover:bg-primary/5 transition-colors duration-200">Attempt to gain unauthorized access to the Service, user accounts, or computer systems or networks connected to the Service.</li>
            <li className="pl-2 border-l-4 border-primary/30 hover:bg-primary/5 transition-colors duration-200">Interfere with or disrupt the Service or servers or networks connected to the Service.</li>
            <li className="pl-2 border-l-4 border-primary/30 hover:bg-primary/5 transition-colors duration-200">Use any automated means, including robots, spiders, or scrapers, to access the Service for any purpose without our express written permission.</li>
            <li className="pl-2 border-l-4 border-primary/30 hover:bg-primary/5 transition-colors duration-200">Transmit any viruses, worms, defects, Trojan horses, or any items of a destructive nature.</li>
          </ul>

          <h2 className="bg-primary/5 p-2 rounded-md">3. Intellectual Property</h2>
          <p>
            The Service and its original content (excluding user-generated content, if any), features, and functionality are and will remain the <span className="bg-primary/10 px-1 rounded font-medium">exclusive property of Type Ace</span> and its licensors. The Service is protected by copyright, trademark, and other laws of both the [Your Country/Jurisdiction] and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the <span className="bg-primary/10 px-1 rounded font-medium">prior written consent of Type Ace</span>.
          </p>
          <p>
             The text content used for typing tests is either generated randomly from word lists or sourced from publicly available texts believed to be in the public domain or used under fair use principles for educational purposes. If you believe any content infringes upon your copyright, please contact us.
          </p>

          <h2 className="bg-primary/5 p-2 rounded-md">4. Disclaimers</h2>
          <p>
            The Service is provided on an <span className="bg-primary/10 px-1 rounded font-medium">"AS IS"</span> and <span className="bg-primary/10 px-1 rounded font-medium">"AS AVAILABLE"</span> basis. Your use of the Service is at your sole risk. We expressly disclaim all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p>
            We do not warrant that (i) the Service will function uninterrupted, secure, or available at any particular time or location; (ii) any errors or defects will be corrected; (iii) the Service is free of viruses or other harmful components; or (iv) the results of using the Service will meet your requirements. Typing test results are indicative and may vary based on numerous factors.
          </p>

          <h2 className="bg-primary/5 p-2 rounded-md">5. Limitation of Liability</h2>
          <p>
            In no event shall Type Ace, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
          </p>

          <h2 className="bg-primary/5 p-2 rounded-md">6. Termination</h2>
          <p>
            We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
          </p>

          <h2 className="bg-primary/5 p-2 rounded-md">7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of [Your Country/Jurisdiction], without regard to its conflict of law provisions.
          </p>

          <h2 className="bg-primary/5 p-2 rounded-md">8. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect, likely by updating the "Last Updated" date. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2 className="bg-primary/5 p-2 rounded-md">9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please <TypingTestLink to="/contact" className="inline-flex px-2 py-1" icon={<Mail className="h-4 w-4" />}>contact us</TypingTestLink>.
          </p>
        </CardContent>
      </Card>
      </div>
    </>
  );
}