import { motion } from "framer-motion";
import { GiProgression } from "react-icons/gi";
import {
  FaGraduationCap,
  FaBookReader,
  FaHeart,
  FaLightbulb,
  FaHandsHelping,
  FaFemale,
  FaAward,
  FaSchool
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import type { Variants } from "framer-motion";

export default function Banner(){
    const { theme } = useTheme();

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 2.5,
      ease: "easeOut",
    },
  },
};

const domainIcons = [
  { Icon: FaGraduationCap, angle: 0,   color: '#f59e0b', label: 'Éducation' },
  { Icon: FaHandsHelping,  angle: 90,  color: '#10b981', label: 'Inclusion' },
  { Icon: FaLightbulb,     angle: 144, color: '#3b82f6', label: 'EdTech' },
  { Icon: FaFemale,        angle: 216, color: '#ec4899', label: 'Droits des Femmes' },
  { Icon: FaBookReader,    angle: 288, color: '#8b5cf6', label: 'Savoir' },
  { Icon: FaSchool,        angle: 28,  color: '#f97316', label: 'STEM' },
  { Icon: FaAward,         angle: 180, color: '#eab308', label: 'Fellowship' },
  { Icon: FaHeart,         angle: 250, color: '#ef4444', label: 'Engagement' },
];

    return(
        <motion.div 
            id="accueil" 
            className={`relative flex m-auto md:flex-row flex-col justify-center items-center min-h-[85vh] px-4 py-12 ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Grille en arrière-plan */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: theme === 'dark'
                        ? 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)'
                        : 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <motion.div 
                className="flex justify-center items-center md:items-start text-center md:text-left flex-col p-4 z-10 max-w-2xl"
                variants={containerVariants}
            >
                <motion.a 
                    href="#engagements"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors mb-4 ${
                        theme === 'dark' 
                            ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                            : 'bg-amber-500 hover:bg-amber-600 text-white shadow-md'
                    }`}
                >
                    <GiProgression />
                    Découvrir mes engagements
                </motion.a>

                <motion.span 
                    variants={itemVariants}
                    className={`text-xl font-medium mb-1 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                >
                    Bienvenue sur le site officiel de
                </motion.span>
                <motion.h1 
                    variants={itemVariants}
                    className={`md:text-5xl text-4xl font-black my-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                >
                    Codou Aïcha <span className="text-amber-500">Faye</span>
                </motion.h1>
                <motion.h2 
                    variants={itemVariants}
                    className={`text-lg md:text-xl font-semibold mb-4 ${
                      theme === 'dark' ? 'text-amber-400' : 'text-amber-600'
                    }`}
                >
                    Directrice d'Écoles au Sénégal | EdTech, Éducation & Inclusion
                </motion.h2>
                <motion.p 
                    variants={itemVariants}
                    className={`text-base md:text-lg leading-relaxed ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                >
                    Une trajectoire au service de l’humain, de l’éducation et de l’inclusion. Une femme de convictions et d’engagement pour la cause des femmes, la protection de l'enfance et l'accès au savoir pour tous.
                </motion.p>
            </motion.div>

            {/* Wrapper relatif autour de l'image pour positionner les icônes */}
            <div className="relative flex items-center justify-center md:w-[40%] w-[80%] aspect-square z-10 mt-8 md:mt-0">
                <motion.img 
                    src="codou.png" 
                    alt="Codou Aïcha Faye" 
                    variants={imageVariants}
                    className={`object-contain w-full h-full rounded-2xl ${
                        theme === 'dark' ? 'bg-amber-500/10 border border-gray-800' : 'bg-amber-50 border border-amber-100'
                    }`}
                />

                {domainIcons.map(({ Icon, angle, color, label }, index) => {
                    const rad = (angle * Math.PI) / 180;
                    const radius = 140;
                    const x = Math.cos(rad) * radius;
                    const y = Math.sin(rad) * radius;
                    return (
                        <motion.div
                            key={index}
                            title={label}
                            style={{ position: 'absolute', left: '50%', top: '50%' }}
                            initial={{ opacity: 0, scale: 0, x: x - 20, y: y - 20 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: [x - 20, x - 26, x - 20],
                                y: [y - 20, y - 26, y - 20],
                            }}
                            transition={{
                                opacity: { delay: 1 + index * 0.15, duration: 0.4 },
                                scale:   { delay: 1 + index * 0.15, duration: 0.4, type: 'spring' },
                                x: { delay: 1 + index * 0.15, duration: 2.5 + index * 0.4, repeat: Infinity, ease: 'easeInOut' },
                                y: { delay: 1 + index * 0.15, duration: 2.5 + index * 0.4, repeat: Infinity, ease: 'easeInOut' },
                            }}
                        >
                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-lg ${
                                theme === 'dark' ? 'bg-gray-800/90 border border-gray-700' : 'bg-white/95 border border-gray-200'
                            }`}>
                                <Icon size={22} color={color} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
            
        </motion.div>
    )
}