document.querySelector('.hamburger').addEventListener('click',()=>{document.querySelector('.nav-link').classList.toggle('expanded');
document.querySelector('.hamburger>span').classList.toggle('line-top');document.querySelector('.hamburger>span:nth-child(2)').classList.toggle('line-mid');document.querySelector('.hamburger>span:last-child').classList.toggle('line-bot');});

/*
window.addEventListener('DOMContentLoaded',()=>{
	console.log('Current page path : ', page.filePath);
});*/