import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

export default function Header(){
    const { theme, toggleTheme } = useTheme();
    const [menuDisplay, setMenuDisplay]= useState<boolean>(false)
    
    return(
        <header className={`sticky top-0 z-50 w-full backdrop-blur-sm ${
            theme === 'dark' ? 'bg-gray-900/80 border-b border-gray-800' : 'bg-white/80 border-b border-gray-200'
        }`}>

                <div className={`flex p-4 w-full items-center justify-around max-w-7xl mx-auto ${
                    theme === 'dark' ? '' : ''
                }`}>
                    <h1 className={`text-xl ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                        Codou Aïcha <span className="font-bold text-amber-500">Faye</span>
                    </h1>
                    <div className="flex items-center justify-center gap-2 md:gap-8">
                        <div className={`md:flex hidden items-center justify-center gap-1.5 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            <FaLocationDot className="text-amber-500"/>
                            Dakar, Sénégal
                        </div>
                        <a 
                            href="tel:+221776391186"
                            className={`md:flex hidden items-center justify-center gap-1.5 text-sm font-medium ${
                                theme === 'dark' ? 'text-gray-300 hover:text-amber-400' : 'text-gray-700 hover:text-amber-600'
                            }`}
                        >
                            +221 77 639 11 86
                        </a>
                        <a 
                            href="#contact"
                            className={`p-2 hover:cursor-pointer hover:bg-amber-500 hover:text-white border border-amber-500 rounded transition-colors ${
                                theme === 'dark' 
                                    ? 'bg-gray-800 text-white' 
                                    : 'bg-white text-gray-900'
                            }`}
                        >
                            Contact
                        </a>
                        
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors ${
                                theme === 'dark'
                                    ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
                                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                            }`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
                        </button>

                        <BiMenu 
                            size={30} 
                            className={`md:hidden hover:cursor-pointer ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}
                            onClick={()=> setMenuDisplay(!menuDisplay)}
                        />
                    </div>
                </div>

                <div className={`${menuDisplay? "flex flex-col": "hidden"} md:flex md:flex-row md:flex-wrap p-4 items-center justify-center gap-x-8 gap-y-2 md:w-[90%] lg:w-[75%] m-auto border-t ${
                    theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
                }`}>
                    <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 md:gap-8 font-medium">
                        <a 
                            href="#accueil" 
                            className={`whitespace-nowrap hover:text-amber-500 transition-colors ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            Accueil
                        </a>
                        <a 
                            href="#about" 
                            className={`whitespace-nowrap hover:text-amber-500 transition-colors ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            À propos
                        </a>
                        <a 
                            href="#engagements" 
                            className={`whitespace-nowrap hover:text-amber-500 transition-colors ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            Engagements
                        </a>
                        <a 
                            href="#stats" 
                            className={`whitespace-nowrap hover:text-amber-500 transition-colors ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            Impact
                        </a>
                        <a 
                            href="#parcours" 
                            className={`whitespace-nowrap hover:text-amber-500 transition-colors ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            Parcours
                        </a>
                        <a 
                            href="#formation" 
                            className={`whitespace-nowrap hover:text-amber-500 transition-colors ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            Formation
                        </a>
                        <a 
                            href="#contact" 
                            className={`whitespace-nowrap hover:text-amber-500 transition-colors ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            Contact
                        </a>
                    </div>
                    
                </div>
            </header>
    )
}