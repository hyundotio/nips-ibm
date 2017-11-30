$(document).ready(function(){
	const cssStr = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

	//function bindMenuButton(){
		
	//}

	var bindMenuButton = function(){
		$('.nav-button').unbind('click').bind('click',function(){
			let $newPage
			//console.log($(this).attr('data-topic'));
			$('.'+$(this).attr('data-topic')).each(function(){
				if($(this).hasClass('main')){
					$newPage = $(this);
				}
			})
			if ($('.subactive').length > 0){
				$('.curtain').children('.block1').html($newPage.clone());
				bindMenuButton();
				$('.subactive').removeClass('subactive');
			} else {
				$('.curtain').bind(cssStr,function(){
					$(this).children('.block1').html($newPage.clone()).unbind(cssStr);
					bindMenuButton();
					$('.columns').addClass('inactive');
					$('.curtain').addClass('active');
					
				}).removeClass('active');
			}
		})
		$('.expand-column').unbind('click').bind('click',function(){
			$('.subactive').removeClass('subactive');
			$('.'+$(this).parent().attr('data-topic')).each(function(){
				if($(this).hasClass('main')){
					console.log($(this))
					$('.columns').addClass('inactive');
					$('.curtain').addClass('active').children('.block1').html($(this).clone());
					bindMenuButton();
				}
			})
		})
		$('.demo').unbind('click').bind('click',function(){
			window.location.href = $(this).attr('data-href');
		})
		$('.menu').unbind('click').bind('click',function(){
			$('.subactive').removeClass('subactive');
			$('.curtain').removeClass('active');
			$('.columns').removeClass('inactive');
		})
		$('.topic-main').unbind('click').bind('click',function(){
			$('.subactive').removeClass('subactive');
		})
		$('.subpage-button').unbind('click').bind('click',function(){
			let topicNo = $(this).prev('.subpage-selector').attr('data-topicno');
			let pageNo = $(this).prev('.subpage-selector').attr('data-page');
			//console.log(topicNo);
			//console.log(pageNo);
			$('.topic-'+topicNo).each(function(){
				if($(this).attr('data-subpage') == pageNo){
					$('.curtain').children('.block2').html($(this).clone());
					bindMenuButton();
					$('.curtain').children('.block1').addClass('subactive');
				}
			})
		})
	}
	bindMenuButton();
})