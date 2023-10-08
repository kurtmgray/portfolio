'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { GitHubResponse } from '../../types';

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
        console.log(data);
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
        <About data={data} />
        <Projects />
      </div>
    </main>
  );
}
