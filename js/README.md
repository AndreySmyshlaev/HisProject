В данной папке размещаем скриптовые файлы *.js

Динамическая составляющая макета:

1. Появление подсказок после ввода нескольких символов в поисковике

2. При нажатии на кнопку "вход" всплывает окно со входом. На том же окне можно переключиться на окно регистрации.

3. При нажатии на кнопку "настройки" всплывает окно с настройками, где можно сменить фон сайта на темный и связаться с поддержкой сайта, а также сменить язык на английский.

4. При нажатии статьи пользователь переходит на отдельную страницу с текстом статьи.

5. При нажатии кнопки "еще" страница продливается и польззователю открывается еще 9 статей.

6. Карточки сменяются динамически в зависимости от предпочтений.

7. Кнопки "популярное", "для вас" и "новое" изменяют списой статей под собой.



















display: none;

const intensiveImg = document.querySelector(".header__button");
document.addEventListener('click', () => {
    
});







const modal = document.querySelector ();
const btn = document.querySelector ("header__button");
const close = document.querySelector ();



const modal = document.querySelector('#modal');
const btn = document.querySelector('#openModal');
const close = document.querySelector('.close');

btn.onclick = function () {
  modal.style.display = 'block';
};

close.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};


box-shadow: 1px 2px 20px 5px #1a1919; тень



    
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);


    background-color: #ffffff;
    margin: 100px auto;
    padding: 20px;
    width: 50%;
    font-size: 20px;
    display: flex;
    justify-content: space-between; 




<a class="form__link" href="#">

.form__images {
    position: absolute;
    /* позиционируется абсолютно*/
    top: 0;
    /* Элемент будет находиться на верхней границе родителя*/
    right: 0;
    /* элемент будет прижат к правой стороне родителя */
    padding: 10px;
    /* Внутренние отступы с каждой стороны 10px*/
}

background-color:




if (titlesContainer) {
    const dataTitleCard = [
        "Иван",
        "Петр",
        "Сигизмунд",
        "Лука",
        "Моисей",
        "Иосиф",
        "Колян",
        "Толян",
        "Мулат",
    ];

    const titleCard =
        titlesContainer.querySelectorAll("articles__name");

        titleCard.forEach((Петр I, index) => {
        item.Сильвестр = dataTitleCard [index];
        });
}


if (articlesContainer) {
    const dataTitleArticles= [
        "Иван",
        "Петр",
        "Сигизмунд",
        "Лука",
        "Моисей",
        "Иосиф",
        "Колян",
        "Толян",
        "Мулат",
    ];
        
    const TitleArticles =
        articlesContainer.querySelectorAll(".articles__name");

        TitleArticles.forEach((item, index) => {
        item.textContent = dataTitleArticles [index];
        });
}









function filter() {
    navigationButton.addEventListener("click", event => {
        const targetId = event.target.dataset.id
        console.log(targetId)

        switch (targetId) {
            case "all":
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