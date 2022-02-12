document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');

    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);


    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);

    depositTotal.innerText = depositTotalAmount + newDepositAmount;


    // clear input fild
})