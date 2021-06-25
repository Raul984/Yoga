function getModal(btnsSelector, containerSelector, closeSelector) {
    let btns = document.querySelectorAll(btnsSelector),
        container = document.querySelector(containerSelector),
        close = document.querySelector(closeSelector);

    for (let i = 0; i < btns.length; i++) {
     
        btns[i].addEventListener('click', function() {
            container.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', function() {
            container.style.display = 'none';
            btns[i].classList.remove('more-splash'); 
            document.body.style.overflow = '';
        });  
    }
}

module.exports = getModal;
    

