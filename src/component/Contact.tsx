import { FaEnvelope, FaObjectGroup } from "react-icons/fa";
import Input from "./Input";
import { BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { useTheme } from "../contexts/ThemeContext";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_zhuqprr";
const EMAILJS_TEMPLATE_ID = "template_99gyvoh";
const EMAILJS_PUBLIC_KEY = "fN-fc0pCsV0iFwGrH";

type Status = "idle" | "loading" | "success" | "error" | "empty";

interface FormData {
    email: string;
    object: string;
    message: string;
}

export default function Contact() {
    const { theme } = useTheme();
    const formRef = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState<FormData>({
        email: "",
        object: "",
        message: "",
    });

    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (name: keyof FormData, value: string): void => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (!formData.email || !formData.object || !formData.message) {
            setStatus("empty");
            return;
        }

        if (!formRef.current) return;

        setStatus("loading");

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            setFormData({ email: "", object: "", message: "" });
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus("error");
        }
    };

    return (
        <div
            className={`flex p-4 w-full gap-4 flex-col justify-center items-center ${
                theme === "dark" ? "bg-gray-900" : "bg-transparent"
            }`}
            id="contact"
        >
            <div className="text-center mb-12">
                <span className="text-sm font-semibold text-amber-500 uppercase tracking-wide">
                    Contact
                </span>
                <h2
                    className={`text-4xl md:text-5xl font-bold mt-2 mb-4 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                >
                    Prenez contact
                </h2>
                <p
                    className={`text-lg max-w-2xl mx-auto ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                    Pour toute sollicitation, projet éducatif, initiative d'inclusion ou prise de parole publique.
                </p>
            </div>

            <div
                className={`flex p-6 justify-center m-auto w-full md:w-[80%] flex-col md:flex-row rounded-2xl transition-all ${
                    theme === "dark"
                        ? "bg-gray-800/50 border border-gray-700/50"
                        : "bg-white border border-gray-200 shadow-lg"
                }`}
            >
                <div className="flex p-4 flex-col gap-6 justify-center">
                    <a href="tel:+221776391186" className={`flex items-center gap-4 hover:text-amber-500 transition-colors ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                        <div className="p-3 rounded-full bg-amber-500/20 text-amber-500">
                            <BiPhone size={22} />
                        </div>
                        <span className="font-medium">+221 77 639 11 86</span>
                    </a>
                    <a href="mailto:codouaicha.faye@ecolesausenegal.org" className={`flex items-center gap-4 hover:text-amber-500 transition-colors ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                        <div className="p-3 rounded-full bg-amber-500/20 text-amber-500">
                            <FaEnvelope size={20} />
                        </div>
                        <span className="font-medium">codouaicha.faye@ecolesausenegal.org</span>
                    </a>
                    <div className={`flex items-center gap-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                        <div className="p-3 rounded-full bg-amber-500/20 text-amber-500">
                            <CiLocationOn size={24} />
                        </div>
                        <span className="font-medium">Dakar, Sénégal</span>
                    </div>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="md:w-[50%] p-4 flex gap-4 flex-col"
                >
                    <Input
                        icons={<FaEnvelope />}
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="E-mail"
                        onChangeValue={(val: string) => handleChange("email", val)}
                    />
                    <Input
                        icons={<FaObjectGroup />}
                        type="text"
                        name="object"
                        value={formData.object}
                        placeholder="Objet"
                        onChangeValue={(val: string) => handleChange("object", val)}
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                            handleChange("message", e.target.value)
                        }
                        className={`h-40 p-2 rounded outline-none resize-none ${
                            theme === "dark"
                                ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
                                : "bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-300"
                        }`}
                        placeholder="Message..."
                    />

                    {status === "empty" && (
                        <p className="text-red-400 text-sm">
                            Veuillez remplir tous les champs.
                        </p>
                    )}
                    {status === "success" && (
                        <p className="text-green-400 text-sm">
                            Message envoyé avec succès !
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-red-400 text-sm">
                            Une erreur s'est produite. Réessaie plus tard.
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="p-3 bg-amber-400 hover:bg-amber-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded transition-colors"
                    >
                        {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                    </button>
                </form>
            </div>
        </div>
    );
}