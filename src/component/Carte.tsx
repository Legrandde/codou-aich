import { FaGraduationCap, FaHandsHelping, FaLaptopCode, FaFeatherAlt, FaFemale } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

interface CarteProps {
    title: string;
    description: string;
}

const icons: Record<string, React.ReactNode> = {
    'Éducation': <FaGraduationCap size={32} />,
    'Inclusion': <FaHandsHelping size={32} />,
    'EdTech': <FaLaptopCode size={32} />,
    'Engagement citoyen': <FaFeatherAlt size={32} />,
    'Droits des femmes': <FaFemale size={32} />
};

export default function Carte({ title, description }: CarteProps){
    const { theme } = useTheme();

    return(
        <div className={`flex flex-col p-6 rounded transition-all duration-300 hover:-translate-y-1 ${
            theme === 'dark' 
                ? 'bg-gray-700/50 border border-gray-600/50 hover:border-amber-500/50' 
                : 'bg-white border border-gray-200 hover:border-amber-300'
        }`}>
            <div className={`inline-flex p-3 rounded w-fit mb-4 ${
                theme === 'dark' ? 'bg-amber-500/20' : 'bg-amber-50'
            }`}>
                <div className="text-amber-500">
                    {icons[title] || <FaGraduationCap size={32} />}
                </div>
            </div>
            <h3 className={`text-xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
                {title}
            </h3>
            <p className={`text-sm leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
                {description}
            </p>
        </div>
    )
}