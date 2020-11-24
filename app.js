const express = require('express');
const Blog = require('./models/blog');

require('./db/mongoose')
const blogRouter = require('./routers/blog')

const port = process.env.PORT

// express app
const app = express();

// listen for requests
app.listen(port, () => {
  console.log(`Server listening to port ${port}`)
});

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies

app.get('/', async (req, res) => {
  try{
    const blogs =await Blog.find({})
    res.render('index', { blogs: blogs, titulo: 'Índice' });
  }catch (e){

  res.render('index', { blogs: [], titulo: 'Índice' });
  }
});


app.get('/form', (req, res) => {
  res.render('form.ejs', { titulo: 'Form' });
});



app.post('/form', (req,res) => {
  res.redirect(307, './')
})

app.use(express.json())
app.use('/api', blogRouter)



// 404 page
app.use((req, res) => {
  res.status(404).render('404', { titulo: '404' });
});

