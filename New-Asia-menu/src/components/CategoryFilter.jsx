function CategoryFilter({ t }) {
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
        {
            id: "drinks",
            name: t.drinks
        }
    ];

    return (
        <div className="category-filter">
            {categories.map((category) => (
                <button key={category.id}>
                    {category.name}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;