
import { GraduationCap } from 'lucide-react';
import FooterSocial from './footer/footer-social';
import FooterLinks from './footer/footer-links';
import FooterNewsletter from './footer/footer-newsletter';

export default function Footer() {
    return (
        <footer className="bg-white border-t">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <GraduationCap className="h-8 w-8 text-blue-600" />
                            <span className="text-xl font-bold text-gray-900">BlockLearn</span>
                        </div>
                        <p className="text-gray-600">
                            Learn blockchain development step by step and earn verifiable certificates.
                        </p>
                        <FooterSocial />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <FooterLinks
                            title="Quick Links"
                            links={[
                                { label: 'Courses', href: '/courses' },
                                { label: 'About Us', href: '/about' },
                                { label: 'Contact', href: '/contact' },
                                { label: 'Blog', href: '/blog' }
                            ]}
                        />
                    </div>

                    {/* Resources */}
                    <div>
                        <FooterLinks
                            title="Resources"
                            links={[
                                { label: 'Documentation', href: '/docs' },
                                { label: 'Community', href: '/community' },
                                { label: 'Help Center', href: '/help' },
                                { label: 'Career', href: '/career' }
                            ]}
                        />
                    </div>

                    {/* Newsletter */}
                    <div>
                        <FooterNewsletter />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} BlockLearn. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="/privacy" className="text-sm text-gray-500 hover:text-gray-600">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-sm text-gray-500 hover:text-gray-600">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}