import CourseList from '@/components/courses/course-list';
import Background from '@/components/eldoraui/novatrixbg';
import Features from '@/components/home/features';
import Hero from '@/components/home/hero';
import Testimonials from '@/components/home/TestimonalSliderDemo';
import Ztest from '@/components/test';

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <Features />
      <CourseList />
      <Testimonials />
      {/* <Ztest /> */}
    </div>
  );
}
