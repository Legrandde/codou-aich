import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import Header from "../component/Header";
import Banner from "../component/Banner";
import About from "../component/About";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

import Parcours from "../component/Parcours";
import Formation from "../component/Formation";
import Stats from "../component/Stats";

import CTA from "../component/CTA";
import EngagementsSection from "../component/EngagementsSection";
import { useTheme } from "../contexts/ThemeContext";
import { BsWhatsapp } from "react-icons/bs";
import Engagements from "../component/Engagement";

import engagements from "../data/engagements";
import type { Engagement } from "../data/engagements";
import EngagementModal from "../component/ProjectModal";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpTransition: Transition = {
  duration: 0.55,
  ease: [0.16, 1, 0.3, 1],
};

export default function Portfolio() {
  const { theme } = useTheme();
  const [selectedEngagement, setSelectedEngagement] = useState<Engagement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEngagementClick = (engagement: Engagement) => {
    setSelectedEngagement(engagement);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEngagement(null), 300);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <button onClick={() => window.open("https://wa.me/221776391186", "_blank")} className="bg-green-500 hover:bg-green-600 transition-colors fixed bottom-6 right-6 p-3 rounded-full cursor-pointer shadow-2xl text-white z-50 flex items-center justify-center" aria-label="Contacter sur WhatsApp"><BsWhatsapp color="white" size={28} /></button>
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        <Header />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
        <Banner />
      </motion.div>

      <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <About />
      </motion.div>

      <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <Engagements />
      </motion.div>

      {/* <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <Skills />
      </motion.div> */}

      <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <Stats />
      </motion.div>

      <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <Parcours />
      </motion.div>

      <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <Formation />
      </motion.div>

      {/* <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <Process />
      </motion.div> */}

      <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <EngagementsSection engagements={engagements} onEngagementClick={handleEngagementClick} />
      </motion.div>

      {/* Section Témoignages */}
      <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        {/* <Testimonials /> */}
      </motion.div>

      <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <Contact />
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        <CTA />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <Footer />
      </motion.div>

      <EngagementModal engagement={selectedEngagement} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}