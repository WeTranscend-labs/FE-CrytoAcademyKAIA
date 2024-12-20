import Link from 'next/link';

export default function Hero() {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                        Master Blockchain Development
                    </h1>
                    <p className="mt-4 text-xl text-blue-100">
                        Learn step by step and earn verifiable certificates
                    </p>
                    <div className="mt-8">
                        <Link
                            href="/learn/1/l1"
                            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                        >
                            Start Learning
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}