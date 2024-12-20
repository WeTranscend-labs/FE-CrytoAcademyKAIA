import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/blocklearn', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/blocklearn', label: 'GitHub' },
    { icon: Linkedin, href: 'https://discord.gg/blocklearn', label: 'Discord' },
    { icon: Linkedin, href: 'https://linkedin.com/company/blocklearn', label: 'LinkedIn' }
];

export default function FooterSocial() {
    return (
        <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label={label}
                >
                    <Icon className="w-5 h-5" />
                </a>
            ))}
        </div>
    );
}