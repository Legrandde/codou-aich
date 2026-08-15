import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import type { Engagement } from "../data/engagements";

interface EngagementModalProps {
  engagement: Engagement | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EngagementModal({ engagement, isOpen, onClose }: EngagementModalProps) {
  const { theme } = useTheme();

  if (!engagement) return null;

  const isDark = theme === "dark";

  return (
    <AnimatePresence>
      {isOpen && (
        // ── Overlay ────────────────────────────────────────────────────────
        <motion.div
          key="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
        >
          {/* ── Panel principal ────────────────────────────────────────────── */}
          <motion.div
            key="modal-panel"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row ${
              isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}
            style={{ height: "min(88vh, 580px)" }}
          >
            {/* ── Colonne image (gauche) ──────────────────────────────────── */}
            <div className="relative w-full md:w-1/2 h-56 md:h-full flex-shrink-0">
              <img
                src={engagement.mainImage}
                alt={engagement.title}
                className="w-full h-full object-cover"
              />

              {/* Badge catégorie */}
              <span
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest"
                style={{
                  background: "rgba(245,158,11,0.15)",
                  color: "#f59e0b",
                  border: "1px solid rgba(245,158,11,0.4)",
                }}
              >
                {engagement.category}
              </span>

              {/* Gradient de transition vers le contenu (mobile) */}
              <div
                className="absolute bottom-0 left-0 right-0 h-16 md:hidden"
                style={{
                  background: isDark
                    ? "linear-gradient(to bottom, transparent, #111827)"
                    : "linear-gradient(to bottom, transparent, white)",
                }}
              />
            </div>

            {/* ── Colonne contenu (droite) ────────────────────────────────── */}
            <div className="flex flex-col flex-1 p-6 md:p-8 overflow-hidden">
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Fermer"
                className={`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${
                  isDark
                    ? "hover:bg-white/10 text-gray-400 hover:text-white"
                    : "hover:bg-black/5 text-gray-400 hover:text-gray-900"
                }`}
              >
                <X size={18} />
              </button>

              {/* Partenaire ou catégorie */}
              <p className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
                {engagement.partenaire ?? engagement.category}
              </p>

              {/* Titre */}
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
                {engagement.title}
              </h2>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-5 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {engagement.description}
              </p>

              {/* Séparateur */}
              <div
                className={`w-10 h-px mb-5 ${isDark ? "bg-white/10" : "bg-black/10"}`}
              />

              {/* Miniatures (max 3, visibles si place disponible) */}
              {engagement.images.length > 0 && (
                <div className="hidden md:flex gap-2 mt-auto">
                  {engagement.images.slice(0, 3).map((img, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-lg overflow-hidden aspect-video"
                    >
                      <img
                        src={img}
                        alt={`${engagement.title} capture ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Actions */}
              {engagement.link && (
                <div
                  className={`flex gap-3 mt-5 pt-5 border-t border-dashed ${
                    isDark ? "border-white/10" : "border-gray-200"
                  }`}
                >
                  {/* ✅ Correction : ajout de la balise <a> */}
                  <a
                    href={engagement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold transition-colors"
                  >
                    <ExternalLink size={14} />
                    En savoir plus
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}