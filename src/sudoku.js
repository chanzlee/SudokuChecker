// var matrix =
// [ [0,1,2],
//   [1,2,0],
//   [2,0,1] ];

export var Board = function (rowOne, rowTwo, rowThree) {
  var tempArray= [];
  tempArray.push(rowOne);
  tempArray.push(rowTwo);
  tempArray.push(rowThree);
  this.matrix = tempArray.slice();
}


Board.prototype.rowChecker = function () {
  var numberArray = [0,1,2];
  var matchedRow = 0;
  for (var i=0; i< 3; i++){
    var storedArray = [];
    var tempMatrix = this.matrix;
    storedArray = tempMatrix[i].slice();
    if(storedArray.sort().join('') === numberArray.join(''))
    {
      matchedRow++;
    }
  }

  if (matchedRow === 3) {
    return true;
  }
  else {
    return false;
  }
}


Board.prototype.colChecker = function (){
  var numberArray = [0,1,2];
  var matchedCol = 0;
  for (var j=0; j< 3; j++)
  {
    var storedArray = [];
    for (var i=0; i< 3; i++) {
      var tempMatrix = this.matrix;
      storedArray.push(tempMatrix[i][j]);
    }

    if(storedArray.sort().join('') === numberArray.join('')) {
      matchedCol++;
    }
  }

  if(matchedCol === 3){
    return true;
  } else {
    return false;
  }
}


Board.prototype.ultChecker = function () {

  var rowResult = this.rowChecker();
  var colResult = this.colChecker();

  if(rowResult && colResult) {
    return true;
  }
  else {
    return false;
  }
}
