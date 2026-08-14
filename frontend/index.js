// alert("Hellooooo");

const users = [
    {"name" : "John",
    "gender" : "Male",
    "image" : "john.png"},

    {"name" : "Jane",
    "gender" : "female",
    "image" : "jane.png"}

]

var currIndex =0;

function toggle(){
    if(currIndex=== 0)
        currIndex = 1;
    else
        currIndex=0;

    document.getElementById("card-image").src = users[currIndex].image
    document.getElementById("card-name").innerHTML = users[currIndex].name
    document.getElementById("card-gender").innerHTML = users[currIndex].gender
}