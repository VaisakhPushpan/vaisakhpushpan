for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
 document.querySelectorAll(".drum")[i].addEventListener("click" , function (){
    var audio;
    if(this.textContent === "w"){
        audio = new Audio("sounds/crash.mp3")
        audio.play();
    }
    else if(this.textContent === "a"){
        audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    else if(this.textContent === "s"){
        audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if(this.textContent === "d"){
        audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if(this.textContent === "j"){
        audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(this.textContent === "k"){
        audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if(this.textContent === "l"){
        audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
 })
}