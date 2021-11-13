// --- FUNCTIONS (GLOBAL) ---
function openMobDrawer() {
  document.getElementById("mobMenu").classList.toggle("openMobMenu");
}

function scrollLocation() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 90);
    }
}

window.setTimeout(scrollLocation, 1);
window.addEventListener("hashchange", scrollLocation);

function positionScroll() {
  if (document.documentElement.scrollTop > 21 || document.body.scrollTop > 21) {
    document.getElementById("tjh-head-sector").style.paddingBottom = "4px";
    document.getElementById("tjh-cont-menu").style.position = "fixed";
    document.getElementById("tjh-cont-menu").style.top = "60px";
    document.getElementById("tjh-cont-menu").style.bottom = 0;
    document.getElementById("tjh-ad-box").style.position = "fixed";
    document.getElementById("tjh-ad-box").style.top = "60px";
    document.getElementById("tjh-ad-box").style.bottom = 0;
  } else {
    document.getElementById("tjh-head-sector").style.paddingBottom = 0;
    document.getElementById("tjh-cont-menu").style.position = "absolute";
    document.getElementById("tjh-cont-menu").style.top = "90px";
	//document.getElementById("tjh-cont-menu").style.top = "125px";
    document.getElementById("tjh-cont-menu").style.bottom = "-50px";
    document.getElementById("tjh-ad-box").style.position = "absolute";
    document.getElementById("tjh-ad-box").style.top = "90px";
	//document.getElementById("tjh-ad-box").style.top = "125px";
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
document.getElementById("foot-nav-7").innerHTML = "<a href='about.html'>About</a>";
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

const tag = ["computing", "networking", "programming", "security", "css", "html", "navigation", "frontend", "web"];

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

document.getElementById("tjh-warn-disp").innerHTML = "<span class='fa fa-cogs'></span> <span class='fa fa-exclamation-triangle'></span> Site currently has ongoing construction. Issues reduced more content still to come... <span class='fa fa-exclamation-triangle'></span> <span class='fa fa-wrench'></span>";

var imgs = [1];

function dispImg(a) {
  var i;
  var img = document.getElementsByClassName("tjh-img-act");

  for (i = 0; i < img.length; i++) {
      img[i].style.display = "none";
  }
  
  img[imgs-1].style.display = "block";
}

dispImg(imgs);

function activeImg(a) {
  dispImg(imgs = a);
}

function scrollLocation() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 90);
    }
}

function zoomIn() {
  document.getElementById("tjh-img-modal").style.display = "block";
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = "15px";
}

function zoomOut() {
  document.getElementById("tjh-img-modal").style.display = "none";
  document.body.style.overflow = "auto";
  document.body.style.marginRight = 0;
}

function currentCodeTab(currentCodeSector, codeSector) {
   var i;
   var codeview;
   var codetype;
  
   codeview = document.getElementsByClassName("tjh-code-view");
   codetype = document.getElementsByClassName("tjh-code-typ");  
  
   for (i = 0; i < codeview.length; i++) {
     codeview[i].style.display = "none";
   }
     
   for (i = 0; i < codetype.length; i++) {
     codetype[i].className = codetype[i].className.replace(" active", "");
   }
  
   document.getElementById(codeSector).style.display = "block";
   currentCodeSector.currentTarget.className += " active";
}

var message = "<p>By using this site you agree to the use of cookies to make browsing experience better.</p>";
var agree = "<p><a href='#' class='agreeBtn'>I agree</a></p>";
var info = "<p><a href='#' class='readBtn'>Read Here</a> on cookie and privacy information.</p>";

document.getElementById("tjh-info").innerHTML = message + agree + info;

if(localStorage.getItem('cookie_accept') != 'true'){
  $(".tjh-cookie-message").delay(2000).fadeIn();
  // set the cookie for 24 hours
  var date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
  localStorage.removeItem('cookie_accept','true');
}

$('.agreeBtn').click(function() {
  $('.tjh-cookie-message').fadeOut(); 
  localStorage.setItem('cookie_accept','true')
});
