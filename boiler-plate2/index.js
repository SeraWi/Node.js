const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 5000


//mongo db에 연결
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://SeraWi:Sera2357pbw!@boilerplate.h0hfa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser : true, useUnifiedTopology: true}
).then(()=>console.log('MongoDB connected...'))
.catch(err=>console.log(err))

app.get('/', (req,res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


//useCreateIndex:true, useFindAndModify : false 