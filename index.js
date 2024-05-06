
// SINGLE PRODUCT PAGE

let modalImg = document.querySelector("#cus-modal-img");
let modalHeading = document.querySelector("#cus-modal-heading");
let modalPrice = document.querySelector("#cus-modal-price");
let modalDescription = document.querySelector("#modal-description");
let modalSideImg = document.querySelectorAll(".modal-side-img");
let modalCategory = document.querySelector(".modal-category");
let button = document.querySelectorAll(".view");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", (event) =>{
        let parentDiv = event.target.parentElement;
        let grandParentDiv = parentDiv.parentElement;
        modalImg.src = grandParentDiv.querySelector(".product-img").src;
        modalDescription.innerHTML = grandParentDiv.querySelector(".product-discription").innerHTML;
        modalHeading.innerHTML = grandParentDiv.querySelector(".p-text").innerHTML;
        modalPrice.innerHTML = grandParentDiv.querySelector(".price").innerHTML;
        modalCategory.innerHTML ="Category: " + grandParentDiv.querySelector(".type").innerHTML;
        for (let i = 0; i < modalSideImg.length; i++) {
            modalSideImg[i].src = grandParentDiv.querySelector(".product-img").src;
        }
    });
};



// QUANTITY INCREMENT/DECREMENT

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let num = document.querySelector(".num");

plus.addEventListener("click", () => {
    if(num.innerHTML < 10){
        let result = parseInt(num.innerHTML) + 1;
        num.innerHTML = "0" + result;
        if(num.innerHTML == 10){
            num.innerHTML = result;
        };
    };
});
minus.addEventListener("click", () => {
    if(num.innerHTML > 1){
        let result = parseInt(num.innerHTML) - 1;
        num.innerHTML = "0" + result;
    };
});