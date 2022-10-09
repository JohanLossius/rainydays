const nameInput = document.querySelector("#full-name");
const streetInput = document.querySelector("#street-address");
const postalCodeInput = document.querySelector("#postal-code")
const cityInput = document.querySelector("#city");
const phoneInput = document.querySelector("#phone-input");
const emailInput = document.querySelector("#email-input");

const nameLabel = document.querySelector("#full-name-label");
const streetLabel = document.querySelector("#street-address-label");
const postalCodeLabel = document.querySelector("#postal-code-label")
const cityLabel = document.querySelector("#city-label");
const phoneLabel = document.querySelector("#phone-input-label");
const emailLabel = document.querySelector("#email-input-label");

const cardForm = document.querySelector(".checkout-payment-form-card");
const vippsForm = document.querySelector(".checkout-payment-form-vipps")
const vippsCheckbox = document.querySelector("#vipps");
const cardCheckbox = document.querySelector("#card");
const cardFormDivs = document.querySelectorAll(".card-div");

const cardNrId = document.querySelector("#card-nr");
const nameCardId = document.querySelector("#name-on-card");
const expirationDateId = document.querySelector("#expiration-date");
const cvcCodeId = document.querySelector("#cvc-code");

const cardNrLabel = document.querySelector("#card-nr-label");
const cardNameLabel = document.querySelector("#name-on-card-label");
const expirationLabel = document.querySelector("#expiration-label");
const cvcLabel = document.querySelector("#cvc-label");

const phoneNrVippsId = document.querySelector("#phone-nr-vipps");
const phoneVippsLabel = document.querySelector("#phone-vipps-label")

const homeDeliveryCheckbox = document.querySelector("#home-delivery");
const deliverToInput = document.querySelector("#deliver-to");
const deliveryTimeSelect = document.querySelector("#delivery-time");
const deliveryMessage = document.querySelector("#delivery-message");
const deliverToLabel = document.querySelector("#deliver-to-label");

// Manage Personal Data Input Fields

// Name Input Field Validation

nameInput.addEventListener("change", nameInputValidation);

function nameInputValidation() {
    if (nameInputCheck(nameInput.value) === false) {
        nameLabel.innerHTML = `Full name* <span class="error-message">*Please fill in your full name of at least 4 characters*</span>`;
    } else {
        nameLabel.innerHTML = `Full name* <span class="success-message">*Looks good*</span>`;
    }
}

function nameInputCheck(nameInputValue) {
    const nameInputLength = nameInputValue.trim().length;
    console.log(nameInputLength);
    if (nameInputLength >= 4) {
        return true;
    } else {
        return false;
    }
};

// Street Input Validation

streetInput.addEventListener("change", streetInputValidation);

function streetInputValidation() {
    if (streetInputCheck(streetInput.value) === false) {
        streetLabel.innerHTML = `Street address* <span class="error-message">*Please fill in your street address of at least 4 characters*</span>`;
    } else {
        streetLabel.innerHTML = `Street address* <span class="success-message">*Looks good*</span>`;
    }
}

function streetInputCheck(streetInputValue) {
    const streetInputLength = streetInputValue.trim().length;
    console.log(streetInputLength);
    if (streetInputLength >= 4) {
        return true;
    } else {
        return false;
    }
};

// Postal Code Input Validation

postalCodeInput.addEventListener("change", postalCodeInputValidation);

function postalCodeInputValidation() {
    if (postalCodeInputCheck(postalCodeInput.value) === false) {
        postalCodeLabel.innerHTML = `Postal code* <span class="error-message">*Please fill in your postal code of at least 4 digits*</span>`;
    } else {
        postalCodeLabel.innerHTML = `Postal code* <span class="success-message">*Looks good*</span>`;
    }
}

function postalCodeInputCheck(postalCodeInputValue) {
    const postalCodeInputLength = postalCodeInputValue.trim().length;
    console.log(postalCodeInputLength);
    if (postalCodeInputLength >= 4) {
        return true;
    } else {
        return false;
    }
};

// City Input Validation

