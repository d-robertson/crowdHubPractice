
function catsGame (){
  var total = 0;
  var array = $('.cell');
  for(var i = 0; i < array.length; i++){
    if(array[i].innerHTML){
      total++;
    }
  }
  if(total === 42){
    console.log("cats game");
  }  
}

