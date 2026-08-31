function MenuItem({ item, language }) {
    return (
        <article>
            <h2>
                {item.name[language]}

                {language !== "bg" && (
                    <span> ({item.name.bg})</span>
                )}
            </h2>

            <p>{item.description[language]}</p>

            <p>{item.weight} г</p>

            <strong>{item.price.toFixed(2)} €</strong>
        </article>
    );
}

export default MenuItem;