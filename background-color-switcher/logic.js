const boxes = document.querySelectorAll('.boxes');
const body = document.querySelector('body');

boxes.forEach(function(box){
    box.addEventListener('click', function(e){
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'white'
        }else{
            body.style.color = 'black'
        }
        if(e.target.id === 'gray'){
            body.style.backgroundColor = e.target.id;
        }
    });
});