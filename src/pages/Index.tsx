import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WorkoutPlans from '@/components/WorkoutPlans';
import Trainers from '@/components/Trainers';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WorkoutPlans />
      <Trainers />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
