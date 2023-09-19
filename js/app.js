//Loading du site
window.addEventListener("load", () =>{
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(".loader");
    })
})

// faq de notre page contact
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});


//Gestion du scroll de notre page accueil
window.onscroll = () =>{

    let nav = document.querySelector('nav');

    nav.classList.toggle('sticky', window.scrollY > 100);
}





