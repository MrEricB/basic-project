
var index = 0; 		
var images = ["img/brew1.jpg","img/brew2.jpg","img/brew5.jpg"];	


function changeImg(){
    document.carousel.src = images[index];

    index = (index + 1) % images.length;
    setTimeout("changeImg()", 3500); 
}

window.onload = function() {

    // image carousel
    changeImg();

    // are open
    var open = document.getElementById('isOpen');
    var date = new Date();
    var time = date.getHours();
    console.log(time)

    if(time > 3 && time < 11){
        open.innerText = "Closed"
    } else {
        open.innerText = "Open"
    }

}