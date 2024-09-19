//common function
function getInputFieldValueId(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
// function updateAmount(id, addNumbers){
//     const current = document.getElementById(id).innerText;
//     const currentNumber = parseFloat(current);
//     const totalNumber = currentNumber + addNumbers;
//     document.getElementById(id).innerText = totalNumber;
//     
// }
function showSectionById(id){
   document.getElementById('add-money-form').classList.add('hidden');
   document.getElementById('cash-out-form').classList.add('hidden');
   document.getElementById('transaction-section').classList.add('hidden');
//    show id 
document.getElementById(id).classList.remove('hidden');


}
function updateAmount(id){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    return currentNumber;
}