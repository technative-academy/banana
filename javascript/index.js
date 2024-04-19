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

// Testimonies

const testimonies = document.querySelectorAll(".testimonies-person");
testimonies.forEach(addTestimonyListener);

function addTestimonyListener(tab) {
    tab.addEventListener("click", showQuote);
}

function showQuote(event) {
    const quote = document.querySelector(".quote");
    const clickedTab = event.currentTarget;
    const tabData = clickedTab.dataset.tab;
    console.log(tabData);
    switch (tabData) {
        case "bananaman":
            quote.textContent =
                '"The biggest, yellowist, tastiest bananas I have ever eaten. Except the red one, that one was red."';
            testimonies.forEach((testimony) =>
                testimony.classList.remove("selected")
            );
            clickedTab.classList.add("selected");
            break;
        case "gwen":
            quote.textContent = '"This sh** is bananas! B-A-N-A-N-A-S!"';
            testimonies.forEach((testimony) =>
                testimony.classList.remove("selected")
            );
            clickedTab.classList.add("selected");
            break;
        case "gorilla":
            quote.textContent = '"Ooh Ooh Aah Aah"';
            testimonies.forEach((testimony) =>
                testimony.classList.remove("selected")
            );
            clickedTab.classList.add("selected");
            break;
    }
}
