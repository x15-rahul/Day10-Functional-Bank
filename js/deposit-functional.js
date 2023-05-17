// event handleing
document.getElementById('deposit-button').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValue('deposit-field');
    const previousDepositAmount = getDashboardFieldValue('previous-deposit-field');

    if(newDepositAmount < 0 || isNaN(newDepositAmount)){
        alert('please enter valid amount');
        return;
    }
    const totalDeposit = newDepositAmount + previousDepositAmount;
    setDashboardFieldValue('previous-deposit-field', totalDeposit);

    const previousTotalBalance = getDashboardFieldValue('previous-total-field');
    const totalBalance = previousTotalBalance + newDepositAmount;
    setDashboardFieldValue('previous-total-field', totalBalance);
    
});