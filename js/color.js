let shake = () => {
    let newColor = 'red';

    document.documentElement.style.setProperty('--color-main', newColor);

    //TODO get value from newColor and decide if it should be white or black text color
    let colorBlack = window.getComputedStyle(document.body).getPropertyValue('--color-black');
    document.documentElement.style.setProperty('--color-shake', colorBlack);
    document.documentElement.style.setProperty('--color-for', colorBlack);
    document.documentElement.style.setProperty('--color-color', newColor); // needs to wait
    document.documentElement.style.setProperty('--color-color-arrow', colorBlack);

    let animationTime = 1.4;
    document.getElementsByClassName('main-text__color')[0].style.animation = `shake-color ${animationTime}s ease-in-out`;

    // document.getElementsByClassName('main-text__color')[0].style.animation = ``;
}