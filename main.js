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
        
        $('.generi').change(function(){

          var selectGenere = $(this).val();
          if (selectGenere === '') {
            $('.cds').fadeIn();

          }else {
            $('.cd').each(function(){
              var singolGenere = $(this).attr('data-genere');
              if (singolGenere.toLowerCase() === selectGenere.toLowerCase()) {
                console.log(this);
                $(this).fadeIn();
              }else {
                console.log(this);

                $(this).fadeOut();
              }

            });

          }




        });

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
//Utilizzo una select per filtrare i dischi per genere musicale e mostrare solo quelli selezionati



});
