function card_post_processing(){
    //align this code with card_post_processing.js
    var counter=0;
    try {
      //cleanup old rules
      for(var i=document.styleSheets[0].rules.length-1 ; i>=0; i--){
          if(document.styleSheets[0].rules[i].cssText.startsWith(".bg-card")){
            debugger;  
            document.styleSheets[0].removeRule(i);
          }
        }
      }
     catch(ex){}
  
    $('.card-content-container[data-image]').each(function (index){
      try {
        var imageAttr = $(this).attr('data-image');
        var topAttr=  $(this).attr('data-top');
        var opacityAttr=  $(this).attr('data-opacity');
        var className = 'bg-card-'+index;
        debugger;
        document.styleSheets[0].addRule('.'+className+':after', 'background-image: url(' +imageAttr+ ')');
        if(topAttr!= null){
          document.styleSheets[0].addRule('.'+className+':after', 'background-position-y: ' +topAttr + 'px !important');
        }
        if(opacityAttr!= null){
          document.styleSheets[0].addRule('.'+className+':after', 'opacity: ' +opacityAttr + ' !important');
        }
        $(this).addClass(className);
        counter++;
      }catch(ex){
        console.log("Failed to update bgpicture");
        console.log(ex);
      }
    })
    console.log('Added '  + counter + ' background images to cards');
  }