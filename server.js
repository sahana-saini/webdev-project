const express = require('express')

const app = express()

app.use(express.json())

const port = process.env.PORT || 8080

const users = [
    {
        "id": "1",
        "name": "Bernardo Urías",
        "gender" : "male",
        "image" : "https://randomuser.me/api/portraits/men/53.jpg"
    },
    {
        "id": "2",
        "name": "Lada Pantić",
        "gender" : "female",
        "image" : "https://randomuser.me/api/portraits/women/21.jpg"
    },
    {
        "id": "3",
        "name": "Eemil Kivela",
        "gender" : "male",
        "image" : "https://randomuser.me/api/portraits/men/72.jpg"
    },
    {
        "id": "4",
        "name": "Nawal Fiskum",
        "gender" : "female",
        "image" : "https://randomuser.me/api/portraits/women/53.jpg"
    },
    {
        "id": "5",
        "name": "Barcino Monteiro",
        "gender" : "male",
        "image" : "https://randomuser.me/api/portraits/men/0.jpg"
    }
]

//get all users
app.get("/api/users",function(req,res){
    res.status(200).json(users);
})

//get users by id
function getUserByid(uid){
    for(var i=0;i<users.length;i++){
        if(uid==users[i].id) return i;
    }

    return -1;
}



app.get("/api/users/:id",function(req,res){
    var uid = req.params.id;
    var userid = getUserByid(uid);

    if(userid== -1){
        res.status(404).json({"message":"user not found"})
    }
    res.status(200).json(users[userid])
})

//get random user
app.get("/api/randomuser",function(req,res){
    var n = users.length;
    const randomId = Math.floor(Math.random()*n);
    res.status(200).json(users[randomId])
})


//adding a new user
var newuserId = users.length+1;

app.post("/api/users",function(req,res){
    let user = req.body;
    user.id = newuserId;
    newuserId++;
    users.push(user);
    res.status(200).json({"Message":"added sucessfully"});
})

//update user details
app.put("/api/users/:id",function(req,res){
    var userid = getUserByid(req.params.id);

    if(userid== -1)
        return res.json({"message":"user not found"})

        if(req.body.name)
            users[userid].name = req.body.name;

        if(req.body.gender)
            users[userid].gender = req.body.name;

        if(req.body.image)
            users[userid].image = req.body.image;

        return res.status(200).json({"message": "user details updated" ,"user": users[userid]})
})

//deleting

app.delete("/api/users/:id",function(req,res){
    var userid = getUserByid(req.params.id);
    if(userid== -1)
        return res.json({"message": "user not found"})

    users,splice(userid,1);

    res.status(200).json({"message":"user deleted sucessfully!"})
})

app.use(express.static("frontend"))

app.listen(port,function(){
    console.log("my app is running at http://localhost:"+port)
})
