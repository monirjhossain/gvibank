// 1. add event handler with the withdraw button
// 2. get the withdraw amount from the withdraw input field
// 2.5. also make sure the convert input into integer number using by parsFloat.
// 3. Get previous withdraw Total.
// 4. Calculate total withdraw amount
// 5. set total withdraw amount
// 6  get the previous balance total
// 7  Calculate new balance total
// 8  Set the new balance total

// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
// step-2:
    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);

// step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawElementString = withdrawTotalElement.innerText;
    const previourWithdrawTotal = parseFloat(withdrawElementString);

// step-4:
    const currentWithdrawTotal = previourWithdrawTotal +  newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;



// Step-6:
    const balanceTotalElement = document.getElementById('balance-total');
    const PreviousbalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(PreviousbalanceTotalString);

// Step-7:
    const newBalanceTotal = previousBalanceTotal + newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    // Step-3: Clear data field
    withdrawField.value = '';
});