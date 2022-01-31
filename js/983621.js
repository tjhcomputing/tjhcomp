window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("tjh-s-nav").style.height = "70px";
	document.getElementById("tjh-s-nav").style.position = "fixed";
	document.getElementById("tjh-s-nav").style.top = 0;
    document.getElementById("tjh-warning-msg").style.top = "70px";
	document.getElementById("tjh-warning-msg").style.position = "fixed";
  } else {
    document.getElementById("tjh-s-nav").style.height = "35px";
	document.getElementById("tjh-s-nav").style.position = "absolute";
	document.getElementById("tjh-s-nav").style.top = "65px";
    document.getElementById("tjh-warning-msg").style.top = "100px";
	document.getElementById("tjh-warning-msg").style.position = "absolute";
  }
}

function commentSelect(com, comsys) {
  var commentsys, commentplugin, i;
  
  commentsys = document.getElementsByClassName("tjh-cmnt-tb-cont");
  for (i=0; i < commentsys.length; i++) {
    commentsys[i].style.display = "none";
  }
  
  commentplugin = document.getElementsByClassName("tjh-cmnt-tab");
  for (i=0; i < commentplugin.length; i++) {
    commentplugin[i].className = commentplugin[i].className.replace(" tjh-cmnt-opn", "");
  }
  
  document.getElementById(comsys).style.display="block";
  com.currentTarget.className += " tjh-cmnt-opn";
}

document.getElementById("tjh-warning-msg").innerHTML = "<div class='tjh-warn tjh-w-m'>" +
//"<span class='fa fa-warning'></span> " + 
"<span class='fa fa-wrench'></span> " + 
"Currently site testing. Content coming soon..." + 
" <span class='fa fa-wrench'></span>" + 
//"<span class='fa fa-warning'></span> " + 
"</div>";
