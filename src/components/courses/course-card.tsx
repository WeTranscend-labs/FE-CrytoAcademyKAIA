'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Clock, Award, ChevronRight } from 'lucide-react';
import type { Course } from '@/lib/courses';

interface CourseCardProps {
    course: Course;
    delay?: number;
}

export default function CourseCard({ course, delay = 0 }: CourseCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.02 }}
            className="group relative"
        >
            <Link href={`/learn/${course.id}/${course.modules[0].lessons[0].id}`}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
                    <div className="p-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-blue-50 rounded-xl">
                                <BookOpen className="h-6 w-6 text-blue-500" />
                            </div>
                            <span className="text-sm text-gray-500 flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {course.duration}
                            </span>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {course.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                            {course.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center text-gray-500">
                                    <BookOpen className="w-4 h-4 mr-1" />
                                    <span className="text-sm">{course.lessons} lessons</span>
                                </div>
                                <div className="flex items-center text-gray-500">
                                    <Award className="w-4 h-4 mr-1" />
                                    <span className="text-sm">Certificate</span>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-blue-500 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}