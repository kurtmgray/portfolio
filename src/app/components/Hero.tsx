import React from 'react';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import { GitHubResponse } from '../../../types';
import placeholder from './../../../static/media/placeholder-pfp.webp';
import Link from 'next/link';

type HeroProps = {
  data: GitHubResponse;
};

export default function Hero({ data }: HeroProps) {
  return (
    <div className="hero">
      <Image
        src={data.avatar_url || placeholder}
        alt="Kurt Gray"
        width="150"
        height="150"
        priority={true}
      />
      <h1 className="hero__name">Kurt Gray</h1>
      <h3 className="hero__title">Software Engineer</h3>
      <div className="hero__info">
        <p className="hero__bio">{data.bio}</p>
        <div className="hero__resume--link">
          <Link
            className=""
            target="_blank"
            href="https://drive.google.com/file/d/1D5bS937KMQKoDIEs2Eq4AfoAwjcfyHq4/view?usp=sharing"
          >
            <button>
              <DownloadIcon /> Resume
            </button>
          </Link>
        </div>
        <div className="hero__gh-li--links">
          {/* <a>
          <button className="">Link to contact form</button>
        </a> */}
          <Link className="" href="https://github.com/kurtmgray">
            <GitHubIcon color="primary" />
          </Link>
          <Link className="" href="https://www.linkedin.com/in/kurtmgray/">
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
