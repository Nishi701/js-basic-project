const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid weight ${weight}`;
    }else{
        const bmiformula = (weight / ((height * height)/10000)).toFixed(2);
        if(bmiformula < 18.5){
            result.innerHTML = `your BMI range is under weight : ${bmiformula}`;
        }if(bmiformula > 18.5 && bmiformula < 24.9){
            result.innerHTML = `your are in Healthy range in BMI : ${bmiformula}`;
        }if(bmiformula > 25 && bmiformula < 29.9){
            result.innerHTML = `your BMI range is over weight : ${bmiformula}`;
        }
    }
});