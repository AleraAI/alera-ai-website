import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import MainFooter from './components/MainFooter.jsx';
import Demo from './components/Demo.jsx';
import GetStarted from './components/GetStarted.jsx';
import ServiceDetail from './components/ServiceDetail.jsx';
import Blog from './components/Blog.jsx';
import BlogPost from './components/BlogPost.jsx';
import Courses from './components/Courses.jsx';
import DeepLoopPrivacy from './components/DeepLoopPrivacy.jsx';
import DeepLoopTerms from './components/DeepLoopTerms.jsx';
import DeepLoopSupport from './components/DeepLoopSupport.jsx';
import DeepLoopDataDeletion from './components/DeepLoopDataDeletion.jsx';
import DeepLoopLanding from './components/DeepLoopLanding.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';


function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/services/:id" element={<ServiceDetailWrapper />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostWrapper />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/products/deeploop/privacy" element={<DeepLoopPrivacy />} />
            <Route path="/products/deeploop/terms" element={<DeepLoopTerms />} />
            <Route path="/products/deeploop/support" element={<DeepLoopSupport />} />
            <Route path="/products/deeploop/data-deletion" element={<DeepLoopDataDeletion />} />
            <Route path="/products/deeploop" element={<DeepLoopLanding />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>



        <MainFooter />
      </div>
    </>
  );
}


// Wrappers to handle params and legacy prop-based components
import { useParams, useNavigate } from 'react-router-dom';
import { services } from './data/servicesData';
import { blogPosts } from './data/blogData';

function ServiceDetailWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <ServiceDetail
      service={id}
      onBack={() => navigate('/')}
      onRequestDemo={() => navigate('/demo')}
      onContact={() => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }}
    />
  );
}

function BlogPostWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <BlogPost
      post={post}
      onBack={() => navigate('/blog')}
    />
  );
}


export default App;
