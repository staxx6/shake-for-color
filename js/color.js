let shake = () => {
    document.documentElement.style.setProperty('--color-main', 'red');

    let colorBlack = window.getComputedStyle(document.body).getPropertyValue('--color-black');
    document.documentElement.style.setProperty('--color-shake', colorBlack);
    document.documentElement.style.setProperty('--color-for', colorBlack);
    document.documentElement.style.setProperty('--color-color-arrow', colorBlack);

    let animationTime = 1.4;
    document.getElementsByClassName('main-text__color')[0].style.animation = `shake-color ${animationTime}s ease-in-out`;

    // document.getElementsByClassName('main-text__color')[0].style.animation = ``;
}