import { Board } from '../src/sudoku.js';


describe('Sudoku' , function() {
  var rowOne;
  var rowTwo;
  var rowThree;
  var newBoard;

  beforeEach(function() {
    rowOne = [0,1,2];
    rowTwo = [1,2,0];
    rowThree = [2,0,1];
    newBoard = new Board(rowOne, rowTwo, rowThree);
  });

  it('should check whether row has all numbers from 0-2', function(){
    var checkerResult = newBoard.rowChecker();
    expect(checkerResult).toEqual(true);
  });
  it('should check whether column has all numbers from 0-2', function(){
    var colresult = newBoard.colChecker();
    expect(colresult).toEqual(true);
  });
  it('should check sudoku', function() {
    var sudo = newBoard.ultChecker();
    expect(sudo).toEqual(true);
  });
});
