const input=document.querySelector('#name');
const form=document.querySelector('#form');
const list=document.querySelector('#list');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const name=input.value;
    const newLi= document.createElement('LI');
    newLi.innerText=name;
  list.append(newLi);
  input.value="";
});