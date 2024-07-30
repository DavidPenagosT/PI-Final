function ValKey(objeto,claveBuscada,keyx) {
    const valoresEncontrados = [];
  
    function buscarRecursivamente(obj) {
        if (obj !== null && typeof obj === 'object') {
            if (obj.hasOwnProperty(claveBuscada)) {
              const objx=obj[claveBuscada];
                valoresEncontrados.push(keyx!==undefined?objx[keyx]:objx);
            }
            for (const key in obj) {
                buscarRecursivamente(obj[key]);
            }
        }
    }

    buscarRecursivamente(objeto);
    return valoresEncontrados
}


function reqsGame(a){
    const initial={}
  for(const x of a){
   
   if( x.platform.name==="PC"||x.platform.name==="macOS"){
    
    initial[x.platform.name]=x.requirements
   }
   
  }
  return initial.length!==0?initial:0
  }

module.exports = {ValKey, reqsGame};