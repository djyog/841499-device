var openingButtonForm=document.querySelector(".btn-toggle-write-us");
var popupForm=document.querySelector(".popup-form");
var closingButtonForm=popupForm.querySelector(".modal-close-btn--write-us");
var username = popupForm.querySelector('[name="username"]');
var email = popupForm.querySelector('[name="user_email"]');
var text = popupForm.querySelector('[name="user_mailtext"]');
var popup=document.querySelector(".write_modal");
var form = popup.querySelector("form");
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("username");
  } catch (err) {
    isStorageSupport = false;
  }

if(popupForm){
  openingButtonForm.addEventListener("click",function(){
    event.preventDefault();
    popupForm.classList.toggle("hidden");
  });

  closingButtonForm.addEventListener("click",function(){
  popupForm.classList.add("hidden");
  });
}

form.addEventListener("submit", function (event) {
if (!username.value || !email.value || !text.value) {
  evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popupForm.offsetWidth;
    popup.classList.add("modal-error");
  } else {
  if (isStorageSupport) {
    localStorage.setItem("username", login.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("text", text.value);
    }
  }
});

var openingMap=document.querySelector(".map__link");
var popupMap=document.querySelector(".popup-map");
var closingButtonMap=popupMap.querySelector(".modal-close-btn--map");

if(popupMap){
  openingMap.addEventListener("click",function(){
    event.preventDefault();
    popupMap.classList.toggle("hidden")
  });

  closingButtonMap.addEventListener("click",function(){
    popupMap.classList.add("hidden")
  });
}













