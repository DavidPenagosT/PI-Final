const i=(ab,req )=>{
    const inital={}
    let path =req.path.substring(0,req.path.lastIndexOf("/"))
    const x=req.path
       if(x){ 
    for(const a of x.split("&")){
     [k,v]=a.split("=")
     inital[k.substring(k.lastIndexOf("/")+1)]=v;
    
    }
}
    inital["pathURL"]=path
   
    return inital
} 

module.exports={i}