interface FooterLink {
    label: string;
    href: string;
}

interface FooterLinksProps {
    title: string;
    links: FooterLink[];
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
    return (
        <div>
            <h3 className="text-gray-900 font-semibold mb-4">{title}</h3>
            <ul className="space-y-3">
                {links.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}