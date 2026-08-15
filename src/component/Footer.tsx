import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { FaLocationDot } from 'react-icons/fa6';

export default function Footer() {
  const { theme } = useTheme();

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full border-t ${
      theme === 'dark' 
        ? 'bg-gray-900 text-gray-300 border-gray-800' 
        : 'bg-white text-gray-800 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Codou Aïcha <span className="text-amber-500">Faye</span>
            </h3>
            <p className={`mb-4 text-sm leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Directrice d'Écoles au Sénégal. Une trajectoire au service de l’humain, de l’éducation et de l’inclusion. Une femme de convictions et d’engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#accueil"
                  className={`hover:text-amber-500 transition-colors ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`hover:text-amber-500 transition-colors ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#engagements"
                  className={`hover:text-amber-500 transition-colors ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Engagements
                </a>
              </li>
              <li>
                <a
                  href="#stats"
                  className={`hover:text-amber-500 transition-colors ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Impact
                </a>
              </li>
              <li>
                <a
                  href="#parcours"
                  className={`hover:text-amber-500 transition-colors ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Parcours
                </a>
              </li>
              <li>
                <a
                  href="#formation"
                  className={`hover:text-amber-500 transition-colors ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Formation
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`hover:text-amber-500 transition-colors ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Contact & Localisation
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaPhone className="text-amber-500" />
                <a href="tel:+221776391186" className={`hover:text-amber-500 transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  +221 77 639 11 86
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-amber-500" />
                <a href="mailto:contact@ecolesausenegal.com" className={`hover:text-amber-500 transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  contact@ecolesausenegal.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaLocationDot className="text-amber-500" />
                <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Dakar, Sénégal
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-8 ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-300'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              © {currentYear} Codou Aïcha Faye. Tous droits réservés.
            </p>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              Au service de l’humain, de l’éducation et de l’inclusion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
