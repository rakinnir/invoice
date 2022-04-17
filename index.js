// declaring the variable
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const services = document.getElementById("services")
const prices = document.getElementById("prices")
const invoice = document.getElementById("invoice")
const totalAmount = document.getElementById("total-amount")
const firstService = document.getElementById("first-service")
const secondService = document.getElementById("second-service")
const thirdService = document.getElementById("third-service")
const removeWashCar = document.getElementById("remove-washcar")
const removeMowLawn = document.getElementById("remove-mowlawn")
const removepullweed = document.getElementById("remove-pullweeds")
const priceOfWashCar = document.getElementById("price-of-washcar")
const priceOfMowLawn = document.getElementById("price-of-mowlawn")
const priceOfPullWeeds = document.getElementById("price-of-pullweeds")

// cost counting
let amount = 0
totalAmount.textContent = `${amount} $`

// adding item to cart with price
btn1.addEventListener("click", function washCar() {
  firstService.textContent = "Wash Car"
  removeWashCar.textContent = "remove"
  priceOfWashCar.textContent = "10$"
  amount = amount + 10
  totalAmount.textContent = `${amount} $`
  btn1.removeEventListener("click", washCar)
})
btn2.addEventListener("click", function mowLawn() {
  secondService.textContent = "Mow Lawn"
  removeMowLawn.textContent = "remove"
  priceOfMowLawn.textContent = "20$"
  amount = amount + 20
  totalAmount.textContent = `${amount} $`
  btn2.removeEventListener("click", mowLawn)
})
btn3.addEventListener("click", function pullWeeds() {
  thirdService.textContent = "Pull Weeds"
  removepullweed.textContent = "remove"
  priceOfPullWeeds.textContent = "30$"
  amount = amount + 30
  totalAmount.textContent = `${amount} $`
  btn3.removeEventListener("click", pullWeeds)
})

// removing items from carts
removeWashCar.addEventListener("click", function () {
  ;[firstService, removeWashCar, priceOfWashCar].forEach(function (clear) {
    clear.innerHTML = "&nbsp"
  })
  amount = amount - 10
  totalAmount.textContent = `${amount} $`
})
removeMowLawn.addEventListener("click", function () {
  ;[secondService, removeMowLawn, priceOfMowLawn].forEach(function (clear) {
    clear.innerHTML = "&nbsp"
  })
  amount = amount - 20
  totalAmount.textContent = `${amount} $`
})
removepullweed.addEventListener("click", function () {
  ;[thirdService, removepullweed, priceOfPullWeeds].forEach(function (clear) {
    clear.innerHTML = "&nbsp"
  })
  amount = amount - 30
  totalAmount.textContent = `${amount} $`
})

// calling invoice
invoice.addEventListener("click", function (invoices) {
  services.textContent = ""
  prices.textContent = ""
  totalAmount.textContent = ""
  alert("We have got your invoices")
  ;[btn1, btn2, btn3].forEach(function (removeAll) {
    removeAll.remove()
  })
})
