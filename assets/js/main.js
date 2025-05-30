/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
	const mainImg = document.querySelector('.details__img');
	const smallImg = document.querySelectorAll('.details__small-img');

	smallImg.forEach(img => {
		img.addEventListener('click', function () {
			mainImg.src = this.src;
		});
	});
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper('.categories__container', {
	spaceBetween: 24,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1400: {
			slidesPerView: 6,
			spaceBetween: 24,
		},
	},
});

/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper('.new__container', {
	spaceBetween: 24,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		350: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 24,
		},
		1200: {
			slidesPerView: 5,
			spaceBetween: 24,
		},
		1400: {
			slidesPerView: 6,
			spaceBetween: 24,
		},
	},
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('.tab__content');

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.target);
		if (target) {
			tabContents.forEach(tabContent => {
				tabContent.classList.remove('active-tab');
			});
			target.classList.add('active-tab');
		}

		tabs.forEach(t => {
			t.classList.remove('active-tab');
		});
		tab.classList.add('active-tab');
	});
});
