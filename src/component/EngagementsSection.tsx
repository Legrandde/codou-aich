import EngagementCard from "./EngagementCard";
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

interface EngagementsSectionProps {
    engagements: Engagement[];
    onEngagementClick: (engagement: Engagement) => void;
}

export default function EngagementsSection({ engagements, onEngagementClick }: EngagementsSectionProps) {
    const { theme } = useTheme();

    return (
        <div className={`flex md:flex-col w-full flex-col  p-6 ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-transparent'
        }`} id="engagements">
            <div className="text-center mb-12">
                <span className="text-sm font-semibold text-amber-500 uppercase tracking-wide">Impact</span>
                <h2 className={`text-4xl md:text-5xl font-bold mt-2 mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                    Mes engagements
                </h2>
                <p className={`text-lg max-w-2xl mx-auto ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                    Des initiatives qui témoignent de ma conviction que le numérique doit réduire les inégalités éducatives
                </p>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-6 justify-center flex-wrap">
                {engagements.map((engagement) => (
                    <EngagementCard 
                        key={engagement.id} 
                        engagement={engagement} 
                        onClick={() => onEngagementClick(engagement)}
                    />
                ))}
            </div>
        </div>
    );
}