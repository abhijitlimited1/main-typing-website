// src/app/privacy-policy/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { ShieldCheck, Mail } from "lucide-react";
import { Link } from 'react-router-dom';
import Meta from '../../components/meta';
import TypingTestLink from '../../components/typing-test-link';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Meta
        title="Privacy Policy"
        description="Read the Type Ace Privacy Policy to understand how we collect, use, and protect your data when you use our typing test service."
        robots="noindex, follow"
      />
      
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 md:p-12 lg:p-24 bg-background text-foreground">
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center mb-4">
            <ShieldCheck className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl sm:text-4xl font-bold">Privacy Policy</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Last Updated: {new Date().toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-left sm:text-lg leading-relaxed prose dark:prose-invert max-w-none">
          <p>
            Welcome to Type Ace's Privacy Policy. This policy describes how we collect, use, and handle your personal information when you use our website and services (collectively, the "Service").
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect minimal information necessary to provide and improve our Service:
          </p>
          <ul>
            <li><strong>Usage Data:</strong> We may collect anonymous data about how you interact with the Service, such as test results (WPM, accuracy, time), difficulty settings chosen, pages visited, and device/browser type. This data is aggregated and used for analytical purposes to understand usage patterns and improve the user experience. We do not link this data to individual users.</li>
            <li><strong>Contact Information:</strong> If you contact us via our contact form, we collect your name, email address, and the message content solely to respond to your inquiry.</li>
            {/* Add if using Formspree or similar */}
            <li><strong>Form Submissions:</strong> When you submit information through forms (like the contact form powered by Formspree), that information is processed according to the third-party service's privacy policy. We only receive the submitted data (name, email, message) to address your request.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and maintain our Service.</li>
            <li>Improve, personalize, and expand our Service.</li>
            <li>Understand and analyze how you use our Service.</li>
            <li>Respond to your comments, questions, and requests (if you contact us).</li>
            <li>Prevent fraudulent activity.</li>
          </ul>

          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            Type Ace uses minimal cookies. We may use local storage in your browser to save your preferences (like theme settings or potentially past scores if implemented). We do not use third-party tracking cookies for advertising purposes. We may use basic analytics tools (like server logs or a self-hosted analytics solution) that collect anonymous usage data.
          </p>

          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or rent your personal information to others. We may share aggregated, non-personally identifiable usage data with partners or for analytical purposes. If you use our contact form via Formspree, your submission data is handled by Formspree according to their privacy policy. We will only disclose personal information if required by law or if we believe in good faith that such action is necessary to comply with legal processes.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your information. However, no internet transmission is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
          </p>

          <h2>6. Children's Privacy</h2>
          <p>
            Our Service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.
          </p>

          <h2>7. Your Data Rights</h2>
          <p>
            Since we collect very limited personal data, your rights mainly pertain to data submitted via the contact form. You can request access to or deletion of the contact information you provided by contacting us through the same form or another available method. For data handled by Formspree, please refer to their privacy policy.
          </p>

          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please <TypingTestLink to="/contact" className="inline-flex px-2 py-1" icon={<Mail className="h-4 w-4" />}>contact us</TypingTestLink>.
          </p>
        </CardContent>
      </Card>
      </div>
    </>
  );
}