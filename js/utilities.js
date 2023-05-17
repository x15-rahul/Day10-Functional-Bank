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