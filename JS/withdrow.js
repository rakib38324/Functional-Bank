document.getElementById('withdrow-btn').addEventListener('click',function(){
    const newWithdrowAmount = getInputValueById('withdrow-amonut');

    if(isNaN(newWithdrowAmount)){
        alert('Please enter your amount')
        return;
    }
   
    const previousWithdrowAmount = getElementValueById('total-withdrow')
    const priviousBanktotalAmount = getElementValueById('total-balance');
    if(priviousBanktotalAmount < newWithdrowAmount){
        alert("Your amount is not valid");
        return;
    }
    const newtotalWithdrowAmount = previousWithdrowAmount + newWithdrowAmount;
    setTextElementValue('total-withdrow',newtotalWithdrowAmount );

    
    
    
    const newBalancetotal = priviousBanktotalAmount - newWithdrowAmount;
    setTextElementValue('total-balance',newBalancetotal);

})