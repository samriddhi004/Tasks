var express = require('express');
var router = express.Router();
const Book = require('../model/book');

/* GET home page. */
router.get('/', async function(req, res, next) {
  // const books = [
  //   {
  //     _id : 1,
  //     name:"Fermat's Engima",
  //     description:"This is a really great book",
  //     author:"Simone"
  //   },
  //   {
  //     _id : 2,
  //     name:"1984",
  //     description:"This is an awesome dystopian science fiction. A must read",
  //     author:"George Orwell"
  //   },
  //   {
  //     _id : 3,
  //     name:"Evil Under the Sun",
  //     description:"This is a great murder mystery.",
  //     author:"Agatha Christie"
  //   },
  //   {
  //     _id : 4,
  //     name:"Book 3",
  //     description:"this is book 1",
  //     author:"Author 1"
  //   },
  // ]
    try{
      const books = await Book.find();
      res.render("index",{title:"title",bookList : books})
      res.json(books);
    }catch(err){
      console.log(err);
    }
  });


router.get('/add-books', function(req, res, next) {
  res.render('add-books');
});



router.post('/save',async function(req, res, next) {
  try{
    const newBook = new Book(req.body);
    await newBook.save();
    console.log("Book Saved: ",newBook);
  }catch(err){
    console.log(err);
  }
  res.redirect("/");
});


router.post('/delete/:id',async function(req, res, next) {
  try{
   const bookId = req.params.id;
   await Book.findByIdAndDelete(new isObjectIdOrHexString(bookId));
   res.redirect("/");
  }catch(err){
   console.log(err); 
  }
  
});
 
 
module.exports = router;
