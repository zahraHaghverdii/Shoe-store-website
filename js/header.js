const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menu-link");
const links = document.querySelectorAll(".menu-link ul li");

// coverBody
const coverBody = document.getElementById("coverBody");

// cartProductIcon
const cartProductIcon = document.getElementById("cartProductIcon");
const sectonBoxCadrProducts = document.querySelector(".secton-box-cadr-products");

// btn-login
const btnLogin = document.querySelector(".btn-login");
const dropdownLoginSignin = document.querySelector(".dropdown-login-signin");

//btn payment
let payment = document.getElementById("payment")

// box-price 
const cadrPrice = document.querySelectorAll(".box-price span")


//cadr-product
const cadrProduct = document.querySelectorAll(".cadr-product")


// btn-add-product
const btnAddProduct = document.querySelectorAll(".btn-add-product")
// closeModal
const modalProductAddRemove = document.querySelector(".modal-product-add-remove")
const closeModal = document.getElementById("closeModal")
const continueShopping = document.getElementById("continue-shopping")


// ------------------------hamburger------------------------
hamburger.addEventListener("click", () => {
  //Links
  navLinks.classList.toggle("open");
  //Animation
  hamburger.classList.toggle("toggle");
  // coverBody
  coverBody.classList.toggle("coverBodyActive")
});

// ---------------------------coverBody------------------
coverBody.addEventListener("click", () => {
  //Links
  navLinks.classList.remove("open");
  //Animation
  hamburger.classList.remove("toggle");
  // coverBody
  coverBody.classList.remove("coverBodyActive")
  // activeSectonBoxCadrProducts
  sectonBoxCadrProducts.classList.remove("activeSectonBoxCadrProducts")
  // dropdownLoginSignin
  dropdownLoginSignin.classList.remove("dropdownLoginSigninActive")
  // modalProductAddRemove
  modalProductAddRemove.classList.remove("modalProductAddRemoveActive")
});

// ----------------------cartProductIco---------------------
cartProductIcon.addEventListener("click", () => {
  // coverBody
  coverBody.classList.toggle("coverBodyActive")
  // activeSectonBoxCadrProducts
  sectonBoxCadrProducts.classList.toggle("activeSectonBoxCadrProducts")
  // dropdownLoginSignin
  dropdownLoginSignin.classList.remove("dropdownLoginSigninActive")
  // modalProductAddRemove
  modalProductAddRemove.classList.remove("modalProductAddRemoveActive")
});

// ----------------------btn-login---------------------
btnLogin.addEventListener("click", () => {
  // coverBody
  coverBody.classList.toggle("coverBodyActive")
  // dropdownLoginSignin
  dropdownLoginSignin.classList.toggle("dropdownLoginSigninActive")
  // activeSectonBoxCadrProducts
  sectonBoxCadrProducts.classList.remove("activeSectonBoxCadrProducts")
  // modalProductAddRemove
  modalProductAddRemove.classList.remove("modalProductAddRemoveActive")
});

// ----------------------closeModal---------------
closeModal.addEventListener("click", () => {
  // coverBody
  coverBody.classList.remove("coverBodyActive")
  // modalProductAddRemove
  modalProductAddRemove.classList.remove("modalProductAddRemoveActive")
});

// ----------------------continue Shopping------------------
continueShopping.addEventListener("click", () => {
  // coverBody
  coverBody.classList.remove("coverBodyActive")
  // modalProductAddRemove
  modalProductAddRemove.classList.remove("modalProductAddRemoveActive")
});

// ----------------------cadr Price--------------
  cadrPrice.forEach((cadrPriceItem)=>{
    //add ','
    let  cadrPriceItemInerText= Number(cadrPriceItem.innerHTML).toLocaleString();
    cadrPriceItem.innerHTML = cadrPriceItemInerText;

  })

// -----------------btn show modal addd product----------------  
function funcAddProduct(id) {
      // coverBody
      coverBody.classList.toggle("coverBodyActive")
      // activeSectonBoxCadrProducts
      sectonBoxCadrProducts.classList.remove("activeSectonBoxCadrProducts")
      // dropdownLoginSignin
      dropdownLoginSignin.classList.remove("dropdownLoginSigninActive")
      // modalProductAddRemove
      modalProductAddRemove.classList.toggle("modalProductAddRemoveActive")
  
      // ******result-modal*****
      const resultModal = document.querySelector(".result-modal")
      resultModal.innerText = "محصول به سبد خرید افزوده شد"
}

// ----------------btn payment--------------
payment.addEventListener("click" , ()=>{
  // ******result-modal*****
  const resultModal = document.querySelector(".result-modal")
  resultModal.innerText = "خرید شما ثبت شد"

  setTimeout(function () {
    coverBody.classList.remove("coverBodyActive")
    modalProductAddRemove.classList.remove("modalProductAddRemoveActive")
  }, 2500);
})

// ------------------total function----------------------
let dataArryProduct = JSON.parse(localStorage.getItem("shopingCadrProduct")) || [];
function sumtotal() {
  let sumpriceTotal = 0
  let  sumprice
  dataArryProduct.forEach(cadrProduct =>{
    sumpriceTotal += cadrProduct.price
    sumprice= Number(sumpriceTotal).toLocaleString();
  })
  return sumprice

}

// ------------------sum count function----------------------
let numberProduct = document.getElementById("numberProduct")
let numberProductBoxCadr = document.getElementById("numberProductBoxCadr")
let countProducts = document.getElementById("countProducts")
function sumcounts() {
  let counts = 0
    dataArryProduct.map(cadrProduct =>{
      counts += cadrProduct.count
      numberProduct.innerHTML = counts
      numberProductBoxCadr.innerHTML = counts
    })
    return counts
}
// ------------------------update Shopp ingCart Html-------------------------
let boxCadrProducts = document.querySelector("#boxCadrProducts")
let total = document.querySelector("#total")

