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
    <header className="" id="home">
      <div className="">
        <a href="/">
          <div className="">
            <Image
              src={data.avatar_url || placeholder}
              alt="Kurt Gray"
              width="50"
              height="50"
              priority={true}
            />
          </div>
        </a>
        <div className="">Kurt Gray</div>
        <div className="">
          <Link href="#home">
            <button className="">Home</button>
          </Link>
          <Link href="#about-me">
            <button className="">About Me</button>
          </Link>
          <Link href="#projects">
            <button className="">Projects</button>
          </Link>
          {/* <a>
            <button className="">Contact Form</button>
          </a> */}
          <Link className="" href="https://github.com/kurtmgray">
            <GitHubIcon />
          </Link>
          <Link className="" href="https://www.linkedin.com/in/kurtmgray">
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}
