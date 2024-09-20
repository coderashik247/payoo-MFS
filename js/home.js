// step-1: add an event handler to the add money button inside the form 
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form handler
    event.preventDefault();

    // step-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;

    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    
    // step-3: check the validity
    if(pinNumberInput === '1234'){
        // step-4: get the balance
        const balance = document.getElementById('balance').innerText;

        // step-5: add balance
        const currentBalance = parseFloat(balance) + parseFloat(addMoneyInput);
        
        document.getElementById('balance').innerText = currentBalance;
    }
    else{
        alert("Wrong Pin number!");
    }
    
})