//assign inputted text to var
let inputText = document.querySelector(".search");

//initialise as empty
let searchValue = "";

//function to update the inputted text
function updateSearch(){

    //trim and lowercase input
    searchValue = inputText.value.trim().toLowerCase();

    //Select html element for number of items avail.
    let numOfItemsElement=document.querySelector(".filter").querySelector("p");

    //select html element for product item
    let productElements = document.querySelectorAll(".product-item");

    //iterate through each product item to show or hide based on search
    productElements.forEach(showOrHideProduct);

    //change the "# items available" text to update with search
    numberOfItems(numOfItemsElement);

}

function showOrHideProduct(product){

    if(searchValue.length === 0){
        //If empty search bar, show all items
        product.classList.remove("hide");
    }
    else{
        //select the product-item name and convert to lowercase
        let productName = product.querySelector("h3").textContent.toLowerCase();
        if(productName.includes(searchValue)){
            //if search query is within product name do NOT hide
            product.classList.remove("hide");
        }
        else{
            //if search query is not within product name hide this element
            product.classList.add("hide");
        }
    }
}

function numberOfItems(element){
    // total number of products available on page
    let totalNumberOfProducts = document.querySelectorAll(".product-item").length;

    // total number of prodcuts which have been hidden from search query
    let numberOfProductsHidden = document.querySelectorAll(".hide").length;

    //take difference of available & hidden to obtain number showing on page
    let productsAvailable = totalNumberOfProducts - numberOfProductsHidden;

    //alter the text content of the argument of this function
    element.textContent = `${productsAvailable} items found`;
}

//Event listener on keyup, detects backspaces this way
addEventListener("keyup",updateSearch);