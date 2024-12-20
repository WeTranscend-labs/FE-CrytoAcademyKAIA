import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    content: string;
    isActive: boolean;
    onClick: () => void;
}

export default function FeatureCard({
    icon: Icon,
    title,
    content,
    isActive,
    onClick
}: FeatureCardProps) {
    return (
        <motion.div
            className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border ${isActive
                ? 'bg-sky-50 border-sky-200 shadow-md'
                : 'bg-white border-gray-200 hover:bg-sky-50/50 hover:border-sky-100'
                }`}
            onClick={onClick}
            animate={{
                scale: isActive ? 1 : 0.98,
                opacity: isActive ? 1 : 0.9
            }}
        >
            <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl transition-colors ${isActive
                    ? 'bg-sky-500/10 border border-sky-500/20'
                    : 'bg-sky-500/5 border border-sky-500/10'
                    }`}>
                    <Icon className={`w-6 h-6 ${isActive ? 'text-sky-600' : 'text-sky-500/70'
                        }`} />
                </div>
                <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isActive ? 'text-sky-800' : 'text-gray-800'
                        }`}>
                        {title}
                    </h3>
                    <p className={`text-${isActive ? 'sky-700' : 'gray'}-600`}>
                        {content}
                    </p>
                </div>
            </div>
            {isActive && (
                <motion.div
                    className="h-1 bg-sky-200 mt-4 rounded-full overflow-hidden"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                >
                    <div className="h-full bg-sky-500 rounded-full" />
                </motion.div>
            )}
        </motion.div>
    );
}