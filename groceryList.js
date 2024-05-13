const form = document.querySelector('form');
const quantity = document.querySelector('#qty');
const product = document.querySelector('#product');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const quantityy= quantity.value;
    const products= product.value;
    const newList=document.createElement('LI');
    newList.innerText=`${quantityy} ${products}`;
    list.appendChild(newList);
 form.reset();
})