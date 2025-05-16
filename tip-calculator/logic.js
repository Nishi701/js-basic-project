function calculate(){
    const bill = parseInt(document.getElementById('billAmount').value);
    const tip = parseInt(document.getElementById('tipPercent').value);
    const person = parseInt(document.getElementById('person').value);
    const result = document.getElementById('result');
    if( isNaN(bill) || isNaN(tip) || isNaN(person) || bill <= 0 || tip < 0 || person <= 0){
        result.innerHTML = 'please enter a valid value';
        return;
    }
    const tipAmount = (bill * tip)/100;
    const totalAmount = bill + tipAmount;
    const perPerson = totalAmount/person;
     
    result.innerHTML = `
    Total Amount : ${totalAmount.toFixed(2)} <br>
    Tip Amount : ${tipAmount.toFixed(2)}<br>
    Per Person Price : ${perPerson.toFixed(2)}
    `;
}

function reset(){
    document.getElementById('billAmount').value = '';
    document.getElementById('tipPercent').value = '';
    document.getElementById('person').value = '';
    document.getElementById('result') = '';
}