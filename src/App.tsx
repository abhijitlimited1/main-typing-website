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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
