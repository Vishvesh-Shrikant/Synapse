const express=require("express")
const PORT=4041
const app = express();
app.use(express.urlencoded())

let lowercase = "abcdefghijklmnopqrstuvwxyz", uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers="0123456789", specialCharacter="!@#$%^&*()_+"


let pwdetails={
    length: 8,
    numbers: false,
    lowercase:false,
    uppercase:false,
    specialCharacter:false
}

const randomPw=()=>{
    let pass = ""
    let str=" "
    if(pwdetails.numbers=='true')
        str+=numbers
    if(pwdetails.lowercase=='true')
        str+=lowercase
    if(pwdetails.uppercase=='true')
        str+=uppercase
    if(pwdetails.specialCharacter=='true')
        str+=specialCharacter

    for(let i=1;i<=pwdetails.length;i++)
    {
        const char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }
    return pass
}


app.post('/getPassword', (req, res)=>{
    try{
        if( !req.body || !req.body.length || !req.body.numbers || !req.body.lowercase || !req.body.uppercase || !req.body.specialCharacter)
        {
            res.status(404).json({msg:" ENTER ALL ELEMENTS REQUIRED!"})
        }
        else
        {
            pwdetails.length=Number(req.body.length)
            pwdetails.lowercase=req.body.lowercase
            pwdetails.numbers=req.body.numbers 
            pwdetails.uppercase=req.body.uppercase
            pwdetails.specialCharacter=req.body.specialCharacter

            console.log(pwdetails)
            if(pwdetails.lowercase=='false' && pwdetails.numbers=='false' && pwdetails.uppercase=='false' &&  pwdetails.specialCharacter=='false'){
                res.status(400).json({msg:"ATLEAST ONE PARAMETER HAS TO BE TRUE"})
            }
            res.status(201).json({msg:"Password parameters accepted"})
        }
    }
    catch(err){
        console.log("Error:", err)
    }
})

app.get('/getPassword', (req, res)=>{
    try{
        res.status(200).json({msg:"Randomized password ", password: randomPw()}) 
    }
    catch(err)
    {
        console.log("Error:", err)
    }
})


app.listen(PORT, ()=>{
    console.log(`Server Initialised at port ${PORT}`)
})