
//Otoniel Carreon
//APCS
//10/23
var run = true;

//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  selectursort();
}

function draw(){
  //home base
  fill(0,255,0);
  rect(25,25,50,50)
}
function selectursort(){
  if(run === true){
    //infield
    fill(255,51,153)
    rect(50,50,700,700)
    //outfield
    fill(139,69,19)
    rect(50,50,350,350)
    //second base
    fill(255)
    rect(25,350,50,50)
    //third base
    fill(255)
    rect(350,350,50,50)
    //fourth base
    fill(255)
    rect(350,25,50,50)
  }
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
  console.log(data.crime);
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
  console.log(data.crime);
  return data.crime;
}
