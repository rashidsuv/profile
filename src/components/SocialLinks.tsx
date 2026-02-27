import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink, Mail, Rss } from 'lucide-react';

const socialLinks = [
  {
    name: 'Blog',
    url: 'https://blog.rashidu.dev',
    icon: <Rss className="w-5 h-5" />,
    label: 'blog.rashidu.dev',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/rashidu',
    icon: <Twitter className="w-5 h-5" />,
    label: '@rashidu',
  },
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/rashidu.dev',
    icon: <ExternalLink className="w-5 h-5" />,
    label: '@rashidu.dev',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/rashidu',
    icon: <Github className="w-5 h-5" />,
    label: '@rashidu',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/rashid-u-5a023118b',
    icon: <Linkedin className="w-5 h-5" />,
    label: 'rashid-u',
  },
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Socials</h2>
      <div className="flex flex-col gap-2">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
          >
            <span className="p-2 rounded-lg bg-neutral-900 group-hover:bg-neutral-800 transition-colors">
              {link.icon}
            </span>
            <span className="text-sm font-medium">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
