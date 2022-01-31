var sIndex = 1;
var sContainer;
var sTimer;

window.addEventListener("load",function() {
   displaySlide(sIndex);
   sTimer = setInterval(function(){navSlides(1)}, 5000);

   sContainer = document.getElementsByClassName('tjh-slide-container')[0];
  
   sContainer.addEventListener('mouseenter', pause)
   sContainer.addEventListener('mouseleave', resume)
})

function navSlides(n){
   clearInterval(sTimer);

   if (n < 0){
      displaySlide(sIndex -= 1);
   } else {
      displaySlide(sIndex += 1); 
   }

   if (n === -1){
      sTimer = setInterval(function(){navSlides(n + 2)}, 5000);
   } else {
      sTimer = setInterval(function(){navSlides(n + 1)}, 5000);
   }
}

function displaySlide(n){
   var i;
   var slide = document.getElementsByClassName("tjh-s-prev");
   var selector = document.getElementsByClassName("tjh-s-prev-select");
   
   if (n > slide.length) {sIndex = 1}
   if (n < 1) {sIndex = slide.length}   

   for (i=0; i < slide.length; i++) {
      slide[i].style.display = "none";
   }

   for (i=0; i < selector.length; i++) {
      selector[i].className = selector[i].className.replace(" tjh-s-prev-current", " ");
   }
   selector[sIndex-1].className += " tjh-s-prev-current";
   slide[sIndex-1].style.display = "block";
}

function activeSlide(n){
   clearInterval(sTimer);
   sTimer = setInterval(function(){navSlides(n + 1)}, 5000);
   displaySlide(sIndex = n);
}

pause = () => {
   clearInterval(sTimer);
}

resume = () =>{
   clearInterval(sTimer);
   sTimer = setInterval(function(){navSlides(sIndex)}, 5000);
}
