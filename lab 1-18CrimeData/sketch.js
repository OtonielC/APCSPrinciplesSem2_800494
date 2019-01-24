
//Otoniel Carreon
//APCS
//10/23

var savedVariable;
var txt;
function preload(){
  txt = loadStrings("words.txt");
  console.log("txt loaded");
  console.log(txt);
}
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  preload();
  bubbleSort(txt);
}

function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
  numofswaps+=1
}


function selectionSort(items){
  var len = items.length,
  min;
  for (var i = 0; i < len; i++){
    min = i;
    for(var j = i + 1; j < len; j++){
      numofcompares+=1
      if (items[j] < items[min]){
        numofcompares+=1
        min = j;
      }
    }tygrdcs
    if (i != min){
      swap(items, i, min);
    }
    console.log(x);
  }
  return items;
}
