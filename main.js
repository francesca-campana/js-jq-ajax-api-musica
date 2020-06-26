$(document).ready(function() {
	//Code

//Chiamata ajax per reperire le etichette degli album
  $.ajax(
    {
      url: 'https://flynn.boolean.careers/exercises/api/array/music',
      method: 'GET',
      success: function(data){

        var cds = data.response;
        printCd(cds);
      },

      error: function(){
        alert('errore');
      }
    });

//Stampo i cd a schermo attraverso una funzione che utilizzerò all'interno della chiamata ajax
    function printCd(listaCd){

      var source = $('#cds-template').html();
      var template = Handlebars.compile(source);

      for (var i = 0; i < listaCd.length; i++) {
        var singoloCd = listaCd[i];

        var html = template(singoloCd);
        $('.cds-container').append(html);
      }
    }

});
