import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHubResponse } from '../../../types';
import placeholder from './../../../static/media/placeholder-pfp.webp';

type NavbarProps = {
  data: GitHubResponse;
};

export default function Navbar({ data }: NavbarProps) {
  return (
    <header className="header" id="home">
      <Link href="/">
        <div className="header__id">
          <Image
            src={data.avatar_url || placeholder}
            alt="Kurt Gray"
            width="50"
            height="50"
            priority={true}
          />
          <div className="header__name">Kurt Gray</div>
        </div>
      </Link>
      <div className="header__links">
        <Link href="#home" className="header__link">
          Home
        </Link>
        <Link href="#about-me" className="header__link">
          About
        </Link>
        <Link href="#projects" className="header__link">
          Projects
        </Link>
        <Link href="#contact" className="header__link">
          Contact
        </Link>
        <Link
          target="_blank"
          className="header__icon"
          href="https://github.com/kurtmgray"
        >
          <GitHubIcon />
        </Link>
        <Link
          target="_blank"
          className="header__icon"
          href="https://www.linkedin.com/in/kurtmgray"
        >
          <LinkedInIcon />
        </Link>
      </div>
    </header>
  );
}
