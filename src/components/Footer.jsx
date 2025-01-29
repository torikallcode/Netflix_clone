import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Audio Description',
      href: '#'
    },
    {
      title: 'Help Center',
      href: '#'
    },
    {
      title: 'Gift Cards',
      href: '#'
    },
    {
      title: 'Media Center',
      href: '#'
    },
    {
      title: 'Investor Relations',
      href: '#'
    },
    {
      title: 'Jobs',
      href: '#'
    },
    {
      title: 'Terms of Use',
      href: '#'
    },
    {
      title: 'Privacy',
      href: '#'
    },
    {
      title: 'Legal Notices',
      href: '#'
    },
    {
      title: 'Cookie Preferences',
      href: '#'
    },
    {
      title: 'Corporate Information',
      href: '#'
    },
    {
      title: 'Contact Us',
      href: '#'
    },
    {
      title: 'Speed Test',
      href: '#'
    },
    {
      title: 'Legal Guarantee',
      href: '#'
    },
    {
      title: 'Netflix Originals',
      href: '#'
    },
    {
      title: 'Only on Netflix',
      href: '#'
    }
  ];

  return (
    <footer className="w-full bg-netflix-black text-gray-400 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Social Media Links */}
        <div className="flex gap-4 mb-8">
          <a href="#" className="hover:text-white transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm mb-8">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:underline transition-all"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Service Code Button */}
        <button className="border border-gray-400 px-4 py-2 text-sm mb-8 hover:text-white transition-colors">
          Service Code
        </button>

        {/* Copyright Text */}
        <div className="text-xs">
          <p className="mb-4">© 1997-{new Date().getFullYear()} Netflix, Inc.</p>
          <p className="leading-relaxed">
            Netflix Services Korea Ltd. E-Commerce Registration Number: Je
            2018-Seoul Jong-ro-0426 Ho. Phone: 00-308-321-0058
          </p>
          <p className="leading-relaxed">
            Representative: Netflix Services Korea Ltd.
          </p>
          <p className="leading-relaxed">
            Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro,
            Jongno-gu, Seoul, 03161 Republic of Korea
          </p>
          <p className="leading-relaxed">
            Business registration number: 165-87-00119
          </p>
          <p className="leading-relaxed">
            Hosted by: Amazon Web Services Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;