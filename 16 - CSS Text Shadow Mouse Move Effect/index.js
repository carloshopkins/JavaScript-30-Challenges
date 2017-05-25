const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 250;

function shadow(e){
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;

    let x = e.offsetX;
    let y = e.offsetY;

    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / width * walk) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 orange,
    ${xWalk * -1}px ${yWalk}px 0 orange,
    ${yWalk * -1}px ${xWalk}px 0 orange,
    ${yWalk}px ${xWalk}px 0 orange
    `;
}

hero.addEventListener('mousemove', shadow);