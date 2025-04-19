import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaLinkedin, FaYoutube, FaGithub, FaFigma } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, href: '#', color: 'bg-[#3B5998]' },
  { icon: <FaTwitter />, href: '#', color: 'bg-[#55ACEE]' },
  { icon: <FaLinkedin />, href: '#', color: 'bg-[#007bb5]' },
  { icon: <FaFigma />, href: '#', color: 'bg-[#bb0000]' },
];

export default function SocialSidebar(){
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center gap-3 p-2 z-50">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full text-white text-xl shadow-md transition duration-300 hover:bg-black ${link.color}"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};
