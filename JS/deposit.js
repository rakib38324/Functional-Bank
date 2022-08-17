
document.getElementById('deposit-btn').addEventListener('click',function(){

    const newDepositAmount = getInputValueById('deposit-amount');

    if(isNaN(newDepositAmount)){
        alert('Please enter your amount')
        return;
    }
    
    const priviousDepostiTotal = getElementValueById('deposit-total')
    const newDepositAmountTotal = priviousDepostiTotal + newDepositAmount;
    setTextElementValue("deposit-total",newDepositAmountTotal);

    const priviousBanktotalAmount = getElementValueById('total-balance')
    const newBalancetotal = priviousBanktotalAmount + newDepositAmount;
    setTextElementValue('total-balance',newBalancetotal);
})