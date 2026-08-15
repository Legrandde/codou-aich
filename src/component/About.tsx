import { FaPhone } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";

export default function About(){
    const { theme } = useTheme();

    return (
        <section className={`py-20 px-4 m-auto max-w-6xl ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`} id="about">
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-shrink-0">
                    <img src="codouAbout.jpg" alt="Codou Aïcha Faye - Directrice Écoles au Sénégal" className="w-80 hidden md:block h-80 rounded-2xl shadow-xl object-cover border-4 border-amber-500/20"/>
                </div>
                <div className="flex flex-col gap-5 flex-1">
                    <div>
                        <span className="text-sm font-semibold text-amber-500 uppercase tracking-wide">À propos</span>
                        <h2 className={`text-3xl md:text-4xl font-bold mt-1 mb-2 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                            Une femme de convictions et d’engagement
                        </h2>
                        <h3 className="text-lg font-medium text-amber-500 italic">
                            Une trajectoire au service de l’humain, de l’éducation et de l’inclusion
                        </h3>
                    </div>
                    <p className={`text-base leading-relaxed ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        Je suis une professionnelle engagée, une femme de convictions et une voix citoyenne. Je me définis avant tout par les causes que je choisis de défendre : la cause des femmes, l’éducation, la santé, la protection de l’enfance et la défense des personnes les plus vulnérables.
                    </p>
                    <p className={`text-base leading-relaxed ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        Mon engagement ne s’arrête pas aux fonctions que j’exerce. Il se prolonge dans mes prises de parole, mes écrits, mes plaidoyers et les combats que je choisis de porter lorsqu’une injustice, une inégalité ou une situation de vulnérabilité ne peut, à mes yeux, être passée sous silence.
                    </p>
                    <div className={`p-4 rounded-xl ${
                        theme === 'dark' ? 'bg-gray-800/80 text-gray-200' : 'bg-amber-50/80 text-gray-800'
                    }`}>
                        <p className="font-semibold text-amber-500 text-sm uppercase tracking-wider mb-1">Fil rouge</p>
                        <p className="italic font-medium text-base md:text-lg">
                            "Former. Transmettre. Défendre. Inclure. Donner une voix à ceux qui en ont moins, créer des opportunités là où elles manquent et rapprocher le savoir de ceux qui en ont besoin."
                        </p>
                    </div>
                    <a 
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 w-fit rounded-full bg-amber-500 hover:bg-amber-600 text-white font-medium transition-colors shadow-md mt-2"
                    >
                        <FaPhone /> Me contacter
                    </a>
                </div>
            </div>

        </section>
    )
}