import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Zap, Target, Flower } from 'lucide-react';

const workoutPlans = [
  {
    id: 1,
    title: 'Weight Loss',
    icon: Zap,
    description: 'High-intensity workouts designed to burn fat and boost metabolism',
    fullDescription: 'Our Weight Loss program combines HIIT training, cardio circuits, and strength exercises to maximize calorie burn. Perfect for those looking to shed pounds while building lean muscle. Includes nutrition guidance and progress tracking.',
    features: ['4-6 workouts per week', 'HIIT and cardio focus', 'Nutrition plan included', 'Progress tracking', 'Personal coaching']
  },
  {
    id: 2,
    title: 'Muscle Gain',
    icon: Target,
    description: 'Strength training programs to build lean muscle and increase power',
    fullDescription: 'Build impressive muscle mass with our scientifically-designed strength training programs. Focus on progressive overload, compound movements, and optimal recovery for maximum muscle growth.',
    features: ['5-6 strength sessions per week', 'Progressive overload system', 'Muscle-building nutrition', 'Recovery protocols', 'Form coaching']
  },
  {
    id: 3,
    title: 'Flexibility',
    icon: Flower,
    description: 'Improve mobility, balance, and overall body wellness',
    fullDescription: 'Enhance your flexibility and mobility with our comprehensive wellness program. Combining yoga, pilates, and mobility work to improve posture, reduce stress, and increase overall well-being.',
    features: ['Daily mobility work', 'Yoga and pilates', 'Stress reduction techniques', 'Posture improvement', 'Mind-body connection']
  }
];

const WorkoutPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<typeof workoutPlans[0] | null>(null);

  return (
    <section id="workout-plans" className="py-20 bg-secondary">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat mb-6">
            <span className="text-gradient-gold">Workout</span> Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our expertly crafted programs designed to help you achieve your fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workoutPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card key={plan.id} className="group hover:shadow-elegant transition-smooth cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 transition-spring">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-montserrat">{plan.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {plan.description}
                  </p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                        onClick={() => setSelectedPlan(plan)}
                      >
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-3 text-2xl">
                          <Icon className="w-6 h-6 text-primary" />
                          {plan.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {plan.fullDescription}
                        </p>
                        <div>
                          <h4 className="font-semibold mb-2">What's Included:</h4>
                          <ul className="space-y-1">
                            {plan.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full shadow-gold">
                          Start This Plan
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlans;