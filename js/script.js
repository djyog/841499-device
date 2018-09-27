var openingButtonForm=document.querySelector(".btn-toggle-write-us");
var closingButtonForm=document.querySelector(".modal-close-btn--write-us");
var popupForm=document.querySelector(".popup-form");

if(popupForm){
  openingButtonForm.addEventListener("click",function(){
    event.preventDefault();
    popupForm.classList.toggle("hidden")
  });

  closingButtonForm.addEventListener("click",function(){
  popupForm.classList.add("hidden")
  });
}

var openingMap=document.querySelector(".map__link");
var closingButtonMap=document.querySelector(".modal-close-btn--map");
var popupMap=document.querySelector(".popup-map");

if(popupMap){
  openingMap.addEventListener("click",function(){
    event.preventDefault();
    popupMap.classList.toggle("hidden")
  });

  closingButtonMap.addEventListener("click",function(){
    popupMap.classList.add("hidden")
  });
}
