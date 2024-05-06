// FOR FILTER

let allBtn = document.querySelector("#allBtn");
let chairBtn = document.querySelector("#chairBtn");
let sofaBtn = document.querySelector("#sofaBtn");
let lampBtn = document.querySelector("#lampBtn");
let tableBtn = document.querySelector("#tableBtn");
let sideboardBtn = document.querySelector("#sideboardBtn");
let wallDecorBtn = document.querySelector("#wallDecorBtn");
let plantBtn = document.querySelector("#plantBtn");
let type = document.querySelectorAll(".type");
let pWrapClass = document.querySelectorAll(".product-wrap");

for (i = 0; i < type.length; i++) {
    pWrapClass[i].classList.add("show");
}

let filterProduct = (category) => {
    for(i = 0; i< type.length; i++){
        pWrapClass[i].classList.add("show");
        if(type[i].innerHTML !== category){
            pWrapClass[i].classList.remove("show");
        }
    };
};

let activeColor = document.querySelectorAll(".active-color")

// Add click event listener to each button
activeColor.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        activeColor.forEach(btn => {
            btn.classList.remove('red');
        });

        // Add 'active' class to the clicked button
        button.classList.add('red');
    });
});


allBtn.addEventListener("click", () => {
    for (i = 0; i < type.length; i++) {
        pWrapClass[i].classList.add("show");
    }
    setActiveBtn("All");
});

chairBtn.addEventListener("click", () => {
    filterProduct("Chair");
    setActiveBtn("Chair");
});

sofaBtn.addEventListener("click", () => {
    filterProduct("Sofa");
    setActiveBtn("Sofa");
});

lampBtn.addEventListener("click", () => {
    filterProduct("Lamp");
    setActiveBtn("Lamp");
});

tableBtn.addEventListener("click", () => {
    filterProduct("Table");
    setActiveBtn("Table");
});

sideboardBtn.addEventListener("click", () => {
    filterProduct("Sideboard");
    setActiveBtn("Sideboard");
});

wallDecorBtn.addEventListener("click", () => {
    filterProduct("Wall Decor");
    setActiveBtn("Wall Decor");
});
plantBtn.addEventListener("click", () => {
    filterProduct("Plant");
    setActiveBtn("Plant");
});


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