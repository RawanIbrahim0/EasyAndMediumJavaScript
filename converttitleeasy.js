const Convert_Title=(str)=>{
    let distance=" ";
    let NewStr="";
    for(let i=0;i<str.length;i++){
        if(i==0){
            NewStr=NewStr+str[i].toUpperCase();
        }else if(str[i]==distance){
           NewStr=NewStr+distance+str[i+1].toUpperCase();
           i++;
        }else{
            NewStr=NewStr+str[i];
        }
    }
    return NewStr;
};

console.log(Convert_Title("my name is rawan muhammad ibrahim"));