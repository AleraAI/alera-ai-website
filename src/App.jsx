import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Demo from './components/Demo';
import GetStarted from './components/GetStarted';
import ServiceDetail from './components/ServiceDetail';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Courses from './components/Courses';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);

  const navigateTo = (page, data = null) => {
    setCurrentPage(page);
    if (data) {
      if (page === 'service-detail') {
        setSelectedService(data);
      } else if (page === 'blog-post') {
        setSelectedBlogPost(data);
      }
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'demo':
        return <Demo onBack={() => navigateTo('home')} />;
      case 'get-started':
        return <GetStarted onBack={() => navigateTo('home')} />;
      case 'service-detail':
        return (
          <ServiceDetail 
            service={selectedService}
            onBack={() => navigateTo('home')}
            onRequestDemo={() => navigateTo('demo')}
            onContact={() => navigateTo('home')}
          />
        );
      case 'blog':
        return (
          <Blog 
            onBack={() => navigateTo('home')}
            onArticleClick={(article) => navigateTo('blog-post', article)}
          />
        );
      case 'blog-post':
        return (
          <BlogPost 
            post={selectedBlogPost}
            onBack={() => navigateTo('blog')}
          />
        );
      case 'courses':
        return (
          <Courses 
            onBack={() => navigateTo('home')}
          />
        );
      default:
        return (
          <>
            <Hero onRequestDemo={() => navigateTo('demo')} onGetStarted={() => navigateTo('get-started')} />
            <Services onLearnMore={(service) => navigateTo('service-detail', service)} />
            <About />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header 
        onGetStarted={() => navigateTo('get-started')}
        onNavigate={(section) => {
          if (section === 'blog') {
            navigateTo('blog');
          } else if (section === 'courses') {
            navigateTo('courses');
          } else {
            navigateTo('home');
            // Scroll to section after a brief delay
            setTimeout(() => {
              const element = document.getElementById(section);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }
        }}
      />
      {renderPage()}
      {currentPage === 'home' && (
        <Footer 
          onNavigate={(page) => navigateTo(page)}
          onBlogClick={() => navigateTo('blog')}
        />
      )}
    </div>
  );
}

export default App;
