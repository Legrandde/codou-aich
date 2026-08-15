import { motion, type Variants } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FaGraduationCap, FaCalendarAlt, FaAward } from 'react-icons/fa';

interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
}

const educations: Education[] = [
  {
    id: '1',
    degree: 'Formation Scientifique',
    institution: 'École Supérieure Polytechnique (ESP) de Dakar',
    period: 'Diplôme Scientifique',
    description: "Une formation scientifique rigoureuse ayant posé les fondations d'un parcours professionnel pluriel orienté vers l'innovation et les STEM.",
    achievements: ['Projets scientifiques', 'Compétences analytiques & gestion']
  },
  {
    id: '2',
    degree: 'Spécialisation en Médiation (en cours)',
    institution: 'Dialogue Social & Règlement des Conflits',
    period: 'Formation Supérieure',
    description: "Compétences clés en médiation, négociation institutionnelle et résolution pacifique des différends au service du collectif.",
    achievements: ['Médiation sociale', 'Gestion des relations de travail']
  }
];

export default function Formation() {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  // const cardHoverVariants = {
  //   hover: {
  //     y: -10,
  //     scale: 1.02,
  //     transition: {
  //       duration: 0.3,
  //       ease: 'easeOut'
  //     }
  //   }
  // };

  return (
    <section className={`py-16 px-4 md:px-8 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`} id="formation">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-amber-500 uppercase tracking-wide">Formation</span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-2 mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Parcours académique
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Une formation solide pour une expertise reconnue
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {educations.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover="hover"
              className={`relative overflow-hidden rounded transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[400px] ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border border-gray-700/50 hover:border-amber-500/50' 
                  : 'bg-white border border-gray-200 hover:border-amber-300'
              }`}
            >
              {/* Decorative Gradient */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600`} />
              
              <div className="p-6">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className={`inline-flex p-4 rounded mb-4 ${
                    theme === 'dark' ? 'bg-amber-500/20' : 'bg-amber-100'
                  }`}
                >
                  <FaGraduationCap className="text-amber-500" size={32} />
                </motion.div>

                {/* Degree */}
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className={`text-lg font-semibold mb-3 text-amber-500`}>
                  {edu.institution}
                </p>

                {/* Period */}
                <div className={`flex items-center gap-2 mb-4 text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <FaCalendarAlt />
                  <span>{edu.period}</span>
                </div>

                {/* Description */}
                <p className={`mb-4 text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {edu.description}
                </p>

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className={`pt-4 border-t ${
                    theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <FaAward className="text-amber-500" size={16} />
                      <span className={`text-sm font-semibold ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Réalisations
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className={`text-xs flex items-center gap-2 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            theme === 'dark' ? 'bg-amber-500' : 'bg-amber-400'
                          }`} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Certifications Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-12 p-6 rounded ${
            theme === 'dark' 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-gray-50 border border-gray-200'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Certifications & Formations continues
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Certification AWS Cloud Practitioner',
              'React Advanced Patterns - Udemy',
              'Node.js Best Practices - Pluralsight',
              'Agile & Scrum Master'
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-3 p-3 rounded ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                <FaAward className="text-amber-500" size={20} />
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}