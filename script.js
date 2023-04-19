 //Modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
    
    more.addEventListener('click',function() {
        overlay.style.display = 'block'; // overlay стає блоком 
        this.classList.add('more-splash'); // додаємо стилі з цсс файлу з класу more-splash
        document.body.style.overflow='hidden'; //сторінка не рухається, поки не клікнуто на хрестик
    });

    close.addEventListener('click',function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow=''; 

    })
