'use client'
import { useCompletedCourses } from "@/hooks/useCompletedCourse";


export default function Ztest() {

    const { completedCourses, loading, error } = useCompletedCourses('0x0f15A975eCEf15446b1361704F290F91277eB1bd');

    if (loading) {
        return <div>Loading completed courses...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Completed Courses</h2>
            <div>
                {completedCourses.map((courseId) => (
                    <div key={courseId}>
                        Course #{courseId}
                    </div>
                ))}
            </div>
        </div>
    );
}
