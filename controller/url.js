import URL from "../models/url.js"

function handleUrlCreation(req,res){
    const body=req.body;
    
    if(!body.url){
        return res.status(400).json({"url":"require"})
    }

    else{
        const shorturl=body.url.slice(0,15)+"...";
        URL.create({
            shortUrlId:shorturl,
            originalUrl:body.url,
            visitHistory:[]
        })
        .then(()=>{
            console.log("done");
            return res.status(200).json({"shorturl":shorturl});
        })
        .catch((err)=>{
            console.log("insertion error..."+err);
            return res.status(400).json({"error":`${err}`});
        });

    }
}

async function handleFindUrl(req,res){
    const body=req.body;
    const shortUrlId=body.url;
    console.log(body.url);
    if(!shortUrlId){
        return res.status(400).json({"url":"required"});
    }

    else{
       const url=await URL.findOneAndUpdate({shortUrlId},{ $push: { visitHistory: Date.now() } },{ new: true });

       if(!url){
        return res.status(400).json({"url":"incorrect"})
       }
    //    console.log(url);
       return res.status(200).json({"url":url.originalUrl})
    }
    
}


export {handleUrlCreation,handleFindUrl}