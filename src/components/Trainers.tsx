import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const trainers = [
  {
    id: 1,
    name: 'Alex Rivera',
    specialty: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    social: {
      instagram: '#',
      twitter: '#',
      facebook: '#'
    }
  },
  {
    id: 2,
    name: 'Maya Chen',
    specialty: 'Yoga & Flexibility',
    image: 'https://images.unsplash.com/photo-1594736797933-d0edeaa0cf8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    social: {
      instagram: '#',
      twitter: '#',
      facebook: '#'
    }
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    specialty: 'HIIT & Weight Loss',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    social: {
      instagram: '#',
      twitter: '#',
      facebook: '#'
    }
  },
  {
    id: 4,
    name: 'Sofia Martinez',
    specialty: 'Pilates & Core',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    social: {
      instagram: '#',
      twitter: '#',
      facebook: '#'
    }
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-20 bg-background">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat mb-6">
            Expert <span className="text-gradient-gold">Trainers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our certified professionals who will guide you on your fitness journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer) => (
            <Card key={trainer.id} className="group overflow-hidden hover:shadow-elegant transition-smooth">
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold font-montserrat mb-2">
                  {trainer.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {trainer.specialty}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <a
                    href={trainer.social.instagram}
                    className="w-10 h-10 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-smooth group"
                  >
                    <Instagram className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                  </a>
                  <a
                    href={trainer.social.twitter}
                    className="w-10 h-10 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-smooth group"
                  >
                    <Twitter className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                  </a>
                  <a
                    href={trainer.social.facebook}
                    className="w-10 h-10 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-smooth group"
                  >
                    <Facebook className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;