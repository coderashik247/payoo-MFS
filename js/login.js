// // step-1: get event handler
// document.getElementById('button-login').addEventListener('click', function(event){
//     // step-2: prevent default behavior (prevent reloading browser)
//     event.preventDefault();

//     // step-3: get the phone number and pin number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
    
//     // step-4: validate phone and pin
//     // this is temporary. 
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log("You are logged in");
//         // step-5: allow user to use the website
//     }
//     else{
//         alert('Incorrect your phone number or pin');
//     }

// })

// step-1: get event handler
document.getElementById('button-login').addEventListener('click',function(event){
    // step-2: prevent default behavior
    event.preventDefault();

    // step-3: get the phone number & pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // validate check
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log("You are logged in");
        window.location.href = '/home.html'
    }
    else{
        alert('Incorrect Password');
    }
    // console.log(phoneNumber, pinNumber);
})