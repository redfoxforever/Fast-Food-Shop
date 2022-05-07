const product = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kcall: 500,
        get calcSum() {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kcall: 650,
        get calcSum() {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kcall: 750,
        get calcSum() {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.kcall * this.amount
        }
    },
}

const btn = document.querySelectorAll(".main__product-btn")

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        // console.log(this);
        // closest() Elementing o'rab turgan elemntiga ulanadi 
        // console.log(this.closest(".main__product").getAttribute("id"));
        prepare(this)
    })
}

function prepare(el) {
    // console.log(el);
    let parent = el.closest(".main__product")
    let parentId = parent.getAttribute("id")
    // console.log(parent);
    // console.log(product[parentId]);
    // console.log(parentId);
    let num = parent.querySelector(".main__product-num")
    // console.log(num);
    let price = parent.querySelector(".main__product-price span")
    let kcall = parent.querySelector(".main__product-kcall span")
    let sym = el.getAttribute('data-symbol')

    let count = product[parentId].amount

    if (sym == "+") {
        count++
    } else if (sym == "-" && count > 0) {
        count--
    }

    num.innerHTML = count
    product[parentId].amount = count
    price.innerHTML = product[parentId].calcSum
    kcall.innerHTML = product[parentId].calcKcall    
}


// Lvl Counter Start

let interval
let intervalNum = 100

let headerLvlTimer = document.querySelector(".header__timer-extra")

function lvlCount() {
    headerLvlTimer.innerHTML++

    interval = setTimeout(() => {
        lvlCount()
        if (headerLvlTimer.innerHTML == 100) {
            clearInterval(interval)
        } else if (headerLvlTimer.innerHTML >= 50 && headerLvlTimer.innerHTML < 80) {
            intervalNum = 200
        } else if (headerLvlTimer.innerHTML >= 80 && headerLvlTimer.innerHTML < 95) {
            intervalNum = 300
        } else if (headerLvlTimer.innerHTML >= 95) {
            intervalNum = 600
        }
    }, intervalNum);
}

lvlCount()

// Lvl Counter End


// Img view start

const mainProductInfo = document.querySelectorAll('.main__product-info')
let view = document.querySelector('.view')
let viewClose = document.querySelector('.view__close')


for (let k = 0; k < mainProductInfo.length; k++) {
    mainProductInfo[k].addEventListener('dblclick', function () {
        // console.log(this);
        imgView(this)
    })
}

function imgView(element) {
    view.classList.add('active')

    let productImg = element.querySelector('.main__product-img')
    let imgAttr = productImg.getAttribute('src')

    let imgBox = view.querySelector('img')
    imgBox.setAttribute('src', imgAttr)
}

viewClose.addEventListener('click', function () {
    view.classList.remove('active')
})


// Img view end