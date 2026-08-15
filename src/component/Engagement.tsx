import { useTheme } from "../contexts/ThemeContext";
import Carte from "./Carte";

// Données mises à jour pour les engagements
const engagements = [
  {
    title: "Éducation",
    description:
      "Promouvoir une éducation de qualité pour tous, en exploitant le numérique pour réduire les fractures scolaires et favoriser l'apprentissage tout au long de la vie.",
  },
  {
    title: "Inclusion",
    description:
      "Garantir l'accès équitable aux outils et compétences numériques, afin que chaque individu, quel que soit son milieu, puisse participer pleinement à la société.",
  },
  {
    title: "EdTech",
    description:
      "Concevoir des solutions éducatives innovantes qui transforment l'enseignement, rendent l'apprentissage interactif et préparent aux métiers de demain.",
  },
  {
    title: "Engagement citoyen",
    description:
      "Encourager la participation active des citoyens dans la vie démocratique et associative grâce à des plateformes collaboratives et transparentes.",
  },
];

export default function Engagements() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-20 px-4 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-50"
      }`}
      id="engagements"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-amber-500 uppercase tracking-wide">
            Engagements
          </span>
          <h2
            className={`font-serif italic text-4xl md:text-5xl font-medium mt-2 mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Mes engagements pour demain
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Des actions concrètes et durables pour bâtir une société plus juste,
            inclusive et tournée vers l'avenir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagements.map((engagement, index) => (
            <Carte
              key={index}
              title={engagement.title}
              description={engagement.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}