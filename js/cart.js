
let buttons = document.querySelectorAll(".cart-btn");

buttons.forEach((button) => {

    button.addEventListener("click", function () {

        let product = button.parentElement;

        let name = product.querySelector("h3").innerText;
        let price = product.querySelector("p").innerText;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let existing = cart.find(item => item.name === name);

        if (existing) {
            existing.quantity++;
        } else {
            cart.push({
                name: name,
                price: Number(price.replace(/[^0-9.]/g, "")),
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(name + " added to cart!");
    });

});
