// get input field value function
function getInputFieldValue(inputFieldID){
    const inputField = document.getElementById(inputFieldID);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}
// get dashboard value function
function getDashboardFieldValue(dashboardFieldID){
    const dashboardField = document.getElementById(dashboardFieldID);
    const dashboardFieldValue = parseFloat(dashboardField.innerText);
    return dashboardFieldValue;
}
// set dashboard value
function setDashboardFieldValue(dashboardFieldID, amount){
    const dashboardField = document.getElementById(dashboardFieldID);
    dashboardField.innerText = amount;
}
// event handleing
document.getElementById('deposit-button').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValue('deposit-field');
    const previousDepositAmount = getDashboardFieldValue('previous-deposit-field');

    const totalDeposit = newDepositAmount + previousDepositAmount;
    setDashboardFieldValue('previous-deposit-field', totalDeposit);

    const previousTotalBalance = getDashboardFieldValue('previous-total-field');
    const totalBalance = previousTotalBalance + newDepositAmount;
    setDashboardFieldValue('previous-total-field', totalBalance);
    
});