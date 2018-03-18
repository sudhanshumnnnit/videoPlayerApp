const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');

const api=require('./server/routes/api');

const app=express();
app.use(express.static(path.join(__dirname,'dist')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/api',api);
app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.listen(3000,function(){
	console.log("Server is running on port 3000");
});