import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './app/layout';
import Home from './app/page';
import TypingTestPage from './app/typing-test/page';
import TypingTestsPage from './app/typing-tests/page';
import TypingTestSlugPage from './app/typing-test/[slug]/page';
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';
import PrivacyPolicyPage from './app/privacy-policy/page';
import TermsPage from './app/terms/page';

// Import SEO-focused pages
import TypingSpeedTestPage from './app/typing-speed-test/page';
import TypingPracticePage from './app/typing-practice/page';
import EnglishTypingTestPage from './app/english-typing-test/page';
import FastTypingTestPage from './app/fast-typing-test/page';
import OnlineTypingTestPage from './app/online-typing-test/page';
import FreeTypingTestPage from './app/free-typing-test/page';
import NotFoundPage from './app/not-found/page';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/typing-test" element={<TypingTestPage />} />
          <Route path="/typing-tests" element={<TypingTestsPage />} />
          <Route path="/typing-test/:slug" element={<TypingTestSlugPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          {/* SEO-focused routes */}
          <Route path="/typing-speed-test" element={<TypingSpeedTestPage />} />
          <Route path="/typing-practice" element={<TypingPracticePage />} />
          <Route path="/english-typing-test" element={<EnglishTypingTestPage />} />
          <Route path="/fast-typing-test" element={<FastTypingTestPage />} />
          <Route path="/online-typing-test" element={<OnlineTypingTestPage />} />
          <Route path="/free-typing-test" element={<FreeTypingTestPage />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
