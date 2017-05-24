function play(e){
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`);
  if(!audio) return; //Stops the function if the user hits an invalid key
  audio.currentTime = 0; //Rewinds the audio back to the start
  audio.play();
  key.classList.add('playing');
}

 

 function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
 }

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', play);