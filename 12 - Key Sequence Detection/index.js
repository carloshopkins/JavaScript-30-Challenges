const pressed = [];
const code = 'kuhgelfische'

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-code.length - 1, pressed.length - code.length)
    if(pressed.join('').includes(code)){
        console.log("You win!");
    }

    console.log(pressed);
})
function checkCode(){

}