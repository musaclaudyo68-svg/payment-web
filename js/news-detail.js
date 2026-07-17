/* ============================
 News Detail JS
============================ */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        const header =
            document.querySelector(".header");


        window.addEventListener(
            "scroll",
            () => {


                if (window.scrollY > 50) {

                    header.classList.add(
                        "scrolled"
                    );

                } else {

                    header.classList.remove(
                        "scrolled"
                    );

                }


            });


        /* mobile menu */


        const menu =
            document.querySelector(".menu-btn");


        const nav =
            document.querySelector(".nav");



        if (menu) {


            menu.onclick = () => {


                nav.classList.toggle(
                    "active"
                );


            }


        }



    });