function updateShoppingCartHtml() {
  localStorage.setItem("shopingCadrProduct", JSON.stringify(dataArryProduct));
  if (dataArryProduct.length > 0) {
    let ItemAddProduct = dataArryProduct.map(cadrProduct =>{
      let sumpriceItem= Number(cadrProduct.price).toLocaleString();
      return `
        <li class="new-item-product"  id="${cadrProduct.id}">
            <div class="box-img-new-item"><img src="${cadrProduct.img}" alt=""></div>
            <div class="box-name-price">
              <p>${cadrProduct.name}</p>
              <div class="priceBoxItem">
                 <h4 class="priceItem">${sumpriceItem}</h4> 
                 <small>تومان</small> 
              </div>
            </div>
            <div class="btn-minus-plus" id="btn-Minus-Plus">
            <div class="button-plus" id="${cadrProduct.id}">+</div>
            <span class="count-product">${cadrProduct.count}</span>
            <div class="button-minus" id="${cadrProduct.id}">-</div>
            </div>
        </li>
      `
    })
    boxCadrProducts.innerHTML = ItemAddProduct.join('') 
    total.innerHTML = sumtotal()
  }
  else {
    boxCadrProducts.innerHTML = `
    <div id="emptuProducts">
      <h3>سبد خرید خالی است</h2>
      <i class="fa fa-shopping-cart"></i>
    </div>
    `;
    total.innerHTML = "0.0"
  }
  sumcounts()
}



// ------------------update price and count(number) product----------------
function updateProductIncart(cadrProduct) {
  for (let i = 0; i < dataArryProduct.length; i++) {
    if (dataArryProduct[i].id == cadrProduct.id) {
      dataArryProduct[i].count += 1
      dataArryProduct[i].price = dataArryProduct[i].basePrice * dataArryProduct[i].count
      return
    }
  }

  dataArryProduct.push(cadrProduct)
}

//=============================function add product===================================
 function addProduct() {
  btnAddProduct.forEach(btnAddProduct =>{
    btnAddProduct.addEventListener("click" , ()=>{

    // **********add product**********
     let cadrProduct = btnAddProduct.parentElement.parentElement;

     let idProduct = cadrProduct.id;
     let priceProduct = cadrProduct.querySelector("#newPrice").innerHTML;
     let nameProduct = cadrProduct.querySelector(".name-product p").innerHTML;
     let imgProduct = cadrProduct.querySelector(".cadr-img img").src;

     var res = priceProduct.replace(",", "");
     let priceNumber = Number(res)


     //add product for obj
     let arryProduct = {
      id: idProduct,
      name: nameProduct,
      img: imgProduct,
      price: +priceNumber,
      basePrice: +priceNumber,
      priceProduct: priceNumber,
      count: 1,
     }

     //update price and count(number) product
     updateProductIncart(arryProduct)

     //
     updateShoppingCartHtml()
     //
     btnPlusFunc() 
     btnMinusFunc()
    })
  })
 }
 addProduct()
 updateShoppingCartHtml()



// =================btn plus product=====================
function btnPlusFunc() {
    let parentItem =  document.querySelectorAll(".new-item-product");
    parentItem.forEach(parentItem =>{
      let countProduct =  parentItem.querySelector(".count-product");
      let priceItem =  parentItem.querySelector(".priceItem");
      let btnPlus =  parentItem.querySelector(".button-plus");
          btnPlus.addEventListener("click" , ()=>{
            for (let i = 0; i < dataArryProduct.length; i++) {
              if (dataArryProduct[i].id == btnPlus.id) {
                //
                dataArryProduct[i].count += 1
                dataArryProduct[i].price = dataArryProduct[i].basePrice * dataArryProduct[i].count
                localStorage.setItem("shopingCadrProduct", JSON.stringify(dataArryProduct));
                //
                countProduct.innerHTML = dataArryProduct[i].count
                priceItem.innerHTML = dataArryProduct[i].price
                //
                total.innerHTML = sumtotal()
                sumcounts()
                return
              }else{
                dataArryProduct[i].count = dataArryProduct[i].count
              }
            }
          })
        })
}
btnPlusFunc()


// =================btn Minus product=====================
function btnMinusFunc() {
  let parentItem =  document.querySelectorAll(".new-item-product");
  parentItem.forEach(parentItem =>{
    let countProduct =  parentItem.querySelector(".count-product");
    let priceItem =  parentItem.querySelector(".priceItem");
    let btnMinus =  parentItem.querySelector(".button-minus");
        btnMinus.addEventListener("click" , ()=>{
          for (let i = 0; i < dataArryProduct.length; i++) {
            if (dataArryProduct[i].id == btnMinus.id) {
              //
              dataArryProduct[i].count -= 1
              dataArryProduct[i].price = dataArryProduct[i].basePrice * dataArryProduct[i].count
              localStorage.setItem("shopingCadrProduct", JSON.stringify(dataArryProduct));
              //
              countProduct.innerHTML = dataArryProduct[i].count
              priceItem.innerHTML = dataArryProduct[i].price
              //
              if (dataArryProduct[i].count <= 0) {
                dataArryProduct = dataArryProduct.filter((cadrProduct) => cadrProduct.count!== 0);
              }
                localStorage.setItem("shopingCadrProduct", JSON.stringify(dataArryProduct));
            //
              total.innerHTML = sumtotal()
              sumcounts()

              return
            }else{
              dataArryProduct[i].count = dataArryProduct[i].count
            }
          }
        })
})
    }
btnMinusFunc()




