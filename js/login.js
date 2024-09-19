document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    //get phone number and pin number
    const phoneNumber =document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    //bad way to do home 
    if(phoneNumber === '5' && pinNumber === '1234'){
                console.log('you log in');
                window.location.href = "./home.html"
             }else{
                alert('wrong phone number or pin');
             }

})