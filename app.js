
var jQuery_3_1_1 = $.noConflict(true);

jQuery_3_1_1(function(){
  jQuery_3_1_1('#pagepilling').pagepiling({
    direction: 'horizontal',
    loopBottom: true,
    anchors: ['home', 'nosotros','portfolio']
  });
})