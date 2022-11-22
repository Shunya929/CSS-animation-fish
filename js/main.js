$('#waves').wavify({
  height: 100,
  bones: 4,
  amplitude: 50,
  color: '#0bd',
  speed: .25
});

jQuery(function($){
  const pos = $('#waves').offset();
  $('.container__ripple').css('top', '8px');
  console.log( pos );
});

