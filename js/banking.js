function inputToAmount(inputFiled) {
    const inputField = document.getElementById(inputFiled);

    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    // clear input filed 
    inputField.value = '';
    return inputAmount;
}

function getAndupdateTotal(commonTotal, inputTotal) {
    const withdrawTotal = document.getElementById(commonTotal);
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmount + inputTotal;
}

function getTotalBalance(currentBalance) {
    const balanceTotal = document.getElementById(currentBalance);
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
}


function updateBalanceTotal(balance, newDepositAmount, isAdd) {
    debugger;
    const balanceTotal = document.getElementById(balance);
    /* const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText); */
    const balanceTotalAmount = getTotalBalance(balance);
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmount + newDepositAmount;
    }
    else {
        balanceTotal.innerText = balanceTotalAmount - newDepositAmount;
    }
}


document.getElementById('deposit-btn').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');

    // const newDepositText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositText);


    // get and update total 
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalAmount + newDepositAmount; */


    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = newDepositAmount + balanceTotalAmount; */
    const newDepositAmount = inputToAmount('deposit-input');

    if (newDepositAmount > 0) {
        getAndupdateTotal('deposit-total', newDepositAmount);
        updateBalanceTotal('balance-total', newDepositAmount, true)
    }

    /* 
        // clear input fild
        depositInput.value = ''; */
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText); */


    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawInputAmount; */


    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    balanceTotal.innerText = balanceTotalAmount - withdrawInputAmount; */
    const withdrawInputAmount = inputToAmount('withdraw-input');
    const currentTotalBalance = getTotalBalance('balance-total');
    if (withdrawInputAmount > 0 && currentTotalBalance > withdrawInputAmount) {
        getAndupdateTotal('withdraw-total', withdrawInputAmount);
        updateBalanceTotal('balance-total', withdrawInputAmount, false);
    }


    /* // clear input filed 
    withdrawInput.value = ''; */
});