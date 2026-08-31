import { useState } from "react";
import MenuItem from "./components/MenuItem";
import menu from "./data/menu";
import translations from "./data/translations";

function App() {
    const [language, setLanguage] = useState("bg");

    const t = translations[language];

    return (
        <main>
            <header>
                <h1>{t.welcome}</h1>

                <label>
                    {t.language}:

                    <select
                        value={language}
                        onChange={(event) => setLanguage(event.target.value)}
                    >
                        <option value="bg">Български</option>
                        <option value="en">English</option>
                        <option value="ru">Русский</option>
                    </select>
                </label>
            </header>

            <section>
                <h2>{t.menu}</h2>

                {menu.map((item) => (
                    <MenuItem
                        key={item.id}
                        item={item}
                        language={language}
                    />
                ))}
            </section>

            <section>
                <h2>{t.workingHours}</h2>
                <p>Понеделник - Неделя: 10:00 - 22:00</p>
            </section>

            <section>
                <h2>{t.contact}</h2>
                <p>+359 88 123 4567</p>
            </section>
        </main>
    );
}

export default App;