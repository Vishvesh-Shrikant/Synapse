const express=require("express")
const mongoose= require("mongoose")

const app=express()
const PORT= 5001;
app.use(express.json())

//connecting MongoDB
const mongoConnect=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017")
        console.log("MongoDB connected successfully...")
    }
    catch(err)
    {
        console.log("Mongo error:", err)
    }
}
mongoConnect()
const bookSchema= new mongoose.Schema({
    id:{type:String, required:true},
    name:{type:String, required:true},
    genre:{type:String, required:true},
    author:{type:String, required:true},
    availability:{type:String, required:true}
})
const Books= mongoose.model("Library", bookSchema)

//RESTful API for CRUD 
app.get('/showBooks', async (req, res)=>{
    const books= await Books.find({})
    res.status(200).send(books)
})

app.post('/getBooks', async(req, res)=>{
    const body = req.body 
    if(!body || !body.id || !body.name || !body.genre ||!body.author || !body.availability)
    {
        //message to show there was a client error
        return res.status(400).json({msg:"All fiels are required"})
    }
    await Books.create({
        id:body.id,
        name:body.name,
        genre:body.genre,
        author: body.author,
        availability:body.availability
    })
    return res.status(201).json({msg: "item created"})
})

app.delete('/getBooks/:id', async(req,res)=>{
    const id= req.params.id
    const result = await Books.findOneAndDelete({id:id})
    if(result)
        res.status(200).json({msg: "Book deleted succesfully"})
    else
        res.status(404).json({error: "Item not found"})
})


app.put('/getBooks/:id', async(req, res)=>{
    const id=String(req.params.id)
    const body=req.body
    const itemExists= await Books.findOne({id:id})
    if(itemExists)
    {
        if(body.availability)
        {
            await Books.findOneAndUpdate({id:id}, {$set:{availability:body.availability}})
        }
        if(body.name)
        {
            await Books.findOneAndUpdate({id:id}, {$set:{name:body.name}})
        }
        if(body.author)
        {
            await Books.findOneAndUpdate({id:id}, {$set:{author:body.author}})
        }
        if(body.genre)
        {
            await Books.findOneAndUpdate({id:id}, {$set:{genre:body.genre}})
        }
        res.status(200).json({msg: "data has been updated "})
    }
    else
        res.status(404).json({error: "ITEM NOT FOUND"})
})

//http://localhost:5001/showBooks
//http://localhost:5001/getBooks

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})