//Otoniel Carreon
// 1-9-19
//Sorting

var numofcompares = 0;
var numofswaps = 0;
var time = 0;
var x = []
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(var i = 0; i < 5; i++){
    x[i] = round(random(5))
  }
  insertSort();
  // mySort();
  // bubbleSort(x);
  // selectionSort(x);
  console.log(numofswaps);
  console.log(numofcompares);
  console.log(time);
}

//  The draw function is called @ 30 fps
function draw() {

}

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
    numofswaps+=1
}


//
// function mySort(){
//   n = x.length;
//   for(var i = n; i >= 0; i--){
//     for(var j = 0; j < i; j++){
//       if(x[j-1] > x[j]){
//         swap(x, j-1, j)
//       }
//     }
//     console.log(x);
//   }
//   return x;
// }




function bubbleSort(x) {
  for(var i = 0; i < x.length; i++) {
    for(var j = 1; j < x.length; j++) {
      if(x[j - 1] > x[j]) {
        numofcompares+=1;
        swap(x, j - 1, j);
      }
    }
    console.log(x);
  }
  return x;

}




function selectionSort(items){
    var len = items.length,
        min;
    for (var i = 0; i < len; i++){
        //set minimum to this position aka whatever position i is
        min = i;
        //check the rest of the array to see if anything is smaller if not then
        //jump out of this loop and continue to the next traverse in the array.
        for(var j = i + 1; j < len; j++){
            if (items[j] < items[min]){
              numofcompares+=1
              min = j;
            }
        }
        //if the minimum isn't in the position, swap it
        if (i != min){
            swap(items, i, min);
        }
        console.log(x);
    }
    return items;
}







function insertSort(){
  for(var i = 1; i < x.length; i++){
    for(var j = i; j > 0; j--){
      if(x[j] < x[j-1]){
        numofcompares+=1;
        swap(x, j, j-1)
      }
    }
    console.log(x);
  }
  return x;
}
