function CategoryFilter({ t, category, setCategory }) {
    const categories = [
        {
            id: "all",
            name: t.all
        },
        {
            id: "main-dishes",
            name: t.mainDishes
        },
        {
            id: "soups",
            name: t.soups
        },
        /*{
            id: "drinks",
            name: t.drinks
        }*/
    ];

    return (
        <div className="category-filter">
            {categories.map((item) => (
                <button 
                key={item.id}
                className={category === item.id ? "active" : ""}
                onClick={() => setCategory(item.id)}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;