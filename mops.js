document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     ELEMENTS
  ===================================================== */

  const drawer =
    document.getElementById("appointmentDrawer");

  const toggle =
    document.getElementById("appointmentToggle");

  const closeButton =
    document.getElementById("appointmentClose");

  const backdrop =
    document.getElementById("drawerBackdrop");


  /* =====================================================
     SAFETY CHECK
  ===================================================== */

  if (
    !drawer ||
    !toggle ||
    !closeButton ||
    !backdrop
  ) {
    return;
  }


  /* =====================================================
     OPEN DRAWER
  ===================================================== */

  function openDrawer() {

    drawer.classList.add("open");

    backdrop.classList.add("visible");

    document.body.classList.add("drawer-open");

    drawer.setAttribute(
      "aria-hidden",
      "false"
    );

    toggle.setAttribute(
      "aria-expanded",
      "true"
    );

  }


  /* =====================================================
     CLOSE DRAWER
  ===================================================== */

  function closeDrawer() {

    drawer.classList.remove("open");

    backdrop.classList.remove("visible");

    document.body.classList.remove("drawer-open");

    drawer.setAttribute(
      "aria-hidden",
      "true"
    );

    toggle.setAttribute(
      "aria-expanded",
      "false"
    );

  }


  /* =====================================================
     TOGGLE DRAWER
     
     BOOK AN APPOINTMENT:
     CLOSED → OPEN
     OPEN   → CLOSED
  ===================================================== */

  toggle.addEventListener("click", () => {

    if (
      drawer.classList.contains("open")
    ) {

      closeDrawer();

    } else {

      openDrawer();

    }

  });


  /* =====================================================
     CLOSE BUTTON
  ===================================================== */

  closeButton.addEventListener(
    "click",
    closeDrawer
  );


  /* =====================================================
     BACKDROP
  ===================================================== */

  backdrop.addEventListener(
    "click",
    closeDrawer
  );


  /* =====================================================
     ESCAPE KEY
  ===================================================== */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        drawer.classList.contains("open")
      ) {

        closeDrawer();

      }

    }
  );


  /* =====================================================
     SECTION NAVIGATION
     
     When clicking BOOK while drawer is open,
     close the drawer and then navigate to #book.
  ===================================================== */

  document
    .querySelectorAll(".nav-section a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          if (
            drawer.classList.contains("open")
          ) {

            closeDrawer();

          }

        }
      );

    });


  /* =====================================================
     REVEAL ANIMATIONS
  ===================================================== */

  const reveals =
    document.querySelectorAll(".reveal");


  if (
    "IntersectionObserver" in window
  ) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    reveals.forEach((element) => {

      observer.observe(element);

    });

  } else {

    reveals.forEach((element) => {

      element.classList.add("visible");

    });

  }


});