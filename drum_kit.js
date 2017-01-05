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
    
    //clicks
    //A
    document.getElementById('key_a').addEventListener('click', function(e){
        clap.play();
        e = document.getElementById('key_a');
        e.classList.add('music');
        clap.currentTime = 0;
    }, false);
    //S
    document.getElementById('key_s').addEventListener('click', function(e){
        hihat.play();
    }, false);
    //D
    document.getElementById('key_d').addEventListener('click', function(e){
        kick.play();
    }, false);
    //F
    document.getElementById('key_f').addEventListener('click', function(e){
        openhat.play();
    }, false);
    //G
    document.getElementById('key_g').addEventListener('click', function(e){
        boom.play();
    }, false);
    //H
    document.getElementById('key_h').addEventListener('click', function(e){
        ride.play();
    }, false);
    //J
    document.getElementById('key_j').addEventListener('click', function(e){
        snare.play();
    }, false);
    //K
    document.getElementById('key_k').addEventListener('click', function(e){
        tom.play();
    }, false);
    //L
    document.getElementById('key_l').addEventListener('click', function(e){
        tink.play();
    }, false);
    
    //keypresses
    function getKey(e){
        var the_key = e.keyCode, el;
        if(the_key == 65){
            el = document.getElementById('key_a');
            el.click();
        }
        else if (the_key == 83)
            hihat.play();
        else if (the_key == 68)
            kick.play();
        else if (the_key == 70)
            openhat.play();
        else if(the_key == 71)
            boom.play();
        else if(the_key == 72)
            ride.play();
        else if (the_key == 74)
            snare.play();
        else if (the_key == 75)
            tom.play();
        else if (the_key == 76)
            tink.play();
    }
    
});