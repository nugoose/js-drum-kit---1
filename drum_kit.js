var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {
    //sounds
    var clap = new Audio('sounds/clap.wav'),
        hihat = new Audio('sounds/hihat.wav'),
        kick = new Audio('sounds/kick.wav'),
        openhat = new Audio('sounds/openhat.wav'),
        boom = new Audio('sounds/boom.wav'),
        ride = new Audio('sounds/ride.wav'),
        snare = new Audio('sounds/snare.wav'),
        tom = new Audio('sounds/tom.wav'),
        tink = new Audio('sounds/tink.wav');
    document.onkeydown = getKey;
    
    //////////////clicks/////////////////
    //A
    document.getElementById('key_a').addEventListener('click', function(e){
        clap.play();
        e = document.getElementById('key_a');
        animateMe(e);
        clap.currentTime = 0;
    }, false);
    //S
    document.getElementById('key_s').addEventListener('click', function(e){
        hihat.play();
        e = document.getElementById('key_s');
        animateMe(e);
        hihat.currentTime = 0;
    }, false);
    //D
    document.getElementById('key_d').addEventListener('click', function(e){
        kick.play();
        e = document.getElementById('key_d');
        animateMe(e);
        kick.currentTime = 0;
    }, false);
    //F
    document.getElementById('key_f').addEventListener('click', function(e){
        openhat.play();
        e = document.getElementById('key_f');
        animateMe(e);
        openhat.currentTime = 0;
    }, false);
    //G
    document.getElementById('key_g').addEventListener('click', function(e){
        boom.play();
        e = document.getElementById('key_g');
        animateMe(e);
        boom.currentTime = 0;
    }, false);
    //H
    document.getElementById('key_h').addEventListener('click', function(e){
        ride.play();
        e = document.getElementById('key_h');
        animateMe(e);
        ride.currentTime = 0;
    }, false);
    //J
    document.getElementById('key_j').addEventListener('click', function(e){
        snare.play();
        e = document.getElementById('key_j');
        animateMe(e);
        snare.currentTime = 0;
    }, false);
    //K
    document.getElementById('key_k').addEventListener('click', function(e){
        tom.play();
        e = document.getElementById('key_k');
        animateMe(e);
        tom.currentTime = 0;
    }, false);
    //L
    document.getElementById('key_l').addEventListener('click', function(e){
        tink.play();
        e = document.getElementById('key_l');
        animateMe(e);
        tink.currentTime = 0;
    }, false);
    
    //////////////keypresses///////////////
    function getKey(e){
        var the_key = e.keyCode, el;
        if(the_key == 65){
            el = document.getElementById('key_a');
            el.click();
        }
        else if (the_key == 83){
            el = document.getElementById('key_s');
            el.click();
        }
        else if (the_key == 68){
            el = document.getElementById('key_d');
            el.click();
        }
        else if (the_key == 70){
            el = document.getElementById('key_f');
            el.click();
        }
        else if(the_key == 71){
            el = document.getElementById('key_g');
            el.click();
        }
        else if(the_key == 72){
            el = document.getElementById('key_h');
            el.click();
        }
        else if (the_key == 74){
            el = document.getElementById('key_j');
            el.click();
        }
        else if (the_key == 75){
            el = document.getElementById('key_k');
            el.click();
        }
        else if (the_key == 76){
            el = document.getElementById('key_l');
            el.click();
        }
    }
    
    //////animation function/////
    function animateMe(e){
        e.classList.add('music');
        setTimeout(function(){
            e.classList.remove('music');
        }, 80);
    }
    
});