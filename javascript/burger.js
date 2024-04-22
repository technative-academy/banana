//Burger Nav Menu

//Burger itself - popups
document.getElementById("menuToggle").addEventListener("click", () => {
  let burger = document.getElementById("menuToggle");
  let menu = document.getElementById("burgermenu");
  let burgername = document.getElementById("burgername");
  //If Burger menu already open
  if (menu.style.display === "flex") {
    //Close menu
    menu.style.display = "none";
  } else {
    //Open Submenu
    menu.style.display = "flex";
    //Hide the Burger itself
    burger.style.display = "none";
    burgername.style.display = "none";
  }
});

//Social Sub-menu Behaviours.
document.querySelector(".submenu-toggle").addEventListener("click", () => {
  const submenuContent = document.querySelector(".submenu-content");
  //If menu already open
  if (submenuContent.style.display === "flex") {
    //Close submenu
    submenuContent.style.display = "none";
  } else {
    //Open Submenu
    submenuContent.style.display = "flex";
  }
});

// Close menu when clicking elsewhere on the page
document.body.addEventListener("click", (event) => {
  const menu = document.getElementById("burgermenu");
  const menuToggle = document.getElementById("menuToggle");
  const burgername = document.getElementById("burgername");
  if (
    event.target !== menu &&
    event.target !== menuToggle &&
    !menu.contains(event.target)
  ) {
    menu.style.display = "none";
    menuToggle.style.display = "block";
    burgername.style.display = "block";
  }
});
