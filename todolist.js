let testList=prompt("What would you like to do?");
let list=[];
while(testList.toLowerCase()!=="quit"){
    if(testList==="delete"){
       let initialPosition=parseInt(prompt("which position you want to remove"));
       if(!Number.isNaN(initialPosition)){
        console.log(`the position you want to remove is${list[initialPosition]}`);
        let deletedItem=list.splice(initialPosition,1);
        console.log(`OK!!! The deleted item is ${list.splice}`);
        console.log("Updated List: ",list);
        else {
            console.log("invalid index");
        }
    }
    else if(testList==='list'){
        console.log('********');
        for(let i=0;i<=list.length;i++){
            console.log=(`${i}:${list[i]}`);
        }
        console.log('********');
    }
    else if(testList==='new'){
let newTask =prompt("enter the new task");
list.push(newTask);
console.log(`${newTask} has been added to the list`);
    }
    else{
        console.log("Invalid input! Please try again.");
    }
    testList=prompt("What would you like to do?");
}
console.log("Goodbye!!! your final list is: ",list);