$(document).ready(function() {
	//Code

//Chiamata ajax per reperire le etichette degli album
  $.ajax(
    {
      url: 'https://flynn.boolean.careers/exercises/api/array/music',
      method: 'GET',
      success: function(data){
        var cds = data.response;
        console.log(cds)
        printCd(cds);
      },

      error: function(){
        alert('errore');
      }

    });
//Utilizzo una select per filtrare i dischi per genere musicale e mostrare solo quelli selezionati
  $('.generi').change(function(){

    var selectGenere = $(this).val();
      if (selectGenere == 'generi') {
        $('.cd').fadeIn();
        console.log(selectGenere);
      }else {
        $('.cd').fadeOut();
        $('.cd.' + selectGenere).fadeIn();
      }
    });


//Stampo i cd a schermo attraverso una funzione che utilizzerò all'interno della chiamata ajax
  function printCd(listaCd){

    var source = $('#cds-template').html();
    var template = Handlebars.compile(source);

    for (var i = 0; i < listaCd.length; i++) {
      var singoloCd = listaCd[i];
      singoloCd.genre = singoloCd.genre.toLowerCase();


      var html = template(singoloCd);
      $('.cds-container').append(html);
    }
  }


});
