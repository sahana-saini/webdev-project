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

function random(){
    //url: https://randomuser.me/api

    fetch('https://randomuser.me/api')
        .then(function(response){
        return response.json();
        })
        .then(function(data){
           console.log(data);
           var detail = data.results[0];
           document.getElementById("card-image").src = detail.picture.large;
           document.getElementById("card-gender").innerHTML = detail.gender;
           
           var fullName = detail.name.title+"."+ detail.name.first+" "+ detail.name.last

           document.getElementById("card-name").innerHTML = fullName

        })
}