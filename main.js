
import Bound from './node_modules/bounds.js/dist/bounds'

const boundary = Bound({
	margins: { bottom: 0 }
})


const image = document.querySelector('.imgg')
const whenImageEnters = () => {
	image.src = image.dataset.src
	image.classList.add('reveal');
	boundary.unWatch(image)
	console.log('show')
}

boundary.watch(image, whenImageEnters)

function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})











