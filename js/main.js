/* ===================================
   Argentina Payment Gateway
   Buenos Aires FinTech JS
=================================== */


/* ===================================
   Mobile Menu
=================================== */


const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector(".nav");


if (menuBtn && nav) {


    menuBtn.addEventListener("click", () => {


        nav.classList.toggle("active");


        menuBtn.classList.toggle("open");


    });


}





// 点击导航自动关闭手机菜单

const navLinks = document.querySelectorAll(".nav a");


navLinks.forEach(link => {


    link.addEventListener("click", () => {


        if (nav.classList.contains("active")) {


            nav.classList.remove("active");


        }


    });


});







/* ===================================
   Header Scroll Effect
=================================== */


const header = document.querySelector(".header");


window.addEventListener("scroll", () => {


    if (window.scrollY > 50) {


        header.classList.add("scrolled");


    } else {


        header.classList.remove("scrolled");


    }


});








/* ===================================
   Number Counter Animation
=================================== */



function counterAnimation(element) {


    const target = Number(
        element.getAttribute("data-number")
    );


    let current = 0;


    const speed = target / 80;



    const timer = setInterval(() => {


        current += speed;



        if (current >= target) {


            current = target;


            clearInterval(timer);


        }



        element.innerHTML =
            Math.floor(current);



    }, 20);



}






const counters =
    document.querySelectorAll("[data-number]");



let counterStarted = false;



function startCounter() {


    if (counterStarted)
        return;



    counters.forEach(counter => {


        counterAnimation(counter);


    });


    counterStarted = true;


}







/* ===================================
   Counter Observer
=================================== */


const statsSection =
    document.querySelector(".statistics");



if (statsSection) {


    const counterObserver =
        new IntersectionObserver((entries) => {


            entries.forEach(entry => {


                if (entry.isIntersecting) {


                    startCounter();


                    counterObserver.disconnect();


                }


            });



        }, {
            threshold: .5
        });



    counterObserver.observe(statsSection);



}








/* ===================================
   Statistics Section Counter
=================================== */


const statsNumbers =
    document.querySelectorAll(
        ".stats-item strong"
    );



let statsStarted = false;



function statsCounter() {


    if (statsStarted)
        return;


    statsNumbers.forEach(item => {


        let target =
            Number(item.dataset.number);



        let value = 0;



        let interval =
            setInterval(() => {


                value += target / 100;



                if (value >= target) {


                    value = target;


                    clearInterval(interval);


                }



                item.innerHTML =
                    Math.floor(value);



            }, 20);



    });



    statsStarted = true;


}






const statsBox =
    document.querySelector(".stats-box");



if (statsBox) {


    const statsObserver =
        new IntersectionObserver((entries) => {


            entries.forEach(entry => {


                if (entry.isIntersecting) {


                    statsCounter();


                    statsObserver.disconnect();


                }


            });


        }, {
            threshold: .5
        });



    statsObserver.observe(statsBox);


}









/* ===================================
   Scroll Reveal Animation
=================================== */


const revealElements =
    document.querySelectorAll(
        ".capability-card,"
        + ".advantage-card,"
        + ".solution-card,"
        + ".news-card,"
        + ".dashboard-card"
    );





revealElements.forEach(el => {


    el.classList.add("reveal");


});







const revealObserver =
    new IntersectionObserver((entries) => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.classList.add(
                    "active"
                );



                revealObserver.unobserve(
                    entry.target
                );



            }


        });



    }, {
        threshold: .15
    });






revealElements.forEach(el => {


    revealObserver.observe(el);


});









/* ===================================
   Smooth Anchor Scroll
=================================== */


document.querySelectorAll(
    'a[href^="#"]'
)
    .forEach(anchor => {


        anchor.addEventListener(
            "click",
            function (e) {


                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );



                if (target) {


                    e.preventDefault();



                    target.scrollIntoView({

                        behavior: "smooth"

                    });


                }



            });


    });








/* ===================================
   Dashboard Floating Animation
=================================== */


const floatCards =
    document.querySelectorAll(
        ".float-card"
    );



floatCards.forEach((card, index) => {


    card.style.animationDelay =
        `${index * 1}s`;



});







/* ===================================
   Page Loading Effect
=================================== */


window.addEventListener(
    "load",
    () => {


        document.body.classList.add(
            "loaded"
        );



    });








/* ===================================
   Prevent Image Drag
=================================== */


document.querySelectorAll("img")
    .forEach(img => {


        img.addEventListener(
            "dragstart",
            e => {


                e.preventDefault();


            });


    });