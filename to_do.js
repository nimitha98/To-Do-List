$(document).ready(function(){

  $(".fa-plus").click(function(){
        $("input").toggleClass("display-inline");
      });
  
  $("ul").on("click", "li", function(){
        $(this).toggleClass("done");
     });
  $("ul").on("mouseenter", "li", function(){
        $(this).find("span").addClass("display-inline");
      });  
  $("ul").on("click", "li", function(){
        $(this).toggleClass("done");
      });
  $("#new").keypress(function(event){
        if(event.which == 13)
        {
          $("ul").append('<li><span class = "display-none"><i class="fa fa-trash"></i></span>'+ $("#new").val() + '</li>');
        }});
  $("ul").on("mouseleave", "li", function(){
        $(this).find("span").removeClass("display-inline");
      });
  $("ul").on("click", "li", function(){
      $(this).toggleClass("done");
    });
  $("ul").on("click", ".fa-trash", function(){
      $(this).parentsUntil("ul").remove();
  });


  
});

