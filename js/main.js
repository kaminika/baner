const baner = document.getElementsByClassName("banner");

console.log(baner);
    


baner.addEventListener('scroll', function() {
	var scroll = baner.scrollY;
  var sidebar = getElementsByClassName("scroll");
  sidebar.style.transform = 'translateY(' + scroll + 'px)';
});