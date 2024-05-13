const btn=document.querySelector('#V2')
btn.onclick=function(){
    console.log("haha!!You clicked me")
    console.log("Fuck you mister")
}
scream=function(){
    console.log("stop!!!touching meeee")
    console.log("EWWWWWWWWWWWWWWWW")
}
btn.onmouseenter= scream;
const bt3=document.querySelector('#V3');
bt3.addEventListener('click',()=>{
    alert('clicked')
})
bt3.addEventListener('click',scream,{once:true});