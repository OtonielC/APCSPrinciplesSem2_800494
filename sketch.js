//Otoniel Carreon
// 1-9-19
//Sorting


var x = [ 5, 4, 6, 3, 7, 2, 8, 1, 9]
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  // selectionSort(x);
  bubbleSort(x);
}

//  The draw function is called @ 30 fps
function draw() {

}

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}




// function bubbleSort(x){
//   var n = x.length
//   for(var y = n; i >= 0; i--){
//     for(var i = 0; i < y; i++){
//       if(x[i-1] > x[i]){
//         saved = x[i];
//         x[i] = x[i-1];
//         x[i-1] = saved;
//         console.log(x);
//       }
//     }
//   }
//   return(x);
// }
function bubbleSort(x) {
  for(var i = 0; i < x.length; i++) {
    for(var j = 1; j < x.length; j++) {
      if(x[j - 1] > x[j]) {
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
    for (i=0; i < len; i++){
        //set minimum to this position aka whatever position i is
        min = i;
        //check the rest of the array to see if anything is smaller if not then
        //jump out of this loop and continue to the next traverse in the array.
        for (j=i+1; j < len; j++){
            if (items[j] < items[min]){
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
