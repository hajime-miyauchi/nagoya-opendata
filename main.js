'use strict';

function readCsv(data) {
  var target = '#csv-body';
  var csv = $.csv.toArrays(data);
  var insert = '';

  var query = $('#q').val();

  $(target).empty();
  $(csv).each(function() {
    if(query != ''){
      if(!(this[0].match(query)) && !(this[1].match(query)) && !(this[3].match(query))){
        return true;
      }
    }

    if (this.length > 0) {
    insert += '<tr>';
    $(this).each(function() {
      insert += '<td>' + this + '</td>';
    });
    insert += '</tr>';
    }
  });
  $(target).append(insert);
}

var csvfile = 'nagoya-opendata.csv';
$(function(){
  $.get(csvfile, readCsv, 'text');
  $('#search').click(function(){
    console.log('test');
    $.ajax({
      url: csvfile,
      data: {
       },
      success: readCsv,
      dataType: 'text'
    });
  });
});

