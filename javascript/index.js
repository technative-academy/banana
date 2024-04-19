// Img Tabs

const tabs = document.querySelectorAll(".tab");
tabs.forEach(addTabListener);

function addTabListener(tab) {
    tab.addEventListener("click", showContent);
}

function showContent(event) {
    const image = document.querySelector(".tabimg-img");
    const desc = document.querySelector(".tabimg-desc");
    const clickedTab = event.currentTarget;
    const tabData = clickedTab.dataset.tab;
    console.log(tabData);
    switch (tabData) {
        case "yellow":
            image.setAttribute(
                "src",
                "images/giorgio-trovato-fczCr7MdE7U-unsplash.jpg"
            );
            desc.textContent = "Bananas! How beautiful.";
            tabs.forEach((tab) => tab.classList.remove("highlighted"));
            clickedTab.classList.add("highlighted");
            break;
        case "red":
            image.setAttribute("src", "images/redbananas2.jpg");
            desc.textContent = "This one is red...";
            tabs.forEach((tab) => tab.classList.remove("highlighted"));
            clickedTab.classList.add("highlighted");
            break;
        case "green":
            image.setAttribute("src", "images/greenbean.jpg");
            desc.textContent = "Wait. That's not a banana.";
            tabs.forEach((tab) => tab.classList.remove("highlighted"));
            clickedTab.classList.add("highlighted");
            break;
        case "plantain":
            image.setAttribute("src", "images/plantain.jpg");
            desc.textContent = "Looks like a banana but it's not!";
            tabs.forEach((tab) => tab.classList.remove("highlighted"));
            clickedTab.classList.add("highlighted");
            break;
    }
}
