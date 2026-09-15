import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import MenuItem from "./components/MenuItem";

import menu from "./data/menu";
import translations from "./data/translations";

import "./App.css";

function App() {
    const [language, setLanguage] = useState("bg");
    const [category, setCategory] = useState("all");

    const t = translations[language];

    const filteredMenu = category === "all"
    ? menu
    : menu.filter((item) => item.category === category);

    return (
        <div className="app">

            <Navbar
                language={language}
                setLanguage={setLanguage}
            />

            <Hero t={t} />

            <main className="content">

                <section className="menu-section">

                    <h2>{t.menu}</h2>

                    <CategoryFilter 
                        t={t}
                        category={category}
                        setCategory={setCategory} 
                    />

                    <div className="menu-list">
                        {filteredMenu.map((item) => (
                            <MenuItem
                                key={item.id}
                                item={item}
                                language={language}
                            />
                        ))}
                    </div>

                </section>

                <section className="info-section">

                    <div className="info-card">
                        <h2>{t.workingHours}</h2>
                        <p>
                            Понеделник - Неделя
                        </p>
                        <p>
                            10:00 - 22:00
                        </p>
                    </div>

                    <div className="info-card">
                        <h2>{t.contact}</h2>
                        <p>
                            +359 88 123 4567
                        </p>
                    </div>

                </section>

            </main>

        </div>
    );
}

export default App;