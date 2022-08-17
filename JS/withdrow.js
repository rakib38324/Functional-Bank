document.getElementById('withdrow-btn').addEventListener('click',function(){
    const newWithdrowAmount = getInputValueById('withdrow-amonut');
    if(isNaN){
        alert("Please enter your Amount");
        return;
    }
    const previousWithdrowAmount = getElementValueById('total-withdrow')
    
    const newtotalWithdrowAmount = previousWithdrowAmount + newWithdrowAmount;
    setTextElementValue('total-withdrow',newtotalWithdrowAmount );

    const priviousBanktotalAmount = getElementValueById('total-balance');
    const newBalancetotal = priviousBanktotalAmount - newWithdrowAmount;
    setTextElementValue('total-balance',newBalancetotal);

})