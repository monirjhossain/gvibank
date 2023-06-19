document.getElementById('btn-diposite').addEventListener('click', function(){
    const dipositField = document.getElementById('user-diposite');
    const NewDipositAmountString = dipositField.value;
    const NewDipositAmount = parseFloat(NewDipositAmountString);
    // step-1: show the value in diposit section

    //Diposit Total
    const dipositTotlaAmount = document.getElementById('diposit-total');
    const PriviousDipositTotalString = dipositTotlaAmount.innerText;
    const PreviousDipositTotal = parseFloat(PriviousDipositTotalString);
    const Total = NewDipositAmount + PreviousDipositTotal;
    dipositTotlaAmount.innerText = Total;

    //Balance Total
    const balanceTotalElement = document.getElementById('balance-total');
    const PreviousbalanceTotalString =  balanceTotalElement.innerText;
    const newBanlance = parseFloat(PreviousbalanceTotalString);
    const BalanceTotal = newBanlance + NewDipositAmount;

    balanceTotalElement.innerText = BalanceTotal;


    // Step-3: Clear data field
    dipositField.value = '';
    
});