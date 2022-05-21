const open = document.querySelector(".topnav__open--menu");
const topnavUl = document.querySelector(".topnav__ul");
const close = document.querySelector(".topnav__close--menu");


open.addEventListener("click", ()=>{
	topnavUl.classList.toggle("topnav__menu--visible")
	open.classList.replace("topnav__open--menu", "close__visible")
	close.classList.add("topnav__open--menu")
});

close.addEventListener("click", ()=>{
	topnavUl.classList.remove("topnav__menu--visible")
	close.classList.replace("topnav__open--menu", "close__visible")
	open.classList.replace("close__visible", "topnav__open--menu")
	close.classList.remove("close__visible")
});

const menuLinks = document.querySelectorAll(`.topnav__ul a[href^="#"]`);

menuLinks.forEach(menuLink => {
	menuLink.addEventListener("click", function() {
		topnavUl.classList.remove("topnav__menu--visible")
		close.classList.replace("topnav__open--menu", "close__visible")
	    open.classList.replace("close__visible", "topnav__open--menu")
	    close.classList.remove("close__visible")
	})
});