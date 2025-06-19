'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});



// * Алгоритм кнопки "вход"
// * 1. Начало.
// * 2. Получаем все элементы: кнопки.
// * 3. Проверка массива (поиск кнопки среди прочих).
// *    3.1. Клик по кнопке.
// *        3.1.1. Окно всплывает.
// *    3.2. Нет клика по кнопке.
// *        3.2.1. Продолжаем.
// * 4. Конец.



// * Кнопка "вход"

const registrationButtonModal = document.querySelector(".header__button-one");
const modalRegistrationForm = document.querySelector(".registration-one");

if (registrationButtonModal && modalRegistrationForm) {
    registrationButtonModal.addEventListener("click", () => {
        modalRegistrationForm.removeAttribute("hidden");
        console.log('Мышка наведена на кнопку, всплывает окно 1.1');
    });
}

window.addEventListener("click", (event) => {
    if (event.target === modalRegistrationForm) {
        modalRegistrationForm.setAttribute("hidden", true);
        console.log('Мышка наведена на кнопку, всплывает окно 2.1');
    }
});

const closeModalButton = document.querySelector(".application__close-one");

closeModalButton.addEventListener("click", () => {
    modalRegistrationForm.setAttribute("hidden", true);
});



// * Кнопка "регистрация"

const entranceButtonModal = document.querySelector(".header__button-two");
const modalEntranceForm = document.querySelector(".registration-two");

if (entranceButtonModal && modalEntranceForm) {
    entranceButtonModal.addEventListener("click", () => {
        modalEntranceForm.removeAttribute("hidden");
        console.log('Мышка наведена на кнопку, всплывает окно 1.2');
    });
}

window.addEventListener("click", (event) => {
    if (event.target === modalEntranceForm) {
        modalEntranceForm.setAttribute("hidden", true);
        console.log('Мышка наведена на кнопку, всплывает окно 2.2');
    }
});

const exitModalButton = document.querySelector(".application__close-two");

exitModalButton.addEventListener("click", () => {
    modalEntranceForm.setAttribute("hidden", true);
});



// * Код для массива (название статей) (Задание 3.4)
// * УБРАН В СВЯЗИ С НЕНАДОБНОСТЬЮ В README.MD



// * Фильтрация карточек (статей)

const navigation = document.querySelectorAll(".navigation");
const articlesItem = document.querySelectorAll(".articles__item");

function filter() {
    const navigation = document.querySelector(".navigation");
    navigation.addEventListener("click", event => {
        const targetId = event.target.dataset.id
        console.log(targetId)

        switch (targetId) {
            case "all":
                articlesItem.forEach(item => {
                    if (item.classList.contains("all")) {
                        item.style.display = "block"
                    } else {
                        item.style.display = "none"
                    }
                })
                break
            case "new":
                articlesItem.forEach(item => {
                    if (item.classList.contains("new")) {
                        item.style.display = "block"
                    } else {
                        item.style.display = "none"
                    }
                })
                break
            case "pop":
                articlesItem.forEach(item => {
                    if (item.classList.contains("pop")) {
                        item.style.display = "block"
                    } else {
                        item.style.display = "none"
                    }
                })
                break
        }
    })
}

filter()



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

// * Код для предзагрузчика

const preloader = document.querySelector(".preloader");
const content = document.querySelector(".content");
if (preloader && content) {
    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        content.style.display = "block";
        preloader.remove();
    }, 3000);
}



// * Код для карусели

const sliders = document.querySelector('.swiper');

if (sliders) {
    const swiper1 = new Swiper(sliders, {
        pagination: {
            el: '.swiper-pagination',
            type: "fraction",
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
