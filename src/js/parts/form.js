function form() {
    //отправка формы с помощью promise

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.getElementsByClassName('main-form')[0],
        formBottom = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);
    
            function postData(data) {

                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                    request.addEventListener('readystatechange', function() {
                        if (request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300)
                            resolve()
                        } else {
                            reject()
                        }
                    });

                    request.send(data)
                })
            } //End postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            
            postData(formData)
                .then(()=> statusMessage.innerHTML = message.loading)
                .then(()=> statusMessage.innerHTML = message.success)
                .catch(()=>statusMessage.innerHTML = message.failure)
                .then(clearInput)
        });
    }

    sendForm(form);
    sendForm(formBottom);

    //если нужно отправить данные в текстовом формате (без Promise)

    // let message = {
    //     loading: 'Загрузка...',
    //     success: 'Спасибо! Скоро мы с вами свяжемся!',
    //     failure: 'Что-то пошло не так...'
    // };

    // let form = document.querySelector('.main-form'),
    //     input = form.getElementsByTagName('input'),
    //     statusMessage = document.createElement('div');

    //     statusMessage.classList.add('status');

    // form.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     form.appendChild(statusMessage);

    //     let request = new XMLHttpRequest();
    //     request.open('POST', 'server.php');
    //     request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    //     let formData = new FormData(form);//Чтобы получить данные которые ввел клиент, используем объект Formdata
    //     request.send(formData);

    //     request.addEventListener('readystatechange', function() {
    //         if (request.readyState < 4) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if (request.readyState === 4 && request.status == 200) {
    //             statusMessage.innerHTML = message.success;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });

    //         for (let i = 0; i < input.length; i++) {
    //             input[i].value = ''; // очищаем инпуты после отправки формы
    //         }

    // });

    //Если нужно отправить данные на сервер в JSON формате:

    // let message = {
    //     loading: 'Загрузка...',
    //     success: 'Спасибо! Скоро мы с вами свяжемся!',
    //     failure: 'Что-то пошло не так...'
    // };

    // let form = document.querySelector('.main-form'),
    //     input = form.getElementsByTagName('input'),
    //     statusMessage = document.createElement('div');

    //     statusMessage.classList.add('status');

    // form.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     form.appendChild(statusMessage);

    //     let request = new XMLHttpRequest();
    //     request.open('POST', 'server.php');
    //     request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    //     let formData = new FormData(form);//Чтобы получить данные которые ввел клиент, используем объект Formdata

    //     let obj = {};
    //     formData.forEach(function(value, key) { 
    //         obj[key] = value;
    //     });
    //     let json = JSON.stringify(obj); //Преобраз наши данные в JSON формат

    //     request.send(json);

    //     request.addEventListener('readystatechange', function() {
    //         if (request.readyState < 4) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if (request.readyState === 4 && request.status == 200) {
    //             statusMessage.innerHTML = message.success;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });

    //         for (let i = 0; i < input.length; i++) {
    //             input[i].value = ''; // очищаем инпуты после отправки формы
    //         }

    // })
}

module.exports = form;