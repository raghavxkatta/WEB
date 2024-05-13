const button=document.querySelector('button');
button.addEventListener('click',function(){
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    const newColor=`rgb(${r},${g},${b})`;
    document.body.style.backgroundColor=newColor;
 const h1=document.querySelector('h1')
 h1.innerText=newColor;
 const sum = r + g + b;
 if (sum < 50) {
     h1.style.backgroundColor = 'white';
     button.style.backgroundColor = 'white';
 }
})