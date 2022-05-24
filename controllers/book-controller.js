const BookModel = require("../model/Book")

const getAll = async (req,res,next)=>
{
    let bookList;
    try
    {
       bookList = await BookModel.find();
    }
    catch{(err)
        console.log(err);
    }
    if(!bookList)
    {
        return res.status.apply(404).json({message:"Not Found"});
    }
    return res.status(200).json({bookList});
}

const addBook = async(req,res,next)=>
{
    //console.log(req);
  const {name,author,description,price,avaliable} = req.body;
  let book ;
  try{
     //book = new Book({
     //    name: req.body.name
     //})
     book = new Book({
         name,
         author,
         description,
         price,
         avaliable
     });
     await book.save();
  }
  catch(err){
    console.log(err);
  }
  if(!book)
  {
    return res.status(404).json({message:"not added"})
  }
  return res.status(200).json({book});
}

exports.getAll = getAll;
exports.addBook = addBook;