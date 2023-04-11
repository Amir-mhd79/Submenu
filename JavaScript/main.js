// enable submenu when mouse enter the bars
let menu = document.querySelector("header>div>div");
menu.addEventListener("mouseenter", function (e) {
  e.target.lastElementChild.classList.remove("hidden");
  e.target.lastElementChild.classList.add("flex");
});
menu.addEventListener("mouseleave", function (e) {
  e.target.lastElementChild.classList.remove("flex");
  e.target.lastElementChild.classList.add("hidden");
});
//change user icon when mouse enter icon
let firstDiv = document.querySelector("header>div");
firstDiv.addEventListener("mouseenter", function (e) {
  let secondDiv = [...e.target.children];
  secondDiv.forEach((elem) => {
    elem.addEventListener("mouseenter", function (e) {
      let icon = [...e.target.children];
      icon.forEach((elem) => {
        elem.addEventListener("mouseenter", function (e) {
          if (e.target.classList.contains("icon")) {
            let thisIcon = [...e.target.children];
            thisIcon.forEach((elem) => {
              elem.addEventListener("mouseenter", function (e) {
                e.target.classList.remove("far");
                e.target.classList.add("fas");
              });
              elem.addEventListener("mouseleave", function (e) {
                e.target.classList.remove("fas");
                e.target.classList.add("far");
              });
            });
          }
        });
      });
    });
  });
});
// enable submenu of headings menu when mouse enter the tags
let sub = document.querySelectorAll("header>div>div>div>div>div.find");
sub.forEach((elem) => {
  elem.addEventListener("mouseenter", function (e) {
    let subi = [...e.target.children];
    subi.forEach((elem) => {
      elem.addEventListener("mouseenter", function (e) {
        if (e.target.classList.contains("friend")) {
          e.target.nextElementSibling.classList.remove("hidden");
          e.target.nextElementSibling.classList.add("block");
        }
      });
      elem.addEventListener("mouseleave", function (e) {
        if (e.target.classList.contains("friend")) {
          e.target.nextElementSibling.classList.remove("block");
          e.target.nextElementSibling.classList.add("hidden");
        }
      });
    });
  });
});
