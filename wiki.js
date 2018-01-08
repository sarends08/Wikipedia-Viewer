$(document).ready(function(){
	
		
			$('#submit').click(function(){
				$('.results').remove();
				var input = $('#input').val();
				$.ajax({
					url:'https://en.wikipedia.org/w/api.php',
					data: {action: 'query', list: 'search', srsearch: input, format: 'json'},
					dataType: 'jsonp',
					success: function(x){
						var wikiInfo = x.query.search;
						$(".container").addClass("newContainer").removeClass("container");

						for (var i = 0; i< wikiInfo.length; i++) {
							var title = x.query.search[i].title,
								snippet = x.query.search[i].snippet;
							$(".form").append("<div class = 'results'>" + '<h1>' + "<a href = https://en.wikipedia.org/wiki/"+ title + '>' + title + '</a>' + '</h1>' + '<p>' + snippet + '...' + '</p>' + '</div>');
							
						}
						$("a").addClass('links');
					}
				});
			});
	
});
