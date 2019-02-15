
//Otoniel Carreon
//APCS
//10/23
var q = 0;

//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  murder();
}

function draw(){

}

function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}


function assaultSort(){
  for(var i = data.crime.length; i > 0; i--){
    for(var j = 1; j < i; j++){
      if(data.crime[j].Assault > data.crime[j-1].Assault){
        swap(data.crime, j, j-1)
      }
    }
  }
  return data.crime;
}


function murderSort(){
  for(var i = data.crime.length; i > 0; i--){
    for(var j = 1; j < i; j++){
      if(data.crime[j].Murder > data.crime[j-1].Murder){
        swap(data.crime, j, j-1)
      }
    }
  }
  return data.crime;
}


function murder(){
  for(var i = 0; i < data.crime.length; i++){
    murderSort();
    fill(255)
    rect(100 ,q , data.crime[i].Murder*10, 15)
    q += 15
  }
}
