const express = require('express');
const PORT = 9899
const app = express();

app.use(express.urlencoded());
app.set("view engine", "ejs");

    const todolist = [ ];3

        app.get('/',(req,res) => {
        res.render('todolist',{
            todolist:todolist
            })
});

// --------------INSERT DATA IN TABLE------------------------------------
app.post("/insertRecord",async(req , res) =>
{
    console.log(req.body)

    var tnm=req.body.tnm
    var desc=req.body.desc
    

    const todo ={
        // id:Math.round(Math.random()*1000),
        tnm :tnm,
        desc :desc,
       
    }
    todolist.push(todo);
    res.redirect("/")
})


//------PORT RUN----------
app.listen(PORT, ()=>{
    console.log(`server is runnig............${PORT}`)
})