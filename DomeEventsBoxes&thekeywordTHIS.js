const buttons= document.querySelectorAll('button');
for(let button of buttons){
    button.addEventListener('click',function(){
        console.log("clicked");
        button.style.backgroundColor=makeRandColor();
        button.style.color=makeRandColor();
    })
}

const h1s= document.querySelectorAll('h1');
for(let h1 of h1s){
    h1.addEventListener('click',function(){
        console.log("clicked");
        this.style.backgroundColor=makeRandColor();
        this.style.color=makeRandColor();
    })
}