cityInput.addEventListener("change", cityInputValidation);

function cityInputValidation() {
    if (cityInputCheck(cityInput.value) === false) {
        cityLabel.innerHTML = `City* <span class="error-message">*Please fill in the city name of your address of at least 2 characters*</span>`;
    } else {
        cityLabel.innerHTML = `City* <span class="success-message">*Looks good*</span>`;
    }
}

function cityInputCheck(cityInputValue) {
    const cityInputLength = cityInputValue.trim().length;
    console.log(cityInputLength);
    if (cityInputLength >= 2) {
        return true;
    } else {
        return false;
    }
};

// Phone Input Validation

phoneInput.addEventListener("change", phoneInputValidation);

function phoneInputValidation() {
    if (phoneInputCheck(phoneInput.value) === false) {
        phoneLabel.innerHTML = `Phone* <span class="error-message">*Please fill in your phone nr. of at least 8 characters*</span>`;
    } else {
        phoneLabel.innerHTML = `Phone* <span class="success-message">*Looks good*</span>`;
    }
}

function phoneInputCheck(phoneInputValue) {
    const phoneInputLength = phoneInputValue.trim().length;
    console.log(phoneInputLength);
    if (phoneInputLength >= 8) {
        return true;
    } else {
        return false;
    }
};

// Email Input Validation

emailInput.addEventListener("change", emailInputValidation);

function emailInputValidation() {
    if (emailInputCheck(emailInput.value) === false) {
        emailLabel.innerHTML = `Email* <span class="error-message">*Please fill in a valid email address of yours*</span>`;
    } else {
        emailLabel.innerHTML = `Email* <span class="success-message">*Looks good*</span>`;
    }
}

function emailInputCheck(email) {
    const regEx = /\S+@\S+\.\S+/;
    const validEmail = regEx.test(email);
    console.log(validEmail);
    return validEmail;
};

// Manage Delivery Fields

// Disable/enable Home Delivery

deliverToInput.disabled = true;
deliveryTimeSelect.disabled = true;
deliveryMessage.disabled = true;

homeDeliveryCheckbox.addEventListener("click",()=> {
    toggleHomeDelivery();
});

function toggleHomeDelivery() {
    if (homeDeliveryCheckbox.checked === false) {
        deliverToInput.disabled = true;
        deliveryTimeSelect.disabled = true;
        deliveryMessage.disabled = true;
        deliverToInput.value = "";
        deliverToLabel.innerHTML = `Delivery address:*`;
    } else {
        deliverToInput.disabled = false;
        deliveryTimeSelect.disabled = false;
        deliveryMessage.disabled = false;
        deliverToInput.value = `${streetInput.value} ${postalCodeInput.value} ${cityInput.value}`;
        deliverToInputValidation();
    }
};

deliverToInput.addEventListener("change", deliverToInputValidation);

function deliverToInputValidation() {
    if (deliverToCheck(deliverToInput.value) === false) {
        deliverToLabel.innerHTML = `Delivery address:* <span class="error-message">*Please fill in a valid delivery address of at least 10 characters*</span>`;
    } else {
        deliverToLabel.innerHTML = `Delivery address:* <span class="success-message">*Looks good*</span>`;
    }
}

function deliverToCheck(deliverToAddress) {
    const deliverToLength = deliverToAddress.trim().length;
    console.log(deliverToLength);
    if (deliverToLength >= 10) {
        return true;
    } else {
        return false;
    }
};


// Manage Card Payment

// Disable fields

cardNrId.disabled = true;
nameCardId.disabled = true;
expirationDateId.disabled = true;
cvcCodeId.disabled = true;

cardCheckbox.addEventListener("click",()=> {
    toggleCardPayment();
});

function toggleCardPayment() {
    if (cardCheckbox.checked === false) {
        cardNrId.disabled = true;
        nameCardId.disabled = true;
        expirationDateId.disabled = true;
        cvcCodeId.disabled = true;
    } else {
        cardNrId.disabled = false;
        nameCardId.disabled = false;
        expirationDateId.disabled = false;
        cvcCodeId.disabled = false;
    }
};

