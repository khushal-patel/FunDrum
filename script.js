for (var i=0; i<document.querySelectorAll('.drums').length; i++){

    document.querySelectorAll('.drums')[i].addEventListener('click', function(){
        if (this.id=='snare'){
            var audio = new Audio('sounds/snare.mp3')
            audio.play();
        }
        else if (this.id=='crash') {
            var audio = new Audio('sounds/crash.mp3')
            audio.play();
        }
        else if (this.id=='tom1') {
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play();
        }
        else if (this.id=='tom2') {
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play();
        }
        else if (this.id=='tom3') {
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play();
        }
        else if (this.id=='cymbal') {
            var audio = new Audio('sounds/cymbal.mp3')
            audio.play();
        }
        else if(this.id=='kick') {
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play();
        }

    })

}
