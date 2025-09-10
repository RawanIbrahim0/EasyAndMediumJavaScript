const DashingNumber = (number) => {
   let newN="";
    for(let i=0;i<number.length;i++){
      if(i==number.length-1){
        newN=newN+number[i];
      }else{
        newN=newN+number[i]+"-";
      }
    }
    return newN;
}

console.log(DashingNumber("123456"));