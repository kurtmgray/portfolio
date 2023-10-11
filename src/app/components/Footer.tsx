import React from 'react';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div className="footer">
      {/* <div className="header__links"> */}
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
      {/* </div> */}
    </div>
  );
}
