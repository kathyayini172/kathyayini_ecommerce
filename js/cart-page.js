function displayCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let container = document.getElementById("cart-items");

    let total = 0;

    container.innerHTML = "";

    cart.forEach((item, index) => {

        let amount = item.price * item.quantity;
        total += amount;

        container.innerHTML += `
            <div class="product">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: ${item.quantity}</p>

                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    document.getElementById("total").innerText =
        "Total: ₹" + total;
}

function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

function clearCart() {

    localStorage.removeItem("cart");

    displayCart();
}

displayCart();