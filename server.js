const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const {check, validationResult} = require('express-validator')

const app = express();   

app.set("view engine","pug");

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.render('home', {
        name: req.body.name,
        phonenumber: req.body.phonenumber
    })  

})    

app.get('/contacts/new',(req,res) => {
    res.render('new')
})

app.post('/contacts/new', [
    check('name', 'This name must me 2+ charackters long')
    .exists()
    .isLength({min:2}),
    check('phonenumber' , 'phonenumber is not a valid')
    .isMobilePhone('am-AM')
    .isLength({min:9,})


],(req,res)=>{

    const errors =validationResult(req) 
    if(!errors.isEmpty()){
        return res.status(422).jsonp(errors.array())
    }
 
    const { name, phonenumber}  = req.body;


    res.render('home', {name, phonenumber})
})


app.listen(3000, () => {
    console.log('server is running 3000');
})