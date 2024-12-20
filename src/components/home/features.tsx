import { BookOpen, Award, Code, Users } from 'lucide-react';

const features = [
    {
        icon: BookOpen,
        title: 'Step-by-Step Learning',
        description: 'Break down complex concepts into easy-to-follow steps',
    },
    {
        icon: Code,
        title: 'Interactive Coding',
        description: 'Practice in our built-in IDE with instant feedback',
    },
    {
        icon: Award,
        title: 'NFT Certificates',
        description: 'Earn verifiable certificates for completed courses',
    },
    {
        icon: Users,
        title: 'Community',
        description: 'Learn and grow with fellow blockchain enthusiasts',
    },
];

export default function Features() {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Why Choose BlockLearn?
                    </h2>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <div key={feature.title} className="text-center">
                                    <div className="flex justify-center">
                                        <Icon className="h-12 w-12 text-blue-600" />
                                    </div>
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}