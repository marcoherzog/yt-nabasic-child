function scrollto_top() {
  var cssset = {
    display : "none",
    position : "fixed",
    bottom : '-' + $('#scrollTo-Top2').height() + 'px',
    right : "10px",
    "z-index" : "999",
    "cursor" : "pointer",
    color : "#fff"
  };
  
  $('body').append('<div id="scrollTo-Top2"></div>');
  $('#scrollTo-Top2').append('<i class="glyphicon glyphicon-chevron-up"></i>');
  $('#scrollTo-Top2').css(cssset);
  //$('#scrollTo-Top2').show();
  
  //$('#console').show();
  var animate = false;
  var pos;
  var boxHeight = $('#scrollTo-Top2').height() +15;
  
  $(window).scroll(function (){

    //$('#console').append('$(window).scrollTop():' + $(window).scrollTop() + '<br>');

    if(animate == false){

      if( $(window).scrollTop() > 500 && pos != 'bottom'){
        pos = 'bottom';
        animate = true;
        //$('#console').append('animate = true; >200');
        $('#scrollTo-Top2').show(function() {
          $('#scrollTo-Top2').animate({
            bottom : '0px',
            },{
              easing: 'easeOutBounce',
              duration: 1200,
              complete: function(){
                animate = false;
              }
            }
          );      
        });
      } else if( $(window).scrollTop() < 300 && pos != 'top'){
        pos = 'top';
        animate = true;
        //$('#scrollTo-Top2').hide();
        //$('#console').append('animate = true; <100');
        $('#scrollTo-Top2').animate({
            bottom : '-' + boxHeight + 'px',
            },{
              easing: 'easeInExpo',
              duration: 400,
              complete: function(){
                animate = false;
                $('#scrollTo-Top2').hide();
              }
        });
      }

    }

  });
  
    
  $('#scrollTo-Top2').click(function(){
    $.scrollTo('header#masthead',2000, {easing:'easeOutExpo'});
  })

};
