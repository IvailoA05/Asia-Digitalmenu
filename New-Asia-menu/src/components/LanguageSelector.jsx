import { useState } from "react";

function LanguageSelector({ language, setLanguage }) {
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        {
            code: "en",
            name: "EN",
            flag: <img src="/flags/gb.svg" width="28" />
        },
        {
            code: "bg",
            name: "BG",
            flag: <img src="/flags/bg.svg" width="28" />
        },
        {
            code: "ru",
            name: "RU",
            flag: <img src="/flags/ru.svg" width="28" />
        }
    ];

    const currentLanguage = languages.find(
        (item) => item.code === language
    );

    const handleLanguageChange = (code) => {
        setLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="language-selector">

            {/* Mobile button */}
            <button
                className="current-language"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="language-flag">
                    {currentLanguage.flag}
                </span>

                <span>
                    {currentLanguage.name}
                </span>

                <span className="dropdown-arrow">
                    {isOpen ? "▲" : "▼"}
                </span>
            </button>

            {/* Desktop languages */}
            <div className="desktop-languages">
                {languages.map((item) => (
                    <button
                        key={item.code}
                        className={
                            language === item.code
                                ? "language active"
                                : "language"
                        }
                        onClick={() => handleLanguageChange(item.code)}
                    >
                        <span className="language-flag">
                            {item.flag}
                        </span>

                        <span>
                            {item.name}
                        </span>
                    </button>
                ))}
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <div className="mobile-language-dropdown">

                    {languages
                        .filter((item) => item.code !== language)
                        .map((item) => (
                            <button
                                key={item.code}
                                className="dropdown-language"
                                onClick={() =>
                                    handleLanguageChange(item.code)
                                }
                            >
                                <span className="language-flag">
                                    {item.flag}
                                </span>

                                <span>
                                    {item.name}
                                </span>
                            </button>
                        ))}

                </div>
            )}

        </div>
    );
}

export default LanguageSelector;