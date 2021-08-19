
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
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total')
    balanceText = balanceTotal.innerText
    previousbalance = parseFloat(balanceText)
    return previousbalance
}
function updateBalance(amount,isAdd){
    const balanceTotal = document.getElementById('balance-total')
    const  previousbalance = getCurrentBalance()
    if(isAdd == true){
        balanceTotal.innerText=previousbalance +  parseFloat(amount)
    }
    else{
        balanceTotal.innerText=previousbalance-  parseFloat(amount)
    }
    
}
// handel deposit button event
document.getElementById('deposite-button').addEventListener('click', function(){
   const depositAmount=getInputValue('deposit-input')
   if(depositAmount > 0){
    updateAmount('deposit-total', depositAmount)
    updateBalance(depositAmount, true)
   }
})
document.getElementById('withdraw-button').addEventListener('click',function(){
   const withdrawAmount=getInputValue('withdraw-input')
   const currentbalance = getCurrentBalance()
   if(withdrawAmount > 0  && withdrawAmount < currentbalance){
    withdrawTotal  = updateAmount('withdraw-total', withdrawAmount)
    updateBalance(withdrawAmount, false)
   }
})