
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function positionScroll() {
	if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
		document.getElementById("header").style.paddingBottom = "4px";
		document.getElementById("side-nav").style.position = "fixed";
		document.getElementById("side-nav").style.marginTop = "54px";
		document.getElementById("ad-box").style.position = "fixed";
		document.getElementById("ad-box").style.top = "60px";
	} else {
		document.getElementById("header").style.paddingBottom = 0;
		document.getElementById("side-nav").style.position = "absolute";
		document.getElementById("side-nav").style.marginTop = "80px";
		document.getElementById("ad-box").style.position = "absolute";
		document.getElementById("ad-box").style.top = "90px";
	}
}

function scrollToTop() {
	if (document.documentElement.scrollTop > 350 || document.body.scrollTop > 350) {
		document.getElementById("scroll-top").style.display = "block";
	} else {
		document.getElementById("scroll-top").style.display = "none";
	}
}

window.onscroll = function() { positionScroll(); scrollToTop(); };
