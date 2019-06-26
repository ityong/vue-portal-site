jQuery(document).ready(function($){
     		
	//side-tab
   $('.side-tab .side-tab-ul li').click(function(){
   $(this).addClass('sidetab-current').siblings().removeClass('sidetab-current');
   $('.side-tab-ul-content>section:eq('+$(this).index()+')').show().siblings().hide();
    });
	

	
});



