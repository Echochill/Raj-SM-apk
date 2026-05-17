/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="gradient-bg selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}
