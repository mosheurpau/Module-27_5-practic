document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');

    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);


    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);

    depositTotal.innerText = depositTotalAmount + newDepositAmount;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    balanceTotal.innerText = newDepositAmount + balanceTotalAmount;


    // clear input fild
    depositInput.value = '';
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = withdrawTotalAmount + withdrawInputAmount;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    balanceTotal.innerText = balanceTotalAmount - withdrawInputAmount;


    // clear input filed 
    withdrawInput.value = '';
});