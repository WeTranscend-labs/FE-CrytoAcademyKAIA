'use client';

import { Send } from 'lucide-react';
import { useState } from 'react';

export default function FooterNewsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    return (
        <div>
            <h3 className="text-gray-900 font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
                Get the latest updates on blockchain development and courses.
            </p>

            <form onSubmit={handleSubmit} className="space-y-2">
                <div className="relative">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-blue-600 disabled:opacity-50 transition-colors"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>

                {status === 'success' && (
                    <p className="text-green-600 text-sm">Thanks for subscribing!</p>
                )}
                {status === 'error' && (
                    <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
                )}
            </form>
        </div>
    );
}