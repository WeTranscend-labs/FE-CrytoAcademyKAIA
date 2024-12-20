'use client';

import { useAccount } from 'wagmi';
import { useCompletedCourses } from '@/hooks/useCompletedCourse';
import { getLessonById } from '@/lib/lessons';
import Link from 'next/link';

const CompletedCourses = () => {
  const { address } = useAccount();
  const { completedCourses, loading, error } = useCompletedCourses(address);

  console.log(completedCourses);

  // Map completed course IDs to actual lesson content
  const completedLessons = completedCourses
    .map(
      (courseId) => getLessonById('1', courseId + '') // Assuming all courses are in course '1'
    )
    .filter((lesson) => lesson !== undefined); // Remove any undefined lessons

  if (loading) return <div>Loading completed courses...</div>;
  if (error)
    return <div>Error loading completed courses: {error?.message}</div>;

  // console.log(completedLessons);

  return (
    <div className="completed-courses">
      <h2>Completed Courses</h2>
      {completedLessons.length === 0 ? (
        <p>You haven't completed any courses yet.</p>
      ) : (
        <ul className="courses-list">
          {completedLessons.map((lesson) => (
            <li key={lesson.id} className="course-item">
              <Link href={`/courses/${lesson.courseId}/lessons/${lesson.id}`}>
                <div className="course-details">
                  <h3>{lesson.title}</h3>
                  <p>{lesson.description}</p>
                  <div className="course-metadata">
                    <span>Module: {lesson.moduleTitle}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedCourses;
