'use client';

import React, { useState, useEffect } from 'react';
import { GitHubResponse } from '../../types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [data, setData] = useState<GitHubResponse>({
    avatar_url: null,
    bio: null,
  });

  useEffect(() => {
    const gitApiUrl = 'https://api.github.com/users/kurtmgray';
    const getData = async () => {
      try {
        const res = await fetch(gitApiUrl);
        const data: GitHubResponse = await res.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <main>
      <div id="root">
        <Navbar data={data} />
        <Hero data={data} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
