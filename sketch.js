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

}

//  The draw function is called @ 30 fps
function draw() {
    bubbleSort();
}

function bubbleSort(){
  var saved;
  for(var i = 0; i < x.length-1; i++){
    for(var y = x.length-1; i > 0; i--){
      if(x[i] > x[i-1]){
        saved = x[i-1];
        x[i-1] = x[i];
        x[i] = saved;
        console.log(x);
      }
    }
  }
}
