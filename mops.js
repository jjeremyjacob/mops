/* =====================================================
   JASON DEVASTATION
   MOPS.JS
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {


    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuButton =
      document.querySelector(
        ".menu-button"
      );

    const navigation =
      document.querySelector(
        ".navigation"
      );


    function closeMenu() {

      if (
        !menuButton ||
        !navigation
      ) {
        return;
      }


      menuButton.classList.remove(
        "open"
      );


      navigation.classList.remove(
        "open"
      );


      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );


      document.body.classList.remove(
        "menu-open"
      );

    }


    if (
      menuButton &&
      navigation
    ) {


      menuButton.addEventListener(
        "click",
        () => {

          const isOpen =
            !navigation.classList.contains(
              "open"
            );


          menuButton.classList.toggle(
            "open",
            isOpen
          );


          navigation.classList.toggle(
            "open",
            isOpen
          );


          menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
          );


          document.body.classList.toggle(
            "menu-open",
            isOpen
          );

        }
      );


      navigation
        .querySelectorAll("a")
        .forEach(
          link => {

            link.addEventListener(
              "click",
              () => {

                closeMenu();

              }
            );

          }
        );

    }



    /* =================================================
       ESCAPE KEY
    ================================================= */

    document.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Escape"
        ) {

          closeMenu();

        }

      }
    );



    /* =================================================
       DESKTOP MENU RESET
    ================================================= */

    window.addEventListener(
      "resize",
      () => {

        if (
          window.innerWidth > 720
        ) {

          closeMenu();

        }

      }
    );



    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements =
      document.querySelectorAll(
        ".reveal"
      );


    if (
      "IntersectionObserver"
      in window
    ) {


      const observer =
        new IntersectionObserver(
          entries => {

            entries.forEach(
              entry => {

                if (
                  !entry.isIntersecting
                ) {

                  return;

                }


                entry.target.classList.add(
                  "visible"
                );


                observer.unobserve(
                  entry.target
                );

              }
            );

          },
          {
            threshold: 0.1,

            rootMargin:
              "0px 0px -60px 0px"
          }
        );


      revealElements.forEach(
        element => {

          observer.observe(
            element
          );

        }
      );


    } else {


      revealElements.forEach(
        element => {

          element.classList.add(
            "visible"
          );

        }
      );

    }



    /* =================================================
       SMOOTH INTERNAL LINKS
    ================================================= */

    document
      .querySelectorAll(
        'a[href^="#"]'
      )
      .forEach(
        link => {

          link.addEventListener(
            "click",
            event => {

              const targetID =
                link.getAttribute(
                  "href"
                );


              if (
                !targetID ||
                targetID === "#"
              ) {

                return;

              }


              const target =
                document.querySelector(
                  targetID
                );


              if (!target) {

                return;

              }


              event.preventDefault();


              target.scrollIntoView({
                behavior:
                  "smooth",

                block:
                  "start"
              });

            }
          );

        }
      );



    /* =================================================
       IMAGE ERROR REPORTING
    ================================================= */

    document
      .querySelectorAll("img")
      .forEach(
        image => {

          image.addEventListener(
            "error",
            () => {

              console.warn(
                "Image failed to load:",
                image.src
              );

            }
          );

        }
      );


  }
);
