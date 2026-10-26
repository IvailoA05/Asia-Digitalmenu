import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import MenuItem from "./components/MenuItem";
import Footer from "./components/Footer";

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

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const hero = document.querySelector(".hero");

        if (!hero) return;

    const heroBottom = hero.getBoundingClientRect().bottom;

    setShowScrollTop(heroBottom <= 0);
    };

     handleScroll();

     window.addEventListener("scroll", handleScroll, {
        passive: true
    });

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);

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
                        <h2 class="info-title">
                            <img src="/icons/clock.png" alt="" />    
                            {t.workingHours}
                        </h2>
                        <p class="working-days">
                            {t.workingDays}
                        </p>
                        <p class="working-hours">
                            10:00 - 22:00
                        </p>
                        <p class="working-days">
                            {t.workingSaturday}
                        </p>
                        <p class="working-hours">
                            10:00 - 19:00
                        </p>
                        <p class="working-days">
                            {t.restDay}
                        </p>
                    </div>

                   {/*  <div className="info-card">
                        <h2>{t.contact}</h2>
                        <p>
                            +359 88 123 4567
                        </p>
                    </div> */}

                </section>

                <Footer />

            </main>

            {showScrollTop && (
                <button
                    className="scroll-to-top"
                    onClick={() =>
                    window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                    })
                     }
                    aria-label="Върни се най-горе"
                     title="Най-горе"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="m18 15-6-6-6 6" />
                        </svg>
                    </button>
                     )}

        </div>
    );
}

export default App;