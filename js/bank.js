
function getInputValue(inputId){
    const inputField=document.getElementById(inputId);
    const Amount=inputField.value
     // clear the input value
     inputField.value = ''
    return Amount
}
// handel deposit button event
document.getElementById('deposite-button').addEventListener('click', function(){
    depositAmount=getInputValue('deposit-input')
    // set deposit amount
    const depositTotal=document.getElementById('deposit-total')
    const previousDepositAmount=depositTotal.innerText
    depositTotal.innerText=parseFloat(previousDepositAmount) + parseFloat(depositAmount)
    // update the balance amount
    const balanceTotal = document.getElementById('balance-total')
    balanceTotal.innerText=parseFloat(balanceTotal.innerText) + parseFloat(depositAmount)
   
})
document.getElementById('withdraw-button').addEventListener('click',function(){
    withdrawAmount=getInputValue('withdraw-input')
    // set deposit amount
    const withdrawTotal=document.getElementById('withdraw-total')
    const previousWithdrawAmount=withdrawTotal.innerText
    withdrawTotal.innerText=parseFloat(previousWithdrawAmount) + parseFloat(withdrawAmount)

    // update the balance amount
    const balanceTotal = document.getElementById('balance-total')
    balanceTotal.innerText=parseFloat(balanceTotal.innerText) - parseFloat(withdrawAmount)

    // clear the input value
    withdrawField.value = ''
})