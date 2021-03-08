function validateForm() {
    document.getElementById('alert-holder').innerText = '';

    let status = true;

    // Primer za prva tri polja

    let name = document.getElementById('name');
    name.classList.remove('is-invalid');
    if (forename.value.length < 2 || name.value.length > 60) {
        //showAlert('Nije ispravno ime. Mora da bude od 2 do 60 karaktera duzine.');
        name.classList.add('is-invalid');
        status = false;
    }

    let phone = document.getElementById('phone');
    phone.classList.remove('is-invalid');
    if (!phone.value.match(/^\+[0-9]{6,24}$/)) {
        //showAlert('Nije ispravan broj telefona. Mora da pocinje sa + iza kojeg sledi od 6 do 24 cifara.');
        phone.classList.add('is-invalid');
        status = false;
    }

    return status;
}