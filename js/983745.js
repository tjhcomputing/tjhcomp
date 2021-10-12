function openMobDrawer() {
  document.getElementById("mobMenu").classList.toggle("openMobMenu");
}

function positionScroll() {
  if (document.documentElement.scrollTop > 21 || document.body.scrollTop > 21) {
    document.getElementById("tjh-head-sector").style.paddingBottom = "4px";
    document.getElementById("tjh-content-menu").style.position = "fixed";
    document.getElementById("tjh-content-menu").style.top = "60px";
    document.getElementById("tjh-content-menu").style.bottom = 0;
    document.getElementById("tjh-ad-box").style.position = "fixed";
    document.getElementById("tjh-ad-box").style.top = "60px";
    document.getElementById("tjh-ad-box").style.bottom = 0;
  } else {
    document.getElementById("tjh-head-sector").style.paddingBottom = 0;
    document.getElementById("tjh-content-menu").style.position = "absolute";
    //document.getElementById("tjh-content-menu").style.top = "90px";
	document.getElementById("tjh-content-menu").style.top = "125px";
    document.getElementById("tjh-content-menu").style.bottom = "-50px";
    document.getElementById("tjh-ad-box").style.position = "absolute";
    //document.getElementById("tjh-ad-box").style.top = "90px";
	document.getElementById("tjh-ad-box").style.top = "125px";
    document.getElementById("tjh-ad-box").style.bottom = "-50px";
  }
}

function displayScrollTop() {
  if (document.documentElement.scrollTop > 350 || document.body.scrollTop > 350) {
    document.getElementById("tjh-top-scroll").style.display = "block";
  } else {
    document.getElementById("tjh-top-scroll").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() { positionScroll(); displayScrollTop()};

document.getElementById("prim-nav-1").innerHTML = "<a href='index.html' class='current'>Home</a>";
document.getElementById("prim-nav-2").innerHTML = "<a href='computing.html'>Computing</a>";
document.getElementById("prim-nav-3").innerHTML = "<a href='networking.html'>Networking</a>";
document.getElementById("prim-nav-4").innerHTML = "<a href='programming.html'>Programming</a>";
document.getElementById("prim-nav-5").innerHTML = "<a href='cybersecurity.html'>Security</a>";
document.getElementById("mob-nav-1").innerHTML = "<a href='index.html' class='current'>Home</a>";
document.getElementById("mob-nav-2").innerHTML = "<a href='computing.html'>Computing</a>";
document.getElementById("mob-nav-3").innerHTML = "<a href='networking.html'>Networking</a>";
document.getElementById("mob-nav-4").innerHTML = "<a href='programming.html'>Programming</a>";
document.getElementById("mob-nav-5").innerHTML = "<a href='security.html'>Security</a>";
document.getElementById("foot-nav-1").innerHTML = "<a href='computing.html'>Computing</a>";
document.getElementById("foot-nav-2").innerHTML = "<a href='networking.html'>Networking</a>";
document.getElementById("foot-nav-3").innerHTML = "<a href='programming.html'>Programming</a>";
document.getElementById("foot-nav-4").innerHTML = "<a href='cybersecurity.html'>Security</a>";
//document.getElementById("foot-nav-5").innerHTML = "<a href='privacy.html'>Privacy</a>";
//document.getElementById("foot-nav-6").innerHTML = "<a href='guidelines.html'>Guidelines</a>";
//document.getElementById("foot-nav-7").innerHTML = "<a href='#'>Link</a>";
//document.getElementById("foot-nav-8").innerHTML = "<a href='#'>Link</a>";
//document.getElementById("foot-nav-9").innerHTML = "<a href='https://www.facebook.com/tjh.comp' target='_blank' class='fa fa-facebook-square'></a>";
document.getElementById("foot-nav-10").innerHTML = "<a href='https://www.instagram.com/tjhcomputing/' target='_blank' class='fa fa-instagram'></a>";
document.getElementById("foot-nav-11").innerHTML = "<a href='https://twitter.com/TJHComputing' target='_blank' class='fa fa-twitter-square'></a>";
//document.getElementById("foot-nav-12").innerHTML = "<a href='#'>Link</a>";
document.getElementById("foot-info-sector").innerHTML = "<p></p>";
document.getElementById("foot-logo-name").innerHTML = "<p><b><span class='fa fa-copyright'></span> TJHComp 2021.</b></p>";
document.getElementById("foot-site-head").innerHTML = "<h5>Site</h5>";
document.getElementById("foot-info-head").innerHTML = "<h5>Information</h5>";
document.getElementById("foot-social-head").innerHTML = "<h5>Social Media</h5>";

const articleAuthor = {
	aid: 1251,
	fName:"Thomas",
	lName:"Haig",
	authName: function() {
		return this.fName + " " + this.lName;
	}
};

const day = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const year = ["2016", "2017", "2018", "2019", "2020", "2021"];

const tags = ["computing", "networking", "programming", "security", "css", "html", "navigation", "frontend", "web"];

let compTag = "<a href='" + tags[0] + ".html'>" + tags[0] + "</a>";
let netTag = "<a href='" + tags[1] + ".html'>" + tags[1] + "</a>";
let programTag = "<a href='" + tags[2] + ".html'>" + tags[2] + "</a>";
let secTag = "<a href='" + tags[3] + ".html'>" + tags[3] + "</a>";
let cssTag = "<a href='" + tags[4] + ".html'>" + tags[4] + "</a>";
let htmlTag = "<a href='" + tags[5] + ".html'>" + tags[5] + "</a>";
let navTag = "<a href='" + tags[6] + ".html'>" + tags[6] + "</a>";
let frontendTag = "<a href='" + tags[7] + ".html'>" + tags[7] + "</a>";
let webTag = "<a href='" + tags[8] + ".html'>" + tags[8] + "</a>";

const readNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

document.getElementById("tjh-warn-note").innerHTML = "<span class='fa fa-cogs'></span> <span class='fa fa-exclamation-triangle'></span> Site currently has ongoing construction. Issues reduced more content still to come... <span class='fa fa-exclamation-triangle'></span> <span class='fa fa-wrench'></span>";
