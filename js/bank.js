
function getInputValue(inputId){
    const inputField=document.getElementById(inputId);
    const amount=inputField.value
     // clear the input value
     inputField.value = ''
    return amount
}
function updateAmount(fieldId, amount){
    const total=document.getElementById(fieldId)
    const previousAmount=total.innerText
    total.innerText=parseFloat(previousAmount) + parseFloat(amount)
    return total

}
// handel deposit button event
document.getElementById('deposite-button').addEventListener('click', function(){
    depositAmount=getInputValue('deposit-input')

    depositTotal = updateAmount('deposit-total', depositAmount)
    // update the balance amount
    const balanceTotal = document.getElementById('balance-total')
    balanceTotal.innerText=parseFloat(balanceTotal.innerText) + parseFloat(depositAmount)
   
})
document.getElementById('withdraw-button').addEventListener('click',function(){
    withdrawAmount=getInputValue('withdraw-input')
    
    withdrawTotal  = updateAmount('withdraw-total', withdrawAmount)

    // update the balance amount
    const balanceTotal = document.getElementById('balance-total')
    balanceTotal.innerText=parseFloat(balanceTotal.innerText) - parseFloat(withdrawAmount)

    // clear the input value
    withdrawField.value = ''
})