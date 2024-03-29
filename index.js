var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttons = this.innerHTML;
        switch (buttons) {
            case "s":        
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;
            // case "u":        
            //     var kick = new Audio('sounds/kick-bass.mp3');
            //     kick.play();
            // break;
            case "r":        
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;
            // case "u":        
            //     var tom1 = new Audio('sounds/tom-1.mp3');
            //     tom1.play();
            // break;
            case "c":        
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
            case "h":        
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;
            case "i":        
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;
        
            default:
                break;
        }

    document.querySelector(".u").addEventListener("click", function(){
        var kick_bass = new Audio('sounds/kick-bass.mp3');
        kick_bass.play();
    })
    document.querySelector(".uu").addEventListener("click", function(){
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
    })










    });

}