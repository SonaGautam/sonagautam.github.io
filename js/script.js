// Website Configuration
var name = "Sona Gautam";
var skill = "Acting in films";
var about = "Hello! My name is Sona Gautam and I am a film actor. My hobbies are acting, drawing, long-driving, photo-shooting, etc. Previously, I'm been the Hero-in of the movie Nain Matakka.";
skills = [
  84,
  70,
  89
];
// Website Configuration

document.getElementById("name").textContent = name;
title = document.createElement("title");
title.textContent = name;
document.head.appendChild(title);
document.querySelector("h5#skills").textContent = skill;
document.querySelector("#aboutme").textContent = about;
document.querySelector("#skill1").setAttribute("data-bar",skills[0]);
document.querySelector("#skill2").setAttribute("data-bar",skills[1]);
document.querySelector("#skill3").setAttribute("data-bar",skills[2]);

$(".skills").addClass("active")
$(".skills .skill .skill-bar span").each(function() {
   $(this).animate({
      "width": $(this).parent().attr("data-bar") + "%"
   }, 1000);
});
setTimeout(function() {
   $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
}, 2000);

switchT = document.querySelector("#toggleSwitch");
switchT.onclick = function(){
   if(switchT.textContent === "Dark"){
      document.body.classList.add("dark");
      switchT.textContent = "Light";
   }
   else{
      document.body.classList.remove('dark');
      switchT.textContent = "Dark";
   }
}