import React, { createContext, useState, useContext, ReactNode } from "react";

interface LanguageContextType {
	language: "bengali" | "english";
	toggleLanguage: () => void;
	setLanguage: (language: any) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [language, setLanguage] = useState<"bengali" | "english">("english");

	const toggleLanguage = () => {
		setLanguage(prevLanguage => (prevLanguage === "english" ? "bengali" : "english"));
	};

	return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>;
};

export { LanguageProvider, LanguageContext };
