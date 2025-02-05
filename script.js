// scroll menu
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

// random background
var totalCount = 2;
var images = ["Media/SLOFF/body2.jpg", "Media/SLOFF/face2.png"];
var colors = ["rgb(1, 19, 5)", "rgb(255, 255, 255)"];
function SetRandomBackground() 
{
var num = Math.ceil( Math.random() * totalCount) - 1;
num = 1;
document.body.background = images[num];
// document.body.style.backgroundColor = colors[num];
var style = document.getElementById("sloff").style;
if (num == 0)
{
  // style.filter="invert(100%)";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundPosition = "center";
}
else if (num == 1)
{
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundPosition = "top";
  // document.body.style.backgroundPosition = "0% 30%"
}
}