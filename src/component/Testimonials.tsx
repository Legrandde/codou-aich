import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie Dubois',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    rating: 5,
    text: 'Une vision inspirante et un leadership remarquable. Codou Aïcha met la technologie et l\'innovation au service de l\'éducation au Sénégal avec une détermination constante.'
  },
  {
    id: '2',
    name: 'Jean Martin',
    role: 'Partenaire Éducatif',
    company: 'Mastercard Foundation',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    rating: 5,
    text: 'Un engagement sincère pour l\'inclusion et l\'autonomisation des jeunes vulnérables. Les résultats du programme Tàggat Ma témoignent d\'un impact concret sur le terrain.'
  },
  {
    id: '3',
    name: 'Sophie Laurent',
    role: 'Coordonnatrice Projets',
    company: 'EtriLabs',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    rating: 5,
    text: 'Codou Aïcha incarne l\'excellence et le leadership de la communauté EdTech en Afrique. Sa participation au Fellowship illustre son ambition pour le continent.'
  },
  {
    id: '4',
    name: 'Pierre Moreau',
    role: 'Fondateur',
    company: 'StartupXYZ',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    rating: 5,
    text: 'Excellent développeur full-stack. Il a su créer une application robuste et scalable. Très satisfait du résultat final et de l\'accompagnement tout au long du projet.'
  }
];

export default function Testimonials() {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className={`py-16 px-4 md:px-8 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    }`} id="testimonials">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-amber-500 uppercase tracking-wide">Témoignages</span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-2 mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ce que disent mes clients
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            La satisfaction client au cœur de mon approche
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded">
            <motion.div
              key={currentIndex}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`p-8 md:p-12 rounded ${
                theme === 'dark' 
                  ? 'bg-gray-700/50 border border-gray-600/50' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <FaQuoteLeft className="text-amber-500" size={40} />
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400" size={20} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className={`text-lg md:text-xl text-center mb-8 italic ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-amber-500"
                />
                <h4 className={`text-xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {testimonials[currentIndex].name}
                </h4>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {testimonials[currentIndex].role} - {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-white hover:bg-gray-100 text-gray-800'
              } shadow-lg`}
              aria-label="Témoignage précédent"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-white hover:bg-gray-100 text-gray-800'
              } shadow-lg`}
              aria-label="Témoignage suivant"
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-amber-500 w-8'
                    : theme === 'dark'
                    ? 'bg-gray-600'
                    : 'bg-gray-300'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
