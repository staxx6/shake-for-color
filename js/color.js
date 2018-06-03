let test = () => {
    //document.getElementsByName('body').style.backgroundcolor 
    document.documentElement.style.setProperty('--color-main', 'red');

    let colorBlack = getComputedStyle(document.documentElement.style.getPropertyValue('--color-black'));
    document.documentElement.style.setProperty('--color-shake', document.documentElement.get);
    document.documentElement.style.setProperty('--color-for', 'red');
}