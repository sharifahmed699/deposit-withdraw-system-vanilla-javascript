
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
function updateBalance(amount,isAdd){
    const balanceTotal = document.getElementById('balance-total')
    if(isAdd == true){
        balanceTotal.innerText=parseFloat(balanceTotal.innerText) + parseFloat(amount)
    }
    else{
        balanceTotal.innerText=parseFloat(balanceTotal.innerText) - parseFloat(amount)
    }
    
}
// handel deposit button event
document.getElementById('deposite-button').addEventListener('click', function(){
    depositAmount=getInputValue('deposit-input')

    depositTotal = updateAmount('deposit-total', depositAmount)

    updateBalance(depositAmount, true)
   
})
document.getElementById('withdraw-button').addEventListener('click',function(){
    withdrawAmount=getInputValue('withdraw-input')
    
    withdrawTotal  = updateAmount('withdraw-total', withdrawAmount)

    updateBalance(withdrawAmount, false)
})