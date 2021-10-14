const dimond = (num)=>{
  let space = Math.floor(num/2);
  let spaceB = 0;
  console.log(space)
  let print = "";
  for(let x=0; x<num; x++){
    for(let y=space; y>=0; y--){
      if(y==0){
        print += "*";
        console.log(print);
        print = "";
        break;
      }
      print += " ";
    }
    // for(let z=spaceB; z<space; z++){
    //   if(z==0){
    //     continue;
    //   }
    //   else{
    //     print +="*";
    //     console.log(print);
    //   }

    // }
    space--;
    print = "";
  }
}

dimond(7);
