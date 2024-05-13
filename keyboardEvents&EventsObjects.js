const input=document.querySelector('input').addEventListener('keydown',function(){
    console.log("keydown");
});
window.addEventListener('keydown',function(E){
    switch (E.code){
        case "ArrowUp":
            console.log("UP");
            break;
            case "ArrowDown":
            console.log("DOWN");
            break;case "ArrowRight":
            console.log("RIGHT");
            break;case "ArrowLeft":
            console.log("LEFT");
            break;
            default:
                console.log("IGNORED");
    }
})