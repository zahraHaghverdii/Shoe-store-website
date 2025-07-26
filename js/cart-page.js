// --------------cart item product----------------------
let itemProducts = document.querySelector("#itemProduct")
let totalProducts = document.querySelector("#totalProducts")
function updateShoppingitemCartProduct() {
  if (dataArryProduct.length > 0) {
   let ItemAddProductCartPage = dataArryProduct.map(cadrProduct =>{
    console.log(cadrProduct.price);
      return `
      <li class="new-item-product" id="${cadrProduct.id}">
      <div class="box-img-new-item"><img src="${cadrProduct.img}" alt=""></div>
      <p>${cadrProduct.name}</p>
      <div class="priceBoxItem">
          <h4 class="priceItem">${cadrProduct.basePrice}</h4>
          <small>تومان</small>
      </div>
      <div class="btn-minus-plus" id="btn-Minus-Plus">
          <div class="button-plus" id="${cadrProduct.id}">+</div>
          <span class="count-product">${cadrProduct.count}</span>
          <div class="button-minus" id="${cadrProduct.id}">-</div>
      </div>
      <div class="priceBoxItem">
          <h4 class="priceItem priceItemBase">${cadrProduct.price}</h4>
          <small>تومان</small>
      </div>
     </li>
      `
    })
    itemProduct.innerHTML = ItemAddProductCartPage.join('') 
  } 
  totalProducts.innerHTML = sumtotal()
  sumcounts()
  //
  btnPlusFunc() 
  btnMinusFunc()
}
updateShoppingitemCartProduct()