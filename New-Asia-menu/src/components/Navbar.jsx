import LanguageSelector from "./LanguageSelector";

function Navbar({ language, setLanguage }) {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
                <div className="logo-circle">
                    NEW ASIA
                </div>
            </div>

            <LanguageSelector
                language={language}
                setLanguage={setLanguage}
            />

        </nav>
    );
}

export default Navbar;