// Card Field Validation

// Card Nr. Validation

cardNrId.addEventListener("change", cardNrIdValidation);

function cardNrIdValidation() {
    if (cardNrCheck(cardNrId.value) === false) {
        cardNrLabel.innerHTML = `Card nr.* <span class="error-message">*Please fill in a valid card nr. of at least 10 digits*</span>`;
    } else {
        cardNrLabel.innerHTML = `Card nr.* <span class="success-message">*Looks good*</span>`;
    }
}

function cardNrCheck(cardNr) {
    const cardNrLength = cardNr.trim().length;
    console.log(cardNrLength);
    if (cardNrLength >= 10) {
        return true;
    } else {
        return false;
    }
};

// Card Name Validation

nameCardId.addEventListener("change", nameCardIdValidation);

function nameCardIdValidation() {
    if (nameCardCheck(nameCardId.value) === false) {
        cardNameLabel.innerHTML = `Name on card* <span class="error-message">*Please fill in a valid name of at least 2 characters*</span>`;
    } else {
        cardNameLabel.innerHTML = `Name on card* <span class="success-message">*Looks good*</span>`;
    }
}

function nameCardCheck(nameCard) {
    const nameCardLength = nameCard.trim().length;
    console.log(nameCardLength);
    if (nameCardLength >= 2) {
        return true;
    } else {
        return false;
    }
};

// Expiration Validation

expirationDateId.addEventListener("change", expirationDateIdValidation);

function expirationDateIdValidation() {
    if (expirationDateCheck(expirationDateId.value) === false) {
        expirationLabel.innerHTML = `Expiration date (mm/yy)* <span class="error-message">*Please fill in a valid expiration date of at least 4 characters*</span>`;
    } else {
        expirationLabel.innerHTML = `Expiration date (mm/yy)* <span class="success-message">*Looks good*</span>`;
    }
};

function expirationDateCheck(expirationDate) {
    const expirationDateLength = expirationDate.trim().length;
    console.log(expirationDateLength);
    if (expirationDateLength >= 4) {
        return true;
    } else {
        return false;
    }
};

// CVC Validation

cvcCodeId.addEventListener("change", cvcCodeIdValidation);

function cvcCodeIdValidation() {
    if (cvcCodeCheck(cvcCodeId.value) === false) {
        cvcLabel.innerHTML = `CVC code (3 digits)* <span class="error-message">*Please fill in a valid CVC code of 3 digits*</span>`;
    } else {
        cvcLabel.innerHTML = `CVC code (3 digits)* <span class="success-message">*Looks good*</span>`;
    }
};

function cvcCodeCheck(cvcCode) {
    const cvcCodeLength = cvcCode.trim().length;
    console.log(cvcCodeLength);
    if (cvcCodeLength === 3) {
        return true;
    } else {
        return false;
    }
};

// Manage Vipps Payment

phoneNrVippsId.disabled = true;

vippsCheckbox.addEventListener("click",()=> {
    toggleVippsPayment();
});

function toggleVippsPayment() {
    if (vippsCheckbox.checked === false) {
        phoneNrVippsId.disabled = true;
    } else {
        phoneNrVippsId.disabled = false;
    }
};

// Vipps Phone Nr. Validation

phoneNrVippsId.addEventListener("change", phoneNrVippsValidation);

function phoneNrVippsValidation() {
    if (phoneNrVippsCheck(phoneNrVippsId.value) === false) {
        phoneVippsLabel.innerHTML = `Phone nr.* <span class="error-message">*Please fill in a valid Vipps phone nr. of at least 8 digits*</span>`;
    } else {
        phoneVippsLabel.innerHTML = `Phone nr.* <span class="success-message">*Looks good*</span>`;
    }
};

function phoneNrVippsCheck(phoneNrVipps) {
    const phoneNrVippsLength = phoneNrVipps.trim().length;
    console.log(phoneNrVippsLength);
    if (phoneNrVippsLength >= 8) {
        return true;
    } else {
        return false;
    }
};


