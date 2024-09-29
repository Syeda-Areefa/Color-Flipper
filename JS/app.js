var colors = ["#7945BF", "#ED5485", "rgba(220,20,60)","#CC9E08"];
var btn = document.getElementById('btn');
var color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random number between 0-3
    var randomNumber = getRandomNumber();
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];   
});

function getRandomNumber() {
    return Math.floor (Math.random()*colors.length);
}