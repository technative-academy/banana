//assign inputted text to var
let inputText = document.querySelector(".search");

//initialise as empty
let searchValue = "";

//function to update the inputted text
function updateSearch(){
    searchValue = inputText.value.trim().toLowerCase();

    let productElements = document.querySelectorAll(".product-item");
    productElements.forEach(showOrHideProduct);
}

function showOrHideProduct(product){
    if(searchValue.length === 0){
        product.classList.remove("hide");
    }
    else{
        let productName = product.querySelector("h3").textContent.toLowerCase();
        if(productName.includes(searchValue)){
            product.classList.remove("hide");
        }
        else{
            product.classList.add("hide");
        }
    }
}

addEventListener("keyup",updateSearch);