const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
   navToggle.addEventListener("click", () => {
      navMenu.classList.add('show__sidebar');
   });
}
if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove('show__sidebar');
   });
}


// ============================== SKILLLS TABS
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')

            tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active')
        })
    })

// Show more
document.addEventListener('DOMContentLoaded', function () {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const projectContainer = document.querySelector('.work__container');

    showMoreBtn.addEventListener('click', function () {
        // Toggle visibility of additional project cards
        const hiddenProjects = document.querySelectorAll('.work__card:nth-child(n+5)');
        hiddenProjects.forEach(project => {
            project.style.display = (project.style.display === 'none' || project.style.display === '') ? 'block' : 'none';
        });

        // Update button text based on visibility
        const buttonText = (showMoreBtn.innerText === 'Show more') ? 'Show less' : 'Show more';
        showMoreBtn.innerText = buttonText;
    });
});


// Work Popup
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("uil-info-circle")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement.parentElement);
    }
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}


/* ========================= Typing Animation ========================= */
let typed = new Typed(".typing", {
    strings:["", "ML Developer", "Front End Developer", "Coder"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

// scroll sections active link
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link");
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link");
        }
    });
}