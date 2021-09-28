const content = document.querySelector('.content'),
    menu = document.querySelector('.menu'),
    contentbtn = document.getElementById("contentbtn"),
    hamburger = document.querySelector('.hamburger'),
    cross = document.querySelector('.cross');

content.addEventListener('click', () => {
    menu.classList.add('active');
    contentbtn.style.height = "204px";
    hamburger.style.visibility = 'hidden';
    cross.style.visibility = 'visible';
});


const menubtn = document.querySelector('.label'),
    mobmenu = document.querySelector('.mobmenu'),
    close = document.querySelector('.mobmenu__close');

menubtn.addEventListener('click', () => {
    mobmenu.classList.add('clicked');
});

close.addEventListener('click', () => {
    mobmenu.classList.remove('clicked');
});

const extendbtn = document.querySelector('.extendbtn'),
topnews = document.querySelector('.topnews'),
extendbtn2 = document.querySelector('.extendbtn2'),
cat  = document.querySelector('.cats'),
footer  = document.querySelector('.footer');

extendbtn.addEventListener('click', () => {
    topnews.classList.add('activeul');
    topnews.style.display='block';
    cat.style.display='none';
    footer.style.height = "850px";
    extendbtn.src="icons/fill2.svg";
});


extendbtn2.addEventListener('click', () => {
    cat.classList.add('activeul');
    cat.style.display='block';
    topnews.style.display='none';
    footer.style.height = "817px";
    extendbtn2.src="icons/fill2.svg";
    extendbtn2.style.marginTop='-22px';
});


