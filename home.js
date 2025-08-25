// console.log("Connected");
// reusable functions
function getInputValue(id){
    const inputElement = document.getElementById(id);
    const inputElementValue = inputElement.value;
    return inputElementValue;
}

function getInputValueNumber(id){
    const inputElement = document.getElementById(id);
    const inputElementValue = inputElement.value;
    const inputElementValueNumber = parseInt(inputElementValue);
    return inputElementValueNumber;
}

function getInnertext(id){
    const tagElement = document.getElementById(id);
    const innertext = tagElement.innerText;
    return innertext;
}

function getInnertextNumber(id){
    const tagElement = document.getElementById(id);
    const innertext = tagElement.innerText;
    const innertextNumber = parseInt(innertext);
    return innertextNumber;
}

function setInnertext(id,value){
    const tagElement = document.getElementById(id);
    let innertext = tagElement.innerText;
    innertext = value;
    return innertext;
}
// add money
document.getElementById('add-money-btn').addEventListener('click',function(event){
    // console.log('btn clicked');
 const addAmount = getInputValueNumber('add-amount');
   if(addAmount <= 0){
    alert("Invalid amount");
    return;
 }
    // const addAmount = parseInt(document.getElementById('add-amount').value);
    // console.log((addAmount));
    const balance = getInnertextNumber('balance');
    // const balance = parseInt(document.getElementById('balance').innerText);
     console.log(balance);
    const accountNumber = getInputValue('account-number');
     console.log(accountNumber);
    if(accountNumber.length !== 11){
        alert("Invalid account number");
        return;
    }
    const pinNumber = getInputValueNumber('pin-number');
    console.log(pinNumber);
    
    if(pinNumber !== 1234){
        alert("Incorrect pin");
        return;
    }
    const finalAmount = addAmount + balance;
    // const final = setInnertext("balance", finalAmount);
    // console.log(finalAmount);
    document.getElementById('balance').innerText = finalAmount;
    document.getElementById('add-amount').value = '';
    document.getElementById('account-number').value = '';
    document.getElementById('pin-number').value = '';
    
})

// cash out
document.getElementById("cash-out-btn").addEventListener('click', function(){
    const cashOutAmount = getInputValueNumber("cash-out-amount");
    const pin = getInputValueNumber("pin");
    const balance = getInnertextNumber('balance');
    const agentNumber = getInputValue("agent-number");
    // console.log(cashOutAmount, pin, balance);
    if(agentNumber.length !== 11){
        alert('Please provide valid agent number');
        return;
    }
    if(cashOutAmount > balance || cashOutAmount <= 0){
        alert('Invalid request');
        return;
    }
    if(pin !== 1234){
        alert('Incorrect pin');
        return;
    }
    const afterCashOutAmount = balance - cashOutAmount;
    document.getElementById('balance').innerText = afterCashOutAmount;
    document.getElementById('pin').value ='';
    document.getElementById('cash-out-amount').value = '';
    document.getElementById('agent-number').value = '';
    
})

// toggling
// reusable function
function toggle(id){
    const togglingOptions = document.getElementsByClassName('option');
    for(const togglingOption of togglingOptions){
        togglingOption.style.display = "none";
    }
     document.getElementById(id).style.display = "block";
}

document.getElementById("add-money").addEventListener('click', function(){
   toggle("add-money-parent");
})
document.getElementById("cash-out").addEventListener('click', function(){
    toggle("cash-out-parent");  
})
document.getElementById("transfer-money").addEventListener('click', function(){
   toggle("transfer-money-parent");
})
document.getElementById("bonus").addEventListener('click', function(){
   toggle("get-bonus-parent");
})
document.getElementById("pay-bill").addEventListener('click', function(){
   toggle("pay-bill-parent");
})
document.getElementById("transactions").addEventListener('click', function(){
   toggle("transactions-parent");
})

