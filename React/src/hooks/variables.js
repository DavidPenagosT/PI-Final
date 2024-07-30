export const connApi={
    WEB:"http://localhost:3011",
    local:"",
}
export const connApp={
    local:"",
    WEB:"http://localhost:3012",
}

export const i=(ab)=>{
    const inital={}

       if(ab){ 
    for(const a of ab.split("&")){
     inital[a.split("=")[0]]=a.split("=")[1];
    }}
          
    return inital
} 