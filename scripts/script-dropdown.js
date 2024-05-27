// ドロップダウン
const dropDownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
};

dropDownBtn.addEventListener("click", function(e) {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});

// ホバーアニメーション
const hoverAnimate = document.querySelectorAll(".hover-img");
const hoverDefault = document.querySelectorAll(".hover-default");

hoverDefault.forEach((element, index) => {
  element.addEventListener("mouseover", () => {
    hoverAnimate[index].classList.add("active");
  });

  element.addEventListener("mouseout", () => {
    hoverAnimate[index].classList.remove("active");
  });
  });