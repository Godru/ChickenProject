var chicken = document.querySelector('.chicken');
var egg = document.querySelector('.egg');
window.onload = function () {
    animateFirst(0.1);


};
function animateFirst(rate) {
    var degrees = 45;
    var eggStart = false;
    requestAnimationFrame(function animate() {
        if(degrees < -365){
            rate = rate - 0.02;
        }else {
            if (rate < 3) {
                rate = rate + 0.05;
            }
        }
        if(degrees < 30 && eggStart === false){
            eggStart = true;
            animateEgg(egg);
        }
        if(degrees < 45 && degrees > 35 ){
            chicken.src = "img/chicken_1.png";
        }
        if(degrees < -45 && degrees > -55 || degrees < -360 && degrees > -370 ){
            chicken.src = "img/chicken_2.png";
        }
        if(degrees < -180 && degrees > -190 || degrees < -495 && degrees > -505){
            chicken.src = "img/chicken_3.png";
        }
        degrees = degrees - rate;
        chicken.style.transform = 'rotate(' + degrees + 'deg)';
        if(degrees > -585) {
            requestAnimationFrame(animate);
        }else{
            animateSecond(egg);
        }


    });
}
function animateSecond() {
    var degrees = -585;
    var rate = 1;
    requestAnimationFrame(function animate() {
        if(degrees > -180){
                rate = rate - 0.036;
        }else{
            if (rate < 4) {
                rate = rate + 0.05;
            }
        }
        if(degrees > -585 && degrees < -565 ){
            chicken.src = "img/chicken_1.png";
        }
        if(degrees > -405 && degrees < -395 || degrees > -45 && degrees < -35){
            chicken.src = "img/chicken_2.png";
        }
        if(degrees > -180 && degrees < -170 ||degrees > 35 && degrees < 45 ){
            chicken.src = "img/chicken_3.png";
        }
        degrees = degrees + rate;
        chicken.style.transform = 'rotate(' + degrees + 'deg)';
        if(degrees < 46 && rate < 0) {
            animateFirst(-rate);
        }else{
            requestAnimationFrame(animate);
        }


    });
}
function animateEgg(){
    var top = 415;
    var left = 175;
    var rotate = 30;
    var rate = 4;
    egg.style.display = 'block';
    requestAnimationFrame(function animate(){
        left = left + 10;
        top = top + rate;
        rate = rate - 0.4;
        egg.style.top = top + 'px';
        egg.style.left = left+ 'px';
        rotate--;
        egg.style.transform = 'rotate(' + rotate + 'deg)';
        if(top < -100){
            egg.style.display = 'none';
        }else{
            requestAnimationFrame(animate);
        }

    })
}
