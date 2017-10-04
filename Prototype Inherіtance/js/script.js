$(function (){
    var $results = $('.results');
    var ajaxK = function (){
            $('input[type="text"]').keyup(function (){
                var query = $(this).val().toLowerCase();
                $.ajax({
                    url: 'https://pixabay.com/api/?key=4364676-8e7b1b0c6e45b1b1f9b4d5c72&q='+query+'&per_page=14',
                    dataType :'jsonp',
                    success: function(data){
                        $results.empty();
                        console.log(data)
                        for (let i = 0; i<data.hits.length; i++){
                            $('.results').append($('<div>')).append($('<a>').attr('href', data.hits[i].pageURL).append($('<img>').attr('src', data.hits[i].webformatURL)));
                        }
                    }
                })
            })
        };
        ajaxK()
    })
