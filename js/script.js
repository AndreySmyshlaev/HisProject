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



const cardsImages = document.querySelector(".images");
if (cardsImages) {
    const cardListImages = cardsImages.querySelector(".images__list");

    // Пример URL для получения данных с сервера
    const apiUrl = "images.json";

    // Функция для создания карточки
    const createCard = (imageUrl, imageAlt, imageWidth) => {
        // Шаблонные строки и подстановки
        const image = `
        <li class="images__item">
            <img class="images__picture" src="${imageUrl[0]}" alt="${imageAlt}" width="${imageWidth}">
            <img class="images__picture" src="${imageUrl[1]}" alt="${imageAlt}" width="${imageWidth}" style="display: none;">
        </li>
    `;

        return image;
    };

    fetch(apiUrl)
        .then((response) => response.json())
        .then((images) => {
            console.log(images); // Данные
            console.log(typeof images); // Тип полученных данных

            images.forEach((item) => {
                const cardElement = createCard(
                    item.imageUrl,
                    item.imageAlt,
                    item.imageWidth
                );
                cardListImages.insertAdjacentHTML("beforeend", cardElement);
            });
            const pictures = document.querySelectorAll(".images__picture");
            if (pictures) {
                // Перебираем каждое изображение
                pictures.forEach((picture) => {
                    picture.addEventListener("click", () => {
                        // Получаем родительский элемент (li)
                        const parentItem = picture.parentElement;

                        // Получаем все изображения в родительском элементе
                        const parentPictures =
                            parentItem.querySelectorAll(".images__picture");

                        // Переключаем видимость изображений
                        parentPictures.forEach((parentPictures) => {
                            if (parentPictures !== picture) {
                                parentPictures.style.display = "block"; // Показываем другое изображение
                            } else {
                                parentPictures.style.display = "none"; // Скрываем текущее изображение
                            }
                        });
                    });
                });
            }

        });

}
