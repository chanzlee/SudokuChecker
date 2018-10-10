import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Board } from '../src/sudoku.js';

$(document).ready(function() {
    $('#form').submit(function(event){
      event.preventDefault();
      var inputNumbers = $(".inputNumbers");
      var allInputs = [];
      var allInputsInRow = [];
      $.each(inputNumbers, function(i, inputNumber) {
        if (i % 3 == 0 && i != 0) {
          allInputs.push(allInputsInRow);
          allInputsInRow = [];
          allInputsInRow.push(parseInt($(inputNumber).val()));
        }
        else if (i == inputNumbers.length-1) {
          allInputsInRow.push(parseInt($(inputNumber).val()));
          allInputs.push(allInputsInRow);
        }
        else {
          allInputsInRow.push(parseInt($(inputNumber).val()));
        }
      });

      var newBoard = new Board(allInputs[0],allInputs[1],allInputs[2]);
      var checkResult = newBoard.ultChecker();

      if (checkResult) {
        $("#result").html("<h3>This Sudoku is legal!</h3>");
      } else {
        $("#result").html("<h3>This Sudoku is illegal!</h3>");
      }
    });
});
