document.getElementById("tjh-s-nav-1").innerHTML = "<div class='tjh-s-nv-extend'>" + 
"<div class='tjh-nv-ext-btn'>Blogs</div><div class='tjh-ext-content'>" + 
"<a href='#'>Link 1</a>" +
"<a href='#'>Link 2</a>" + 
"<a href='#'>Link 3</a>" +
"</div></div>";

document.getElementById("tjh-s-nav-2").innerHTML = "<div class='tjh-s-nv-extend'>" + 
"<div class='tjh-nv-ext-btn'>Guides</div><div class='tjh-ext-content'>" + 
"<a href='#'>Link 1</a>" +
"<a href='#'>Link 2</a>" + 
"<a href='#'>Link 3</a>" +
"</div></div>";

document.getElementById("tjh-s-nav-3").innerHTML = "<div class='tjh-s-nv-extend'>" + 
"<div class='tjh-nv-ext-btn'>Reviews</div><div class='tjh-ext-content'>" + 
"<a href='#'>Link 1</a>" +
"<a href='#'>Link 2</a>" + 
"<a href='#'>Link 3</a>" +
"</div></div>";




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("tjh-s-nav").style.height = "70px";
	document.getElementById("tjh-s-nav").style.position = "fixed";
	document.getElementById("tjh-s-nav").style.top = 0;
    document.getElementById("tjh-side-content").style.paddingTop = "73px";
	document.getElementById("tjh-side-content").style.position = "fixed";
    document.getElementById("tjh-warning-msg").style.top = "70px";
	document.getElementById("tjh-warning-msg").style.position = "fixed";
  } else {
    document.getElementById("tjh-s-nav").style.height = "35px";
	document.getElementById("tjh-s-nav").style.position = "absolute";
	document.getElementById("tjh-s-nav").style.top = "65px";
    document.getElementById("tjh-side-content").style.paddingTop = "100px";
	document.getElementById("tjh-side-content").style.position = "absolute";
    document.getElementById("tjh-warning-msg").style.top = "100px";
	document.getElementById("tjh-warning-msg").style.position = "absolute";
  }
}



var coll = document.getElementsByClassName("tjh-col-content");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("tjh-cont-open");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



const articleAuthor = {
  fName: "Thomas",
  lName: "Haig",
  authName: function() {
    return this.fName + " " + this.lName;
  }
}; 

var day = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];

 var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var year = ["2016", "2017", "2018", "2019", "2020", "2021", "2022"];

const tag = ["computing", "networking", "programming", "security", "css", "html", "navigation", "frontend", "web"];

// Tag List
let compTag = "<a href='tags/" + tag[0] + ".html'>" + tag[0] + "</a>";
let netTag = "<a href='tags/" + tag[1] + ".html'>" + tag[1] + "</a>";
let programTag = "<a href='tags/" + tag[2] + ".html'>" + tag[2] + "</a>";
let secTag = "<a href='tags/" + tag[3] + ".html'>" + tag[3] + "</a>";
let cssTag = "<a href='tags/" + tag[4] + ".html'>" + tag[4] + "</a>";
let htmlTag = "<a href='tags/" + tag[5] + ".html'>" + tag[5] + "</a>";
let navTag = "<a href='tags/" + tag[6] + ".html'>" + tag[6] + "</a>";
let frontendTag = "<a href='tags/" + tag[7] + ".html'>" + tag[7] + "</a>";
let webTag = "<a href='tags/" + tag[8] + ".html'>" + tag[8] + "</a>";

const readNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
