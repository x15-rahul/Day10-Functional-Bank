document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    withdrawField.value = '';

    const previousWithdrawField = document.getElementById('previous-withdraw-field');
    const previousWithdrawAmount = parseFloat(previousWithdrawField.innerText);

    const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    previousWithdrawField.innerText = totalWithdrawAmount;

    const previousTotalBalanceField = document.getElementById('previous-total-field');
    const previousTotalBalance = parseFloat(previousTotalBalanceField.innerText);

    const totalBalance = previousTotalBalance - newWithdrawAmount;
    previousTotalBalanceField.innerText = totalBalance;
})