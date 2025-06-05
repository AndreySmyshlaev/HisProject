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



// * Код для массива (название статей)

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
        "Танк КВ-2",
    ];

    const TitleArticles =
        articlesContainer.querySelectorAll(".articles__name");

    TitleArticles.forEach((item, index) => {
        item.textContent = dataTitleArticles[index];
    });
}



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



}

