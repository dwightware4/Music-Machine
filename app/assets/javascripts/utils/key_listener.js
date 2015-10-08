/* global KeyActions */

$(document).on("keydown", function(e){
  KeyActions.keyPressed(e.keyCode);
});

$(document).on("keyup", function(e){
  KeyActions.keyReleased(e.keyCode);
});
