import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

interface Engagement {
  id: string;
  title: string;
  description: string;
  mainImage: string;
  images: string[];
  category: "Éducation" | "Inclusion" | "Droits des femmes" | "EdTech";
  partenaire?: string;
  link?: string;
}

interface EngagementCardProps {
    engagement: Engagement;
    onClick: () => void;
}

export default function EngagementCard({ engagement, onClick }: EngagementCardProps){
    const { theme } = useTheme();

    return(
        <motion.div 
            initial={{opacity:0, y: 20}} 
            transition={{duration:.5}} 
            animate={{opacity:1, y: 0}}
            whileHover={{ y: -5 }}
            className="w-full md:w-96"
        >
            <div 
                className={`relative flex flex-col w-full rounded overflow-hidden cursor-pointer transition-all duration-300 ${
                    theme === 'dark' 
                        ? 'bg-gray-800/50 border border-gray-700/50 hover:border-amber-500/50' 
                        : 'bg-white border border-gray-200 hover:border-amber-300'
                }`}
                onClick={onClick}
            >
                <div className="relative w-full h-48 overflow-hidden">
                    <img 
                        src={engagement.mainImage} 
                        alt={engagement.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-amber-500/80 text-white">
                            {engagement.category}
                        </span>
                    </div>
                </div>
                <div className={`flex flex-col p-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                    {engagement.partenaire && (
                        <span className={`text-xs mb-1 font-medium ${
                            theme === 'dark' ? 'text-amber-400' : 'text-amber-600'
                        }`}>
                            {engagement.partenaire}
                        </span>
                    )}
                    <h2 className="text-xl font-bold mb-2">{engagement.title}</h2>
                    <p className={`text-sm mb-4 line-clamp-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        {engagement.description}
                    </p>
                    <button className="p-2 cursor-pointer flex items-center bg-amber-400 hover:bg-amber-500 w-40 gap-4 self-end rounded transition-colors font-medium">
                        En savoir plus <FaArrowRight />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}