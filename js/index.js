'used strict'
// <    > 

window.addEventListener('DOMContentLoaded', () => {
    // Variables principales
    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const lastName = document.getElementById('lastName');
    const querys = document.querySelectorAll('.query');
    const textTarea = document.getElementById('textTarea');
    const success = document.querySelector('.success');
    // Variables de error
    const nameError = document.getElementById('nameErrror');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const textTareaError = document.getElementById('textTareaError');

    // Validamos el formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;

        // validamos el campo del name
        if(!name.value.trim()) {
            nameError.textContent = 'This field is required';
            errorInputs();
            isValid = false;
        } else if(!isValidName(name.value.trim())) {
            nameError.textContent = 'Invalid name'
            errorInputs();
        } else {
            nameError.textContent = '';
        };

        // Validamos el campo de lastName
        if (!lastName.value.trim()) {
            lastNameError.textContent = 'This field is required';
            errorInputs();
            isValid = false;
        } else if(!isValidlastName(lastName.value.trim())) {
            lastNameError.textContent = 'Invalid last name';
            errorInputs();
        } else {
            lastNameError.textContent = '';
        };

        // Validamos el campo de email
        if (!email.value.trim()) {
            emailError.textContent = 'Please enter a valid email address';
            errorInputs();
            isValid = false;
        } else if(!isValidEmail(email.value.trim())) {
            emailError.textContent = 'Invalid email';
            errorInputs();
        } else {
            emailError.textContent = '';
        };

        // Validamos que el campo de mensaje no esté vacio
        if (!textTarea.value.trim()) {
            textTareaError.textContent = 'This field is required';
            errorInputs();
            isValid = false;
        } else if(!isValidtextTarea(textTarea.value.trim())) {
            textTareaError.textContent = 'Invalid message';
            errorInputs();
        } else {
            textTareaError.textContent = '';
        };

        if(isValid) {
            success.style.display = 'block';
            setTimeout(() => {
                success.style.display = 'none';
            }, 4000);

            resetErrors();
            form.reset();
        }

    });

    // Error inputs
    const errorInputs = () => {
        name.style.border = '1px solid red';
        lastName.style.border = '1px solid red';
        email.style.border = '1px solid red';
        textTarea.style.border = '1px solid red';
    };

    const resetErrors = () => {
        name.style.border = ''; 
        lastName.style.border = ''; 
        email.style.border = ''; 
        textTarea.style.border = ''; 
        nameError.textContent = ''; 
        lastNameError.textContent = '';
        emailError.textContent = '';
        textTareaError.textContent = '';
    };

    // Quitamos el foco si los campos están llenos
    name.addEventListener('change', resetErrors);
    lastName.addEventListener('change', resetErrors);
    email.addEventListener('change', resetErrors);
    textTarea.addEventListener('change', resetErrors);

    // Recorremos los querys para validarlos
    querys.forEach(query => {
        query.addEventListener('click', () => {
            console.log('Me haz dado click!');
        });
    });


    // Validamos las expresiones regulares
    function isValidName(name) {
        const nameRegex = /^[a-zA-Z0-9\s.,!?'"()&$%]+$/;
        return nameRegex.test(name);
    };

    function isValidlastName(lastName) {
        const lastNameRegex = /^[a-zA-Z0-9\s.,!?'"()&$%]+$/;
        return lastNameRegex.test(lastName);
    };

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    function isValidtextTarea(textTarea) {
        const textTareaRegex = /^[a-zA-Z0-9\s.,!?'"()&$%]+$/;
        return textTareaRegex.test(textTarea);
    };

});