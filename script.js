const one = new Audio("/Audio/kick-drum-230743.mp3");
const two = new Audio("/Audio/kick-drum-263837.mp3");
const three = new Audio("/Audio/tr707-snare-drum-241412.mp3");
const four = new Audio("/Audio/tr909-kick-drum-241402.mp3");

function playoneAudio() { 
    one.currentTime = 0;
    one.play(); 
} 

function playtwoAudio() {
    two.currentTime = 0;
    two.play();
}

function playthirdAudio() {
    three.currentTime = 0;
    three.play();
}

function playfourthAudio() {
    four.currentTime = 0;
    four.play();
}


document.addEventListener('keydown', (event) => {
    if (event.key === 'w') { 
        playoneAudio()
        console.log('pressed the w key')
    } else if (event.key === 'a') {
        playtwoAudio();
        console.log('pressed the a key');
    } else if (event.key === 's') {
        playthirdAudio();
        console.log('pressed the s key')
    } else if (event.key === 'd') {
        playfourthAudio();
        console.log('pressed the d key');
    }
});  