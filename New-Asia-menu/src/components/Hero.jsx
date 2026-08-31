function Hero({ t }) {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <p className="hero-subtitle">
                    Chinese Cuisine
                </p>

                <h1>
                    New Asia
                </h1>

                <p className="hero-description">
                    {t.welcome}
                </p>
            </div>
        </section>
    );
}

export default Hero;