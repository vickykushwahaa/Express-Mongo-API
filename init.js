const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
.then(()=>{
    console.log("connected successfully");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allChats = [
    {
        from:"vicky",
        to : "satyam",
        msg: "send me your sheets",
        created_at:new Date()
    },
    {
        from:"satyam",
        to : "sonu",
        msg: "send me your pdf",
        created_at:new Date()
    },
    {
        from:"rahul",
        to : "sonu",
        msg: "send me exam sheets",
        created_at:new Date()
    },
    {
        from:"vicky",
        to : "rahul",
        msg: "paste your exam sheets",
        created_at:new Date()
    }
]
Chat.insertMany(allChats);