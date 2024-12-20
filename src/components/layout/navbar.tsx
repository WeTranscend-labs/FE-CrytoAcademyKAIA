import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <GraduationCap className="h-8 w-8 text-blue-600" />
                            <span className="font-bold text-xl">BlockLearn</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/courses" className="text-gray-700 hover:text-blue-600">
                            Courses
                        </Link>
                        <Link href="/login" className="text-gray-700 hover:text-blue-600">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}