function MenuItem({ item, language }) {
    return (
        <article className="menu-item">

            <div className="menu-item-image-container">
                <img
                    src={item.image}
                    alt={item.name[language]}
                    className="menu-item-image"
                />
            </div>

            <div className="menu-item-content">

                <h3 className="menu-item-name">
                    {item.name[language]}

                    {language !== "bg" && (
                        <span className="bulgarian-name">
                            ({item.name.bg})
                        </span>
                    )}
                </h3>

                <p className="menu-item-description">
                    {item.description[language]}
                </p>

                <div className="menu-item-bottom">

                    <span className="menu-item-weight">
                        {item.weight} г
                    </span>

                    <span className="menu-item-price">
                        {item.price.toFixed(2)} €
                    </span>

                </div>

            </div>

        </article>
    );
}

export default MenuItem;