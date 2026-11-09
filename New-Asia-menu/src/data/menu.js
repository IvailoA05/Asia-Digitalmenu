const menu = [
    {
        id: 1,
        category: "main-dishes",

        name: {
            bg: "Спагети с пиле",
            en: "Chicken Noodles",
            ru: "Спагетти с курицей"
        },

        description: {
            bg: "Спагети, пилешко филе, яйца, моркови, зеле",
            en: "Noodles, chicken fillet, eggs, carrots, cabbage",
            ru: "Спагетти, куриное филе, яйца, морковь, капуста"
        },

        price: 10.00,
        quantity: 1,
        unit: "kg",

        image: "/menu/spageti-s-pile.jpeg"
    },

    {
        id: 2,
        category: "main-dishes",

        name: {
            bg: "Ориз с пиле",
            en: "Chicken with Rice",
            ru: "Рис с курицей"
        },

        description: {
            bg: "Бял ориз, пилешко филе, яйца, грах, царевица, моркови",
            en: "White rice, chicken fillet, eggs, peas, corn, carrots",
            ru: "Белый рис, куриное филе, яйца, горох, кукуруза, морковь"
        },

        price: 10.00,
        quantity: 1,
        unit: "kg",

        image: "/menu/oriz-s-pile.jpeg"
    },

    {
        id: 3,
        category: "main-dishes",

        name: {
            bg: "Пилешки хапки със сусам",
            en: "Sesame Chicken Bites",
            ru: "Куриные кусочки в кунжуте"
        },

        description: {
            bg: "Панирано пилешко филе, сусам",
            en: "Breaded chicken fillet, sesame seeds",
            ru: "Куриное филе в панировке, с кунжутом"
        },

        price: 18.00,
        quantity: 1,
        unit: "kg",

        image: "/menu/hapki-sus-susam.jpeg"
    },

    {
        id: 4,
        category: "main-dishes",

        name: {
            bg: "Пилешки хапки в сладко-кисел сос",
            en: "Sweet and Sour Chicken Bites",
            ru: "Куриные кусочки в кисло-сладком соусе"
        },

        description: {
            bg: "Пилешко филе, панировка, сладко-кисел сос",
            en: "Breaded chicken fillet, sweet and sour sauce",
            ru: "Куриное филе в панировке, кисло-сладкий соус"
        },

        price: 12.00,
        quantity: 1,
        unit: "kg",

        image: "/menu/sladko-kiseli-hapki.jpeg"
    },

    {
        id: 5,
        category: "main-dishes",

        name: {
            bg: "Пиле с бамбук и черни гъби",
            en: "Chicken with Bamboo Shoots and Black Mushrooms",
            ru: "Курица с бамбуком и черными грибами"
        },

        description: {
            bg: "Пилешко филе, бамбук, черни гъби, печурки, моркови, лук",
            en: "Chicken fillet, bamboo, black mushrooms, button mushrooms, carrots, onions",
            ru: "Куриное филе, бамбук, черные грибы, шампиньоны, морковь, лук"
        },

        price: 12.00,
        quantity: 1,
        unit: "kg",

        image: "/menu/pile-s-gubi.jpeg"
    },

    {
        id: 6,
        category: "main-dishes",

        name: {
            bg: "Пиле с гъби и лук",
            en: "Chicken with Mushrooms and Onions",
            ru: "Курица с грибами и луком"
        },

        description: {
            bg: "Пилешко филе, печурки, лук",
            en: "Chicken fillet, mushrooms, onion",
            ru: "Куриное филе, грибы, лук"
        },

        price: 12.00,
        quantity: 1,
        unit: "kg",

        image: "/menu/pile-s-gubi-i-luk.jpeg"
    },

    {
        id: 7,
        category: "main-dishes",

        name: {
            bg: "Пиле с картофи",
            en: "Stir-Fried Chicken with Sliced Potatoes",
            ru: "Жареная курица с ломтиками картофеля"
        },

        description: {
            bg: "Пилешко филе, пресни пържени картофи, чесън",
            en: "Chicken fillet, fresh fried potatoes, garlic",
            ru: "Куриное филе, свежий картофель фри, чеснок"
        },

        price: 12.00,
        quantity: 1,
        unit: "kg",

        image: "/menu/pile-s-kartofi.jpeg"
    },

    {
        id: 8,
        category: "soups",

        name: {
            bg: "Люто-кисела супа с пиле",
            en: "Spicy and Sour Chicken Soup",
            ru: "Кисло-острый суп с курицей"
        },

        description: {
            bg: "Пилешко филе, черни гъби, печурки, бамбук, спагети, лютив сос, оцет",
            en: "Chicken fillet, black mushrooms, button mushrooms, bamboo, noodles, spicy sauce, vinegar",
            ru: "Куриное филе, черные грибы, шампиньоны, бамбук, спагетти, острый соус, уксус"
        },

        price: 3.00,
        quantity: 450,
        unit: "gr",

        image: "/menu/lyuta-supa.jpeg"
    },

    {
        id: 9,
        category: "main-dishes",

        name: {
            bg: "Оризови спагети с пиле",
            en: "Chicken Rice Noodles",
            ru: "Рисовая лапша с курицей"
        },

        description: {
            bg: "Оризови спагети, пилешко филе, яйца, моркови, зеле",
            en: "Rice noodles, chicken fillet, eggs, carrots, cabbage",
            ru: "Рисовая лапша, куриное филе, яйца, морковь, капуста"
        },

        price: 12.00,
        quantity: 1,
        unit: "kg",

        image: "/menu/orizovi-spageti.jpeg"
    },

    {
        id: 10,
        category: "main-dishes",

        name: {
            bg: "Спагети със зеленчуци и яйце",
            en: "Vegetable and Egg Noodles",
            ru: "Лапша с овощами и яйцом"
        },

        description: {
            bg: "Спагети, яйца, зеле, моркови",
            en: "Noodles, eggs, cabbage, carrots",
            ru: "Лапша, яйца, капуста, морковь"
        },

        price: 9.00,
        quantity: 1,
        unit: "kg",

        image: "/menu/spageti-s-qica.jpg"
    },

    {
        id: 11,
        category: "main-dishes",

        name: {
            bg: "Ориз със зеленчуци",
            en: "Rice with Vegetables",
            ru: "Рис с овощами"
        },

        description: {
            bg: "Бял ориз, зеле, моркови, грах, царевица",
            en: "White rice, cabbage, carrots, peas, corn",
            ru: "Белый рис, капуста, морковь, горох, кукуруза"
        },

        price: 9.00,
        quantity: 1,
        unit: "kg",

        image: "/menu/oriz-sus-zelenchuci.jpeg",

        veganRibbon: true
    },

    {
        id: 12,
        category: "main-dishes",

        name: {
            bg: "Пиле със зеленчуци",
            en: "Chicken with Vegetables",
            ru: "Курица с овощами"
        },

        description: {
            bg: "Пилешко филе, печурки, зеле, тиквички, моркови, лук, чушки",
            en: "Chicken fillet, button mushrooms, cabbage, zucchini, carrots, onions, peppers",
            ru: "Куриное филе, грибы, капуста, цуккини, морковь, лук, перец"
        },

        price: 12.00,
        quantity: 1,
        unit: "kg",

        image: "/menu/pile-sus-zelenchuci.jpeg"
    },

    {
        id: 13,
        category: "main-dishes",

        name: {
            bg: "Задушени зеленчуци",
            en: "Steamed Vegetables",
            ru: "Овощи на пару"
        },

        description: {
            bg: "Печурки, черни гъби, бамбук, тиквички, чушки, зеле, лук, моркови",
            en: "Button mushrooms, black mushrooms, bamboo, zucchini, peppers, cabbage, onions, carrots",
            ru: "Грибы, черные грибы, бамбук, цуккини, перец, капуста, лук, морковь"
        },

        price: 9.00,
        quantity: 1,
        unit: "kg",

        image: "/menu/zadusheni-zelenchuci.jpeg",

        veganRibbon: true
    },

    {
        id: 14,
        category: "chips",

        name: {
            bg: "Чипс от скариди",
            en: "Prawn Crackers",
            ru: "Креветочные чипсы"
        },

        description: {
            bg: "-",
            en: "-",
            ru: "-"
        },

        price: 1.50,
        quantity: 60,
        unit: "gr",

        image: "/menu/chips-ot-skaridi.jpeg"
    },

    {
        id: 15,
        category: "souces",

        name: {
            bg: "Соев сос",
            en: "Soy Sauce",
            ru: "Соевый соус"
        },

        description: {
            bg: "-",
            en: "-",
            ru: "-"
        },

        price: 1.00,
        quantity: 200,
        unit: "gr",

        image: "/menu/soev-sos.jpg"
    },

    {
        id: 16,
        category: "souces",

        name: {
            bg: "Лют сос",
            en: "Hot Sauce",
            ru: "Острый соус"
        },

        description: {
            bg: "-",
            en: "-",
            ru: "-"
        },

        price: 1.00,
        quantity: 60,
        unit: "gr",

        image: "/menu/liut-sos.jpg"
    },

    {
        id: 17,
        category: "souces",

        name: {
            bg: "Сладко-кисел сос",
            en: "Sweet and Sour Sauce",
            ru: "Кисло-сладкий соус"
        },

        description: {
            bg: "-",
            en: "-",
            ru: "-"
        },

        price: 1.00,
        quantity: 200,
        unit: "gr",

        image: "/menu/sladko-kisel-sos.jpg"
    },
    
];

export default menu;