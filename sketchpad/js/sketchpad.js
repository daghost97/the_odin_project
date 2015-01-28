$(document).ready(function() {
var $grid = $('#container');

// create column of items
for (i=0; i < 16; i++) {
  // create row of items.
  var row = '<div>';
  for (j=0; j < 16; j++) {
    row +='<div class="grid">' + j + '</div>';
  }
  row += '</div>';
  $grid.append(row);
}
});