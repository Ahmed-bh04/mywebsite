document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();

    let errorMessage = "";

    if (firstName.length < 3) {
        errorMessage += "First Name must have at least 3 characters.\n";
    }
    if (lastName.length < 3) {
        errorMessage += "Last Name must have at least 3 characters.\n";
    }
    if (!/^\d{8}$/.test(mobile)) {
        errorMessage += "Mobile No must be exactly 8 digits.\n";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMessage += "Please enter a valid email address.\n";
    }

    if (errorMessage) {
        alert(errorMessage);
    } else {
    
        const fullName = `${firstName} ${lastName}`;
        localStorage.setItem('userName', fullName);
        localStorage.setItem('mobile', mobile);
        localStorage.setItem('email', email);
        document.getElementById('user-info').textContent = `Welcome, ${fullName}! \n Phone: ${mobile} \n Email:  ${email}`;
        alert("Thank you for registering!");
    }
});

function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} has been added to your cart!`);
}

function viewCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartSummary = document.getElementById('cartSummary');
    const cartItemsList = document.getElementById('cartItemsList');
    const totalPriceElem = document.getElementById('totalPrice');

    cartSummary.style.display = 'block';

    cartItemsList.innerHTML = ''; 

    let totalPrice = 0;

    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} BHD`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElem.textContent = totalPrice;
}

function clearCart() {
    localStorage.removeItem('cart');
    alert("Your cart has been cleared.");
    document.getElementById('cartSummary').style.display = 'none';  
}
function clearCart() {
    localStorage.removeItem('cart');
    alert("You have paid successfully.");
    document.getElementById('cartSummary').style.display = 'none';  
}


