
// handel deposit button event
document.getElementById('deposite-button').addEventListener('click', function(){
    // get deposit amount
    const depositField=document.getElementById('deposit-input');
    const depositAmount=depositField.value
    // set deposit amount
    const depositTotal=document.getElementById('deposit-total')
    const previousDepositAmount=depositTotal.innerText
    depositTotal.innerText=parseFloat(previousDepositAmount) + parseFloat(depositAmount)
    // update the balance amount
    const balanceTotal = document.getElementById('balance-total')
    balanceTotal.innerText=parseFloat(balanceTotal.innerText) + parseFloat(depositAmount)
    // clear the input value
    depositField.value = ''
})
document.getElementById('withdraw-button').addEventListener('click',function(){
    // get withdraw amount
    const withdrawField=document.getElementById('withdraw-input');
    const withdrawAmount=withdrawField.value
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