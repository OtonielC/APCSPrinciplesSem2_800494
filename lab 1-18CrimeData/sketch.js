
//Otoniel Carreon
//APCS
//10/23


//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  insertSort();
}

function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}


function insertSort(){
  for(var i = 1; i < data.crime.length-1; i++){
    for(var j = i; j > 0; j--){
      if(data.crime[j].Assault < data.crime[j-1].Assault){
        swap(data.crime, j, j-1)
      }
    }
    console.log(data.crime);
  }
  return data.crime;
}
