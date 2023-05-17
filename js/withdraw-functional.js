document.getElementById('withdraw-button').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValue('withdraw-field');
    const previousWithdrawAmount = getDashboardFieldValue('previous-withdraw-field');

    const previousTotalBalance = getDashboardFieldValue('previous-total-field');
    const totalBalance = previousTotalBalance - newWithdrawAmount;
    if(newWithdrawAmount < 0 || newWithdrawAmount > previousTotalBalance || isNaN(newWithdrawAmount)){
        alert('please enter valid amount');
        return;
    }
    const totalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    setDashboardFieldValue('previous-withdraw-field', totalWithdraw);
    setDashboardFieldValue('previous-total-field', totalBalance);
})