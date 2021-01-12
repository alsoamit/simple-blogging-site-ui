$(document).ready(function(){
    console.log("Javascript is working for you")
    $("#hamburger").click(function(){
      let hamb = $("#this")
      $(this).toggleClass("hamburger__open");
      $("body").toggleClass("menu__open");
      $("#menu").toggleClass("menu");
    });
  });