const menu = [
    {
        id: 1,
        category: "main-dishes",

        name: {
            bg: "Спагети с пиле",
            en: "Spaghetti with chicken",
            ru: "Спагетти с курицей"
        },

        description: {
            bg: "Пилешко филе с ориз и зеленчуци",
            en: "Chicken fillet with rice and vegetables",
            ru: "Куриное филе с рисом и овощами"
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
            en: "Chicken with rice",
            ru: "Рис с курицей"
        },

        description: {
            bg: "Домати, краставици, чушки и българско сирене",
            en: "Tomatoes, cucumbers, peppers and Bulgarian cheese",
            ru: "Помидоры, огурцы, перец и болгарская брынза"
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
            en: "Sesame chicken bites",
            ru: "Куриные кусочки в кунжуте"
        },

        description: {
            bg: "Домати, краставици, чушки и българско сирене",
            en: "Tomatoes, cucumbers, peppers and Bulgarian cheese",
            ru: "Помидоры, огурцы, перец и болгарская брынза"
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
            bg: "Домати, краставици, чушки и българско сирене",
            en: "Tomatoes, cucumbers, peppers and Bulgarian cheese",
            ru: "Помидоры, огурцы, перец и болгарская брынза"
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
            bg: "Домати, краставици, чушки и българско сирене",
            en: "Tomatoes, cucumbers, peppers and Bulgarian cheese",
            ru: "Помидоры, огурцы, перец и болгарская брынза"
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
            bg: "Домати, краставици, чушки и българско сирене",
            en: "Tomatoes, cucumbers, peppers and Bulgarian cheese",
            ru: "Помидоры, огурцы, перец и болгарская брынза"
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
            bg: "Домати, краставици, чушки и българско сирене",
            en: "Tomatoes, cucumbers, peppers and Bulgarian cheese",
            ru: "Помидоры, огурцы, перец и болгарская брынза"
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
            bg: "Домати, краставици, чушки и българско сирене",
            en: "Tomatoes, cucumbers, peppers and Bulgarian cheese",
            ru: "Помидоры, огурцы, перец и болгарская брынза"
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
            bg: "Домати, краставици, чушки и българско сирене",
            en: "Tomatoes, cucumbers, peppers and Bulgarian cheese",
            ru: "Помидоры, огурцы, перец и болгарская брынза"
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
            bg: "Ориз със зеленчуци",
            en: "Rice with Vegetables",
            ru: "Рис с овощами"
        },

        description: {
            bg: "Домати, краставици, чушки и българско сирене",
            en: "Tomatoes, cucumbers, peppers and Bulgarian cheese",
            ru: "Помидоры, огурцы, перец и болгарская брынза"
        },

        price: 9.00,
        quantity: 1,
        unit: "kg",

        image: "/menu/oriz-sus-zelenchuci.jpeg",

        veganRibbon: true
    },

    {
        id: 11,
        category: "main-dishes",

        name: {
            bg: "Пиле със зеленчуци",
            en: "Chicken with Vegetables",
            ru: "Курица с овощами"
        },

        description: {
            bg: "Домати, краставици, чушки и българско сирене",
            en: "Tomatoes, cucumbers, peppers and Bulgarian cheese",
            ru: "Помидоры, огурцы, перец и болгарская брынза"
        },

        price: 12.00,
        quantity: 1,
        unit: "kg",

        image: "/menu/pile-sus-zelenchuci.jpeg"
    },

    {
        id: 12,
        category: "main-dishes",

        name: {
            bg: "Задушени зеленчуци",
            en: "Steamed Vegetables",
            ru: "Овощи на пару"
        },

        description: {
            bg: "Домати, краставици, чушки и българско сирене",
            en: "Tomatoes, cucumbers, peppers and Bulgarian cheese",
            ru: "Помидоры, огурцы, перец и болгарская брынза"
        },

        price: 9.00,
        quantity: 1,
        unit: "kg",

        image: "/menu/zadusheni-zelenchuci.jpeg"
    },

    {
        id: 13,
        category: "chips",

        name: {
            bg: "Чипс от скариди",
            en: "Prawn Crackers",
            ru: "Креветочные чипсы"
        },

        description: {
            bg: "Домати, краставици, чушки и българско сирене",
            en: "Tomatoes, cucumbers, peppers and Bulgarian cheese",
            ru: "Помидоры, огурцы, перец и болгарская брынза"
        },

        price: 1.50,
        quantity: 60,
        unit: "gr",

        image: "/menu/chips-ot-skaridi.jpeg"
    }
];

export default menu;