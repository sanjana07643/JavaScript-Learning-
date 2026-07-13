// check marks percentage and grade

let marks = 700;
let percentage = (700/1000)*100;
console.log(percentage);

if(percentage>90){
    console.log("A Grade");
}else if(percentage>= 70 && percentage<=90){
    console.log(" B Grade");
}else if(percentage>=60 && percentage<70){
    console.log("C Grade");
}else{
    console.log("D Grade");
}

