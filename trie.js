const max_size=26


class Trie{

  //this constructor defines a single array
constructor(){

  this.endOfWord=false
  this.children=new Array(max_size)
  for(let i=0;i<max_size;i++){
    this.children[i]=null
  }
  
}



  //searches in the trie
  search(str){
    
  }
 //inserts in the trie.
  insert(str){

    pCrawl=this.children
    let length=str.length
    let index;
    // 
    for(let i=0;i<length;i++){
      index=key[i].charCodeAt(0)- 'a'.charCodeAt(0);
      if(pCrawl.children[i]==null){
        pCrawl.children[i]=new Trie()
      }
      pCrawl=pCrawl.children[i]
    }
    this.endOfWord=true
  }

  
}


module.exports={
  Trie
}