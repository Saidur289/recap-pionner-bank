// document.getElementById('btn-add-money').addEventListener('click', function(event){
//     event.preventDefault();
//     const addMoney = document.getElementById('input-add-money').value;
//     const pinNumber = document.getElementById('input-pin-number').value;
//     if(pinNumber === '1234'){
//         const balance = document.getElementById('account-balance').innerText;
//         const balanceNumber = parseFloat(balance);
//         const addMoneyNumber = parseFloat(addMoney);
//         const newBalance = balanceNumber + addMoneyNumber;
//         document.getElementById('account-balance').innerText = newBalance;
//     }else{
//         alert('try again')
//     }
// })
//function die korle code repeat hoy na
document.getElementById('btn-add-money').addEventListener('click', function(event){
         event.preventDefault();
         const addMoney = getInputFieldValueId('input-add-money');
         const pinNumber = getInputFieldValueId('input-pin-number');
         if(isNaN(addMoney)){
            alert('failed to add money');
            return;
        }
         if(pinNumber === 1234){
            const balance = updateAmount('account-balance');
            const newBalance = balance + addMoney;
            document.getElementById('account-balance').innerText = newBalance;
            const entry = document.createElement('p');
        entry.innerText = `added: ${addMoney} Tk. New balance: ${ newBalance}`;
        document.getElementById('container').appendChild(entry);


         }else{
            alert('try again');
         }

 })
 document.getElementById('btn-cash-out-money').addEventListener('click', function(event){
    event.preventDefault();
    const cashMoney = getInputFieldValueId('input-cast-out');
    const pinNumber = getInputFieldValueId('input-cash-out-pin');
    if(isNaN(cashMoney)){
        alert('failed to cash out money');
        return;
    }
    if(pinNumber === 1234){
        const balance = updateAmount('account-balance');
        if(cashMoney>balance){
            alert('you do not have enough money for cash out');
            return;
        }
            const newBalance = balance - cashMoney;
            document.getElementById('account-balance').innerText = newBalance;
            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
            <h4 class = "text-2xl font-bold"> Cash Out </h4>
            <p>${cashMoney} withdraw.New balance ${newBalance}</p>`
            
            document.getElementById('container').appendChild(div);
        


     }else{
        alert('try again');
     }
    
 })
//  toggle button add here 
document.getElementById('show-add-money').addEventListener('click', function(){
    showSectionById('add-money-form');
})
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    showSectionById('cash-out-form')
})
document.getElementById('transaction-btn').addEventListener('click', function(){
    showSectionById('transaction-section');
})

