$(document).ready(function(){
  //Global variables allowed for access for other variables. 
  var quote; 
  var author;
  
  //Function to get new quote. Gets API information and use it to display quotes and author on screen. 
  function getNewQuote(){
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
      method: 'getQuote',
      lang: 'en',
      format: 'jsonp'
    },
      
     success: function(response){
       quote = response.quoteText;
       author = response.quoteAuthor;
       $('#quote').html(quote);
       if(author){
         $('#author').html('- ' + author);
       }
       else{
         $('#author').html('- unknown');
       }
    }
    });
    
  }
  getNewQuote();
  
  $('.get-quote').on('click',function(event){
    
    getNewQuote();
    
    //Prevents from going back to the top of the website. 
    event.preventDefault();
  });
  
  $('.twitter-button').on('click',function(event){
    
    //Prevents from going back to the top of the website.  
    event.preventDefault();
    
    //Opens up new window for twitter. 
   window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' - ' + author));
                
 });
});