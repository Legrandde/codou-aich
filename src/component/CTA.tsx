import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';

export default function CTA() {
  const { theme } = useTheme();

  return (
    <section className={`py-20 px-4 md:px-8 relative overflow-hidden ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`} id="cta">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute inset-0 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
        }`} style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center p-8 md:p-12 rounded ${
            theme === 'dark' 
              ? 'bg-gray-800/50 border border-gray-700/50' 
              : 'bg-gray-50 border border-gray-200'
          }`}
        >
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-3xl md:text-5xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Ensemble pour <span className="text-amber-500">l'Éducation</span> et l'Inclusion
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-lg md:text-xl mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Mettre l'innovation technologique et l'action citoyenne au service de la transformation sociale au Sénégal et en Afrique.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-colors shadow-lg"
            >
              <FaEnvelope />
              Me contacter
              <FaArrowRight />
            </motion.a>

            <motion.a
              href="https://ecolesausenegal.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-8 py-4 border-2 border-amber-500 font-semibold rounded-full transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white text-amber-600 hover:bg-amber-50'
              }`}
            >
              Écoles au Sénégal
              <FaArrowRight />
            </motion.a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className={`mt-8 pt-8 border-t ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <p className={`text-sm font-medium ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Écoles au Sénégal • Programme Tàggat Ma • Mastercard Foundation EdTech Fellow
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
