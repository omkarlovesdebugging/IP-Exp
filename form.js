class Person {
    constructor(name, address, email, phone) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }

    displayDetails = () => {
        return `Name: ${this.name}\nAddress: ${this.address}\nEmail: ${this.email}\nPhone: ${this.phone}`;
    }
}

class Student extends Person {
    constructor(name, address, email, phone, rollNo) {
        super(name, address, email, phone);
        if (rollNo <= 0) throw new Error("Roll number must be greater than zero");
        this.rollNo = rollNo;
    }

    // Override the displayDetails method
    displayDetails = () => {
        return `${super.displayDetails()}\nRoll No: ${this.rollNo}`;
    }
}

// Function to validate the form
function validateForm() {
    const tagline = document.getElementById('tagline').value.trim();
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const deliveryDate = document.getElementById('delivery-date').value;
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const comments = document.getElementById('comments').value.trim();

    // Check if required fields are filled out
    if (!tagline || !color || !size || !quantity || !deliveryDate || !name || !address || !email || !phone) {
        alert('Please fill out all required fields.');
        return false;
    }

    // Validate tagline length (for example, max 100 characters)
    if (tagline.length > 100) {
        alert('Tagline cannot exceed 100 characters.');
        return false;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate phone number format (9 digits starting with 8 or 9)
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number (starting with 8 or 9 and followed by 9 digits).');
        return false;
    }

    // Validate quantity (must be a positive integer)
    if (quantity <= 0 || isNaN(quantity)) {
        alert('Quantity must be a positive number.');
        return false;
    }

    return true;
}

// Function to process the form and generate a receipt
function processOrder() {
    const tagline = document.getElementById('tagline').value.trim();
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const deliveryDate = document.getElementById('delivery-date').value;
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const comments = document.getElementById('comments').value.trim();

    // Create a Person object
    const customer = new Person(name, address, email, phone);
    
    // Create a receipt
    const receipt = `
    Order Confirmation Receipt:
    ---------------------------
    Tagline: ${tagline}
    Color: ${color}
    Size: ${size}
    Quantity: ${quantity}
    Delivery Date: ${deliveryDate}
    Customer Details:
    ${customer.displayDetails()}
    Additional Comments: ${comments}
    Receipt Generated On: ${new Date().toLocaleString()}
    `;
    
    alert(receipt);
}

// Attach submit event handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            processOrder();
            // Uncomment the following line to actually submit the form
            // form.submit();
        }
    });
});
