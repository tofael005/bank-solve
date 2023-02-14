// Deposit Function Count Now this one 
// Step- 1
document.getElementById('btn-deposit').addEventListener('click', function(){
// Step- 2
    const depositField = document.getElementById('deposit-filed');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
// Step- 3
    depositField.value = '';

// Step- 4
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalElementString = depositTotalElement.innerText;
    const depositTotalAmount = parseFloat(depositTotalElementString);

// Step- 5
    const newDepositeTotal = depositTotalAmount + newDepositAmount;
    depositTotalElement.innerText = newDepositeTotal;

// Step- 6
    const balanceTotalElement = document.getElementById('balance-total')
    const previusBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previusBalanceTotalString);

// Step- 7
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})


/*---------------------------------- 
Withdraw function count now this one
-----------------------------------*/
// Step- 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
// Step- 2
    const withdrawFiled = document.getElementById('withdraw-field')
    const withdrawTotalElementString = withdrawFiled.innerText;
    const newWithdrawAmount = parseFloat(withdrawTotalElementString);

// Step- 3
    withdrawFiled.value = '';

// Step- 4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalString);

    // Step- 5
    const newWithdrawTotal = withdrawTotalAmount + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

// Step- 6
    const balanceTotalElement = document.getElementById('balance-total');
    const newBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(newBalanceTotalString);

// Step- 7
    const newBalance = previousBalanceTotalAmount - withdrawTotalAmount;
    balanceTotalElement.innerText = newBalance;
})