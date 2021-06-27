const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000
const emailApi = require('./emailapi')



app.use(express.json({ extended: false }))




app.use(express.json());
app.use('/emailApi', emailApi)
var urlencoded_body_parser = express.urlencoded({
    extended: true
});
app.use(urlencoded_body_parser);

// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public/ine'))
// })
app.get('/', (req, res) => {
        res.send('<h1>Hello World</h1>');

    })
    // UserApi is Working with get

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
})