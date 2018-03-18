const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Video=require('../models/video');
const db="mongodb://usersudhanshu:pwsudhanshu@ds237707.mlab.com:37707/vp";
mongoose.Promise=global.Promise; 

mongoose.connect(db,function(err){
    if(err){
        console.log("Error!"+err);
    }
});
router.get('/',function(req,res){
	res.send('api works');
});

router.get('/videos',function(req,res){
    console.log("got the videos request");
    Video.find({}).exec(function(err,doc){
        if(err){
            console.log("Error receiving videos");
        }else{
            res.json(doc);
        }

    })
});

router.get('/videos/:id',function(req,res){
    console.log("got the video by id request");
    Video.findById(req.params.id).exec(function(err,doc){
        if(err){
            console.log("Error receiving video");
        }else{
            res.json(doc);
        }
    });
});

router.post('/video',function(req,res){
    console.log("Got post req");
    var newVideo=new Video();
    newVideo.title=req.body.title;
    newVideo.url=req.body.url;
    newVideo.desc=req.body.desc;

    newVideo.save(function(err,doc){
        if(err){
            console.log("Error saving video");
        }
        else{
            res.json(doc)
        }

    });
});

router.put('/video/:id',function(req,res){
    console.log("Got the put req");
    Video.findByIdAndUpdate(req.params.id,{
        $set:{title:req.body.title,url:req.body.url,desc:req.body.desc}
    },
    {new:true},
    function(error,updatedVideo){
        if(error){
            console.log("Error while updating");
        }else{
            res.json(updatedVideo);
        }
    });
});

router.delete('/video/:id',function(req,res){
    Video.findByIdAndRemove(req.params.id,function(err,doc){
        if(err){
            console.log("Error while deleting");
        }else{
            res.json(doc);
        }
    });
});
module.exports=router;