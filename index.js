document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log("btn clicked");
    const mobileNumber = 12345678910;
    const pin = 1234;

    const numberInput = parseInt(document.getElementById('number-input').value);
    // console.log(numberInput);
    const pinInput = parseInt(document.getElementById('pin-input').value);
    // console.log(pinInput);

    if(numberInput === mobileNumber && pinInput === pin){
    //    console.log("Authentication is successful");
    window.location.href= './home.html';
       
    }
    else{
        alert("Please enter valid credentials");
    }
    document.getElementById('number-input').value = '';
    document.getElementById('pin-input').value = '';
})