import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Custom Cursor
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    const handleMouseMove = (e) => {
      if (cursorDot && cursorOutline) {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        setTimeout(() => {
          cursorOutline.style.left = e.clientX + 'px';
          cursorOutline.style.top = e.clientY + 'px';
        }, 50);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          if (entry.target.classList.contains('stat-item')) {
            const countTarget = entry.target.querySelector('.stat-number');
            animateCounter(countTarget);
          }
        }
      });
    }, observerOptions);

    // Initial observe
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    document.querySelectorAll('.stat-item').forEach(el => observer.observe(el));

    // Re-run observe when location changes to ensure new page content is tracked
    const timeoutId = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      document.querySelectorAll('.stat-item').forEach(el => observer.observe(el));
    }, 100);

    // Counter Animation
    function animateCounter(el) {
      if (!el || el.innerText.includes('+')) return;
      const target = +el.getAttribute('data-target');
      if (isNaN(target)) return;
      
      let count = 0;
      const speed = target / 50;
      
      const updateCount = () => {
        if (count < target) {
          count += Math.ceil(speed);
          el.innerText = (count > target ? target : count) + "+";
          setTimeout(updateCount, 40);
        } else {
          el.innerText = target + "+";
        }
      };
      updateCount();
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [location]);

  return (
    <div className="App">
      <div id="scroll-progress"></div>
      <div id="cursor-dot"></div>
      <div id="cursor-outline"></div>
      
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
