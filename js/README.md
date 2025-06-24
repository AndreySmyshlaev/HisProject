В данной папке размещаем скриптовые файлы *.js

Динамическая составляющая макета:

1. Появление подсказок после ввода нескольких символов в поисковике

2. При нажатии на кнопку "вход" всплывает окно со входом. На том же окне можно переключиться на окно регистрации.

3. При нажатии на кнопку "настройки" всплывает окно с настройками, где можно сменить фон сайта на темный и связаться с поддержкой сайта, а также сменить язык на английский.

4. При нажатии статьи пользователь переходит на отдельную страницу с текстом статьи.

5. При нажатии кнопки "еще" страница продливается и польззователю открывается еще 9 статей.

6. Карточки сменяются динамически в зависимости от предпочтений.

7. Кнопки "популярное", "для вас" и "новое" изменяют списой статей под собой.



// * Код для массива (Задание 3.4)

const articlesContainer = document.querySelector(".articles");

if (articlesContainer) {
    const dataTitleArticles = [
        "Ацтеки",
        "Русская правда",
        "Каравелла",
        "Рюрик",
        "Драккар",
        "Пикты",
        "Император Константин",
        "Леон Блюм",
        "Семилетняя война",
        "Отто фон Бисмарк",
        "Владимир Ленин",
        "Японская империя",
        "Октябрьская революция",
        "Екатерина I",
        "Тевтонский орден",
        "Гангутское сражение",
        "Цусимское сражение",
    ];

    const TitleArticles =
        articlesContainer.querySelectorAll(".articles__name");

    TitleArticles.forEach((item, index) => {
        item.textContent = dataTitleArticles[index];
    });
}



// * Код для объекта (Задание 3.5)

const articles = document.querySelector(".articles");
if (articles) {
    const articlesMenu = articles.querySelector(".articles__menu");

    const articlesData1 = {
        articles1: {
            images: "images/atsteki.jpg",
            name: "Ацтеки",
            text: "Мезоамериканская культура народа науа, процветавшая в центральной Мексике в постклассический период с 1300 по 1521 год.",
        },
    }

    const articlesData2 = {
        articles2: {
            images: "images/russ_pravda.jpg",
            name: "Русская правда",
            text: "Сборник правовых норм Киевской Руси, датированный различными годами, начиная с 1016 года, древнейший русский правовой кодекс.",
        },
    }

    const articlesData3 = {
        articles3: {
            images: "images/caravella.webp",
            name: "Каравелла",
            text: "Тип парусного судна, распространённый в Европе, особенно в Португалии и Испании, во второй половине XV — начале XVII века.",
        },
    }

    const createCard1 = (images, name, text)  => {
        const card = `
        <a class="articles__item all" href="#">
            <img class="articles__images" src="${images}" alt="Фото" width="300" height="300">
            <h2 class="articles__name">${name}</h2>
            <p class="articles__text">${text}</p>
        </a>
    `;
        return card;
    }

    const createCard2 = (images, name, text)  => {
        const card = `
        <a class="articles__item all" href="#">
            <img class="articles__images" src="${images}" alt="Фото" width="300" height="300">
            <h2 class="articles__name">${name}</h2>
            <p class="articles__text">${text}</p>
        </a>
    `;
        return card;
    }

    const createCard3 = (images, name, text)  => {
        const card = `
        <a class="articles__item all" href="#">
            <img class="articles__images" src="${images}" alt="Фото" width="300" height="300">
            <h2 class="articles__name">${name}</h2>
            <p class="articles__text">${text}</p>
        </a>
    `;
        return card;
    }

    for (const cardKey in articlesData1) {
        const card = articlesData1[cardKey];
        const cardElement = createCard1(card.images, card.name, card.text);
        articlesMenu.insertAdjacentHTML('beforeend', cardElement);
    }

    for (const cardKey in articlesData2) {
        const card = articlesData2[cardKey];
        const cardElement = createCard2(card.images, card.name, card.text);
        articlesMenu.insertAdjacentHTML('beforeend', cardElement);
    }

    for (const cardKey in articlesData3) {
        const card = articlesData3[cardKey];
        const cardElement = createCard3(card.images, card.name, card.text);
        articlesMenu.insertAdjacentHTML('beforeend', cardElement);
    }

}



// * Код для объекта (Задание 3.5)

const articles = document.querySelector(".articles");
if (articles) {
    const articlesMenu = articles.querySelector(".articles__menu");

    const articlesData = {
        articles1: {
            images: "images/atsteki.jpg",
            name: "Ацтеки",
            text: "Мезоамериканская культура народа науа, процветавшая в центральной Мексике в постклассический период с 1300 по 1521 год.",
        },
        articles2: {
            images: "images/russ_pravda.jpg",
            name: "Русская правда",
            text: "Сборник правовых норм Киевской Руси, датированный различными годами, начиная с 1016 года, древнейший русский правовой кодекс.",
        },
        articles3: {
            images: "images/caravella.webp",
            name: "Каравелла",
            text: "Тип парусного судна, распространённый в Европе, особенно в Португалии и Испании, во второй половине XV — начале XVII века.",
        },
    }

    const createCard = (images, name, text) => {
        const card = `
        <a class="articles__item all" href="#">
            <img class="articles__images" src="${images}" alt="Фото" width="300" height="300">
            <h2 class="articles__name">${name}</h2>
            <p class="articles__text">${text}</p>
        </a>
    `;
        return card;
    }

    for (const cardKey in articlesData) {
        const card = articlesData[cardKey];
        const cardElement = createCard(card.images, card.name, card.text);
        articlesMenu.insertAdjacentHTML('beforeend', cardElement);
    }
}