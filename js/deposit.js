document.getElementById('deposit-button').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    depositField.value = '';

    const previousDepositField = document.getElementById('previous-deposit-field');
    const previousDepositAmount = parseFloat(previousDepositField.innerText);

    const totalDepositAmount = previousDepositAmount + newDepositAmount;
    previousDepositField.innerText = totalDepositAmount;

    const previousTotalBalanceField = document.getElementById('previous-total-field');
    const previousTotalBalance = parseFloat(previousTotalBalanceField.innerText);

    const totalBalance = previousTotalBalance + newDepositAmount;
    previousTotalBalanceField.innerText = totalBalance;
})