// Contact form validation

const form = document.querySelector(".customer-support-form");
const nameInput = document.querySelector("#full-name");
const phoneInput = document.querySelector("#phone-input");
const emailInput = document.querySelector("#email-input");
const enquiryAboutInput = document.querySelector("#enquiry-about");
const productInput = document.querySelector("#product-id");
const orderInput = document.querySelector("#order-id");
const messageInput = document.querySelector("#customer-support-message");

const nameLabel = document.querySelector("#name-label");
const phoneLabel = document.querySelector("#phone-label");
const emailLabel = document.querySelector("#email-label");
const enquiryLabel = document.querySelector("#enquiry-about-label");
const orderLabel = document.querySelector("#order-id-label");
const productLabel = document.querySelector("#product-id-label");
const messageLabel = document.querySelector("#message-label");

const messageCont = document.querySelector(".form-success-message");
const successMessageCont = document.querySelector(".form-success-message");

// Name validation

nameInput.addEventListener("change", nameInputValidation);

function nameInputValidation() {
    if (nameCheck(nameInput.value) === false) {
        nameLabel.innerHTML = `Name <span class="error-message">*Please fill in your name.*</span>`;
    } else {
        nameLabel.innerHTML = `Name <span class="success-message">*Looks good*</span>`;
    }
}

// Phone validation

phoneInput.addEventListener("change", phoneInputValidation);

function phoneInputValidation() {
    if (phoneCheck(phoneInput.value) === false) {
        phoneLabel.innerHTML = `Phone <span class="error-message">*Please fill in a phone nr. of at least 8 characters.*</span>`;
    } else {
        phoneLabel.innerHTML = `Phone (min. 8 characters.) <span class="success-message">*Looks good*</span>`;
    }
}


// Email validation

emailInput.addEventListener("change", emailInputValidation);

function emailInputValidation() {
    if (emailCheck(emailInput.value) === false) {
        emailLabel.innerHTML = `Email <span class="error-message">*Please fill in a valid email.*</span>`;
    } else {
        emailLabel.innerHTML = `Email (required) <span class="success-message">*Looks good*</span>`;
    }
}

// Message validation

messageInput.addEventListener("change", messageInputValidation);

function messageInputValidation() {
    if (messageCheck(messageInput.value) === false) {
        messageLabel.innerHTML = `Your message <span class="error-message">*Please fill in a valid message of at least 10 characters.*</span>`;
    } else {
        messageLabel.innerHTML = `Your message <span class="success-message">*Looks good*</span>`;
    }
}

// Form submit management

form.addEventListener("submit", submitForm);

function submitForm() {
    event.preventDefault();
    console.log(event);

    // Manage the name instructions
    if (nameCheck(nameInput.value) === false) {
        nameLabel.innerHTML = `Name <span class="error-message">*Please fill in your name.*</span>`;
    } else {
        nameLabel.innerHTML = `Name <span class="success-message">*Looks good*</span>`;
    }

    // Manage the phone instructions
    if (phoneCheck(phoneInput.value) === false) {
        phoneLabel.innerHTML = `Phone <span class="error-message">*Please fill in a phone nr. of at least 8 characters.*</span>`;
    } else {
        phoneLabel.innerHTML = `Phone (min. 8 characters.) <span class="success-message">*Looks good*</span>`;
    }

    // Manage the email instructions
    if (emailCheck(emailInput.value) === false) {
        emailLabel.innerHTML = `Email <span class="error-message">*Please fill in a valid email.*</span>`;
    } else {
        emailLabel.innerHTML = `Email (required) <span class="success-message">*Looks good*</span>`;
    }

    // // Manage enquiry instructions
    // if (enquiryCheck(emailInput.value) === false) {
    //     enquiryLabel.innerHTML = `Email <span class="error-message">*Please fill in a valid email.*</span>`;
    // } else {
    //     enquiryLabel.innerHTML = `Email (required) <span class="success-message">*Looks good*</span>`;
    // }

    // // Manage the order id instructions
    // if (orderCheck(orderInput.value) === false) {
    //     orderLabel.innerHTML = `Order ID <span class="error-message">*Please fill in a valid Order ID of at least 6 characters*</span>`;
    // } else {
    //     orderLabel.innerHTML = `Order ID <span class="success-message">*Looks good*</span>`;
    // }

    // // Manage the product id instructions
    // if (productCheck(productInput.value) === false) {
    //     productLabel.innerHTML = `Product ID <span class="error-message">*Please fill in a valid Product ID of at least 6 characters*</span>`;
    // } else {
    //     productLabel.innerHTML = `Product ID <span class="success-message">*Looks good*</span>`;
    // }

    // Manage the messaging instructions
    if (messageCheck(messageInput.value) === false) {
        messageLabel.innerHTML = `Your message <span class="error-message">*Please fill in a valid message of at least 10 characters.*</span>`;
    } else {
        messageLabel.innerHTML = `Your message <span class="success-message">*Looks good*</span>`;
    }

    // Submission validation and messaging.
    if (nameCheck(nameInput.value) && phoneCheck(phoneInput.value) && emailCheck(emailInput.value) && messageCheck(messageInput.value)) {
        messageCont.innerHTML = `<span class="success-message">Your message was sent successfully. You'll hear from us within 2 working days.</span>`;
        form.reset();
        successMessageCont.style.marginBottom = "10px";
        nameLabel.innerHTML = `Full name*`;
        phoneLabel.innerHTML = `Phone*`;
        emailLabel.innerHTML = `Email*`;
        // enquiryLabel.innerHTML = `What is your enquiry about?*`;
        // orderLabel.innerHTML = `Order ID: Required for order tracking and product returns`;
        // productLabel.innerHTML = `Product ID: Required for product support`;
        messageLabel.innerHTML = `Your message*`;
    } else {
        messageCont.innerHTML = `<span class="error-message">Your message was not sent. Please correct the following:</span>`
        successMessageCont.style.marginBottom = "10px";
    }
};

function nameCheck(name) {
    const nameLength = name.trim().length;
    console.log(nameLength);
    if (nameLength >= 2) {
        return true;
    } else {
        return false;
    }
};

function phoneCheck(phone) {
    const phoneLength = phone.trim().length;
    console.log(phoneLength);
    if (phoneLength >= 8) {
        return true;
    } else {
        return false;
    }
};

function emailCheck(email) {
    const regEx = /\S+@\S+\.\S+/;
    const validEmail = regEx.test(email);
    console.log(validEmail);
    return validEmail;
};

// function productCheck(productId) {
//     const productIdLength = productId.trim().length;
//     console.log(productIdLength);
//     if (productIdLength >= 6) {
//         return true;
//     } else {
//         return false;
//     }
// };

// function orderCheck(orderId) {
//     const orderIdLength = orderId.trim().length;
//     console.log(orderIdLength);
//     if (orderIdLength >= 6) {
//         return true;
//     } else {
//         return false;
//     }
// };

function messageCheck(message) {
    const messageLength = message.trim().length;
    console.log(messageLength);
    if (messageLength >= 10) {
        return true;
    } else {
        return false;
    }
};