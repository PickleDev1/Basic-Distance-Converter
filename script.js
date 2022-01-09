(function(){
    'use strict'
    let convertType="miles";
    const heading = document.querySelector('h1')
    const intro = document.querySelector('p')
    const answerDiv = document.getElementById("answer")
    const form = document.getElementById("convert")
    const answer = document.querySelector('h2')
     document.addEventListener('keydown', function (event){
     var key = event.code
     if (key === "KeyK") {
         convertType='kilometers'
         heading.innerHTML="Kilometers to Miles converter";
         intro.innerHTML="Type in a number of kilometers and click the button to convert the distance to miles.";
     } 
     else if (key ==="KeyM") {
         convertType='miles'
         heading.innerHTML="Miles to Kilometers converter"
         intro.innerHTML="Type in a number of miles and click the button to convert the distance to miles."
     }
     //alert(key)
    });
    form.addEventListener('submit', function (event){
    event.preventDefault();
    const distance = parseFloat(document.getElementById('distance').value)
     if (distance) {
         if (convertType=="miles") {
             const converted=(distance*1.609344).toFixed(2);
             answerDiv.innerHTML=`${distance} miles is equal to ${converted} kilometers.`
         }
         else {
             const converted=(distance*0.621371192).toFixed(2)
             answerDiv.innerHTML=`${distance} kilometers is equal to ${converted} miles`
         }
     } else {
         answerDiv.innerHTML=`<h2>You must input a number.</h2>`
     }
    });
})();