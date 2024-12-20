import CourseList from "@/components/courses/course-list";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";



export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <Features />
      <CourseList />
    </div>
  );
}