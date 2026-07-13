//check weather type (sunny, cloudy, rainy and snowy)

let weather = 38;

if(weather<10){
    console.log("Snowy");
}else if(weather>=10 && weather<=20){
    console.log("Rainy");
}else if(weather>=20 && weather<=35){
    console.log("Cloudy");
}else{
    console.log("sunny")
}

