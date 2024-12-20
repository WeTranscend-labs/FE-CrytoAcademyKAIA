import { getAllCourses } from '@/lib/courses';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';


export default function CourseList() {
    const courses = getAllCourses();

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Featured Courses
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => (
                        <Link
                            key={course.id}
                            href={`/learn/${course.id}/${course.modules[0].lessons[0].id}`}
                            className="block group"
                        >
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <BookOpen className="h-6 w-6 text-blue-600" />
                                        <span className="text-sm text-gray-500">{course.duration}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{course.description}</p>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">{course.lessons} lessons</span>
                                        <span className="text-blue-600 font-medium">Start Learning →</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}