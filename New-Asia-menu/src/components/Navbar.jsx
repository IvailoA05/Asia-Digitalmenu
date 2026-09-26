import LanguageSelector from "./LanguageSelector";

function Navbar({ language, setLanguage }) {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
                <img
                    src="/logo.png"
                    alt="New Asia"
                    className="restaurant-logo"
                />
            </div>

            <LanguageSelector
                language={language}
                setLanguage={setLanguage}
            />

        </nav>
    );
}

export default Navbar;