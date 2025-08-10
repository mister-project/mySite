console.log('скрипт pictureAround.js в работе' )
//СКРИПТ ПРОКРУТКИ КАРТИНКИ С ФОТО ПО ЩЕЛЧКУ
document.querySelector('#img_logo').addEventListener('click', (e) => {
    console.log(e.target);
    e.target.classList.add('around')
})