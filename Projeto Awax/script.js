function popsUp () {
    let menuArea = document.querySelector('nav');

    if (menuArea.classList.contains('display') == true) {
        menuArea.classList.remove('display');
    } else {
        menuArea.classList.add('display');
    }
}
function gotoTop () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}