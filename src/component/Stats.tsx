import { motion, useInView, type Variants } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaUsers, FaBookOpen, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface Stat {
  id: string;
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    id: '1',
    icon: <FaUsers size={36} />,
    value: 1600000,
    suffix: '+',
    label: 'Abonnés Écoles au Sénégal',
    color: 'from-amber-500 to-amber-600'
  },
  {
    id: '2',
    icon: <FaBookOpen size={36} />,
    value: 8000,
    suffix: '+',
    label: 'Ressources pédagogiques STEM & Scolaires',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: '3',
    icon: <FaBriefcase size={36} />,
    value: 10,
    suffix: '+',
    label: 'Années chez Orange & Leadership Institutionnel',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    id: '4',
    icon: <FaGraduationCap size={36} />,
    value: 4,
    suffix: ' Daaras',
    label: 'Partenaires majeurs du programme Tàggat Ma',
    color: 'from-purple-500 to-purple-600'
  }
];

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const increment = value / (duration * 60);
      const timer = setInterval(() => {
        setCount((prev) => {
          const next = prev + increment;
          if (next >= value) {
            clearInterval(timer);
            return value;
          }
          return next;
        });
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants : Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className={`py-20 px-4 md:px-8 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`} id="stats">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-amber-500 uppercase tracking-wide">Réalisations</span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-2 mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            En quelques chiffres
          </h2>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className={`relative overflow-hidden rounded p-6 ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border border-gray-700/50 hover:border-amber-500/50' 
                  : 'bg-gray-50 border border-gray-200 hover:border-amber-300'
              }`}
            >
              {/* Gradient Background */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 `} />
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded mb-4 bg-gradient-to-br ${stat.color} text-white`}>
                {stat.icon}
              </div>

              {/* Value */}
              <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
