const res = require("express/lib/response");

window.onload = () => {
    document.querySelector('form').onsubmit=(event)=>{
        event.preventDefault();

        fetch("localhost:3000/contacts/new",{
            method:"post",
            Headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name:document.querySelector("name").value,
                phonenumber:document.querySelector("phonenumber").value
            })

        

        })
        .then((res) => {
            
            const newdiv = document.querySelector('div');
            newdiv.className += "contact"
            newdiv.name=req.body.name
            newdiv.phonenumber=req.body.phonenumber
        })
        
    }
}




