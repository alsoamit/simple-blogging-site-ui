console.log("Javascript is working for you");
// functionality for theme switchers
var themes = [ "../static/styles/blogGreen.css",
"../static/styles/blogGreen.css","../static/styles/blogGreen.css", "../static/styles/blogGreen.css"
]

var theme = localStorage.getItem('theme');
if (theme == "one"){
  $("#css").attr("href", themes[0]); 
}
if (theme == "two"){
  $("#css").attr("href", themes[1]); 
}
if (theme == "three"){
  $("#css").attr("href", themes[2]); 
}
if (theme == "four"){
  $("#css").attr("href", themes[3]); 
}

$(document).ready(function(){

// to open the hamburger
$("#hamburger").click(function(){
  $(this).toggleClass("hamburger__open");
  $("body").toggleClass("menu__open");
  $("#menu").toggleClass("menu");
});


$("#switch1").click(function(){
  $("#css").attr("href", "../static/styles/indexLight.css");
  $("#switch4").css("border", "1px solid black");
  $("#switch2").css("border", "1px solid black");
  $("#switch3").css("border", "1px solid black");
  $(this).css("border", "6px solid black");
  localStorage.setItem('theme', 'one'); 
});

$("#switch2").click(function(){
  $("#css").attr("href", "../static/styles/indexDark.css");
  $("#switch4").css("border", "1px solid white");
  $("#switch2").css("border", "1px solid white");
  $("#switch3").css("border", "1px solid white");
  $(this).css("border", "6px solid white");
  localStorage.setItem('theme', 'two'); 
});

$("#switch3").click(function(){
  $("#css").attr("href", "../static/styles/indexGreen.css");
  $("#switch1").css("border", "1px solid black");
  $("#switch2").css("border", "1px solid black");
  $("#switch3").css("border", "1px solid black");
  $(this).css("border", "6px solid black");
  localStorage.setItem('theme', 'three'); 
});

$("#switch4").click(function(){
  $("#css").attr("href", "../static/styles/index.css");
  $("#switch1").css("border", "1px solid black");
  $("#switch2").css("border", "1px solid black");
  $("#switch3").css("border", "1px solid black");
  $(this).css("border", "6px solid black");
  localStorage.setItem('theme', 'four'); 
});

});