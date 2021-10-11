function openMobDrawer() {
  document.getElementById("mobMenu").classList.toggle("openMobMenu");
}

function positionScroll() {
  if (document.documentElement.scrollTop > 21 || document.body.scrollTop > 21) {
    document.getElementById("tjh-head-sector").style.paddingBottom = "4px";
    document.getElementById("tjh-content-menu").style.position = "fixed";
    document.getElementById("tjh-ad-box").style.position = "fixed";
    document.getElementById("tjh-content-menu").style.top = "60px";
    document.getElementById("tjh-ad-box").style.top = "60px";
    document.getElementById("tjh-content-menu").style.bottom = 0;
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
document.getElementById("foot-nav-5").innerHTML = "<a href='privacy.html'>Privacy</a>";
document.getElementById("foot-nav-6").innerHTML = "<a href='guidelines.html'>Guidelines</a>";
//document.getElementById("foot-nav-7").innerHTML = "<a href='#'>Link</a>";
//document.getElementById("foot-nav-8").innerHTML = "<a href='#'>Link</a>";
document.getElementById("foot-nav-9").innerHTML = "<a href='https://www.facebook.com/tjh.comp' target='_blank' class='fa fa-facebook-square'></a>";
document.getElementById("foot-nav-10").innerHTML = "<a href='https://www.instagram.com/tjhcomputing/' target='_blank' class='fa fa-instagram'></a>";
document.getElementById("foot-nav-11").innerHTML = "<a href='https://twitter.com/TJHComputing' target='_blank' class='fa fa-twitter-square'></a>";
//document.getElementById("foot-nav-12").innerHTML = "<a href='#'>Link</a>";
document.getElementById("foot-info-sector").innerHTML = "<p>Footer information goes here.</p>";
document.getElementById("foot-logo-name").innerHTML = "<p><b><span class='fa fa-copyright'></span> TJHComp 2021.</b></p>";
document.getElementById("foot-site-head").innerHTML = "<h5>Site</h5>";
document.getElementById("foot-info-head").innerHTML = "<h5>Information</h5>";
document.getElementById("foot-social-head").innerHTML = "<h5>Social Media</h5>";


var countDownDate = new Date("Oct 11, 2021 15:00:00").getTime();
var countdown = setInterval(function() {
  
  var currentTime = new Date().getTime();
  var timer = countDownDate - currentTime;
  
  var days = Math.floor(timer / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));

  if (timer < 0) {
    document.getElementById("coming-soon").style.display = "none";
	document.body.style.overflow = "auto";
  }

  var minuteQuote = " minutes";
  var hourQuote = " hours ";
  var dayQuote = " days ";

  if (minutes == 1) {
	  minuteQuote = " minute";
  } else {
	  minuteQuote;
  }

  if (hours == 1) {
	  hourQuote = " hour ";
  } else {
	  hourQuote;
  }
  
  if (days == 1) {
	  dayQuote = " day ";
  } else {
	  dayQuote;
  }

  document.getElementById("cs-countdown").innerHTML = days + dayQuote + hours + hourQuote + minutes + minuteQuote;
  document.body.style.overflow = "hidden";

}, 1000);

document.getElementById("tjh-warn-note").innerHTML = "<span class='fa fa-cogs'></span> <span class='fa fa-exclamation-triangle'></span> Site currently has ongoing construction. You might expect issues and missing content... <span class='fa fa-exclamation-triangle'></span> <span class='fa fa-wrench'></span>";

document.getElementById("cs-notice").innerHTML = "<span class='fa fa-cogs'></span> <span class='fa fa-exclamation-triangle'></span> Site currently will continue with ongoing construction. Some functions may not work as expected yet... <span class='fa fa-exclamation-triangle'></span> <span class='fa fa-wrench'></span>";
