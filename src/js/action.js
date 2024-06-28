function activateItem(elid) {
  let clickedElement = document.getElementById(elid);
  let activeElement = document.getElementsByClassName("active");
  activeElement.classList.remove("active");
  clickedElement.classList.add("active");
}
