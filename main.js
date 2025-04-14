
const firstNameError = document.getElementById("first_name_error");
const lastNameError = document.getElementById("last_name_error");
const emailError = document.getElementById("email_error");
const messageError = document.getElementById("message_error");
const radioError = document.getElementById("radio_error");
const consentError = document.getElementById('consent_error');
const form = document.getElementById("my_form");
const message = document.getElementById("successful")


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const isFirstNameValid = checkFirstName();
    const isLastNameValid = checkLastName();
    const isEmailValid = checkEmail();
    const isRadioValid = checkRadio();
    const isMessageValid = checkMessage();
    const isConsentValid = checkConsent();

    if (isFirstNameValid && isLastNameValid && isEmailValid && isRadioValid && isMessageValid && isConsentValid) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const screenClass = "show";
            message.classList.add(screenClass);
                setTimeout(() => {
                    message.classList.remove(screenClass);
                    form.reset();
                }, 2500);
    }
})

document.getElementById('first_name').addEventListener('input', checkFirstName)

function checkFirstName() {
        const firstNameInput = document.getElementById('first_name');
        const firstName = firstNameInput.value;

        if (firstName.length < 3) {
                firstNameError.textContent = 'First name must be at least 3 characters long.';
                firstNameInput.classList.add("input_error")
                return false;
        } else {
                firstNameError.textContent = '';
                firstNameInput.classList.remove("input_error")
                return true;
        }
}

document.getElementById('last_name').addEventListener('input', checkLastName)

function checkLastName() {
    const lastNameInput = document.getElementById('last_name');
    const lastName = lastNameInput.value;

        if (lastName.length < 3) {
                lastNameError.textContent = 'Last name must be at least 3 characters long.';
                lastNameInput.classList.add("input_error");
                return false;
        } else {
                lastNameError.textContent = '';
                lastNameInput.classList.remove("input_error");
                return true;
        }
}


let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

function checkEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!emailRegEx.test(email)) {
        emailError.textContent = "Please enter a valid Email";
        emailInput.classList.add("input_error");
        return false;
    } else {
        emailError.textContent = '';
        emailInput.classList.remove("input_error")
        return true;
    }
}

let lastSelected = null;

document.querySelectorAll('input[name="query_type"]').forEach(radio => {
    radio.addEventListener("click", () => {
        if (radio === lastSelected) {
            radio.checked = false;
            lastSelected = null;
        } else {
            lastSelected = radio;
        }
    })
})


function checkRadio () {
    const selectedOption = document.querySelector('input[name="query_type"]:checked')

    if (selectedOption) {
        radioError.textContent = '';
        return true;
    } else {
        radioError.textContent = "Please select a query type."
        return false;
    }
}

function checkMessage () {
    const messageAreaInput = document.getElementById("message");
    const message = messageAreaInput.value;

    if (message.length < 3 || message == null) {
        messageError.textContent = "Message must be at least 3 characters long.";
        messageAreaInput.classList.add("input_error");
        return false;
    } else {
        messageError.textContent = "";
        messageAreaInput.classList.remove("input_error");
        return true;
    }
}


function checkConsent() {
    const consentBox = document.querySelector('input[name="consent"]:checked');

    if (consentBox) {
        consentError.textContent = "";
        return true
    } else {
        consentError.textContent = "To submit this form, please consent to being contacted";
        return false;
    }
}