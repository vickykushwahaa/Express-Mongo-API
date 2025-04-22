const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.use(express.urlencoded({exteneded:true}));
app.use(methodOverride("-method"));

main()
.then(()=>{
    console.log("connected successfully");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get('/', (req,res)=>{
    res.send("Root is working fine");
});

//Chat Page
app.get("/chats",async(req, res)=>{
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats});
});

//New Page
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

//Create Page
app.post("/chats",(req, res)=>{
    let{ from, to, msg} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    newChat.save()
    .then((res)=>{console.log(res)}).catch((err)=>{err})
    res.redirect("/chats")
});

//Edit page
app.get("/chats/:id/edit",async(req, res)=>{
    let{id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

//Update page
app.put("/chats/:id", async(req, res)=>{
    let {id} = req.params;
    let{newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id,{msg: newMsg},{runValidators:true});
    console.log(updatedChat);
    res.redirect("/chats");
});

app.listen(8080,()=>{
    console.log("server is running at 8080");
});