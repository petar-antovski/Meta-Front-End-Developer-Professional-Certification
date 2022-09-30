if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    console.log("The car is not green, orange, or red");
}

switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        console.log('The light is not green, orange, or red');
        break;
}

var age = 10;
if(age >= 65){
    console.log("You get your income from your pension");
}
else if(age < 65 && age >= 18){
    console.log("Each month you get a salary");
}
else if(age < 18){
    console.log("You get an allowance");
}
else{
    console.log("The value of the age variable is not numerical");
}

var day = "Sunday";
switch(day){
    case 'Monday':
        console.log("Do something");
        break;
    case 'Tuesday':
        console.log("Do something");
        break;
    case 'Wednesday':
        console.log("Do something");
        break;
    case 'Thursday':
        console.log("Do something");
        break;
    case 'Friday':
        console.log("Do something");
        break;
    case 'Saturday':
        console.log("Do something");
        break;
    case 'Sunday':
        console.log("Do something");
        break;
    default:
        console.log('There is no such day');
}