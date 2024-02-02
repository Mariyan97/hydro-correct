gsap.from(".navigation index", { duration: 0.5, y: "-100%", ease: "sine.out" });
gsap.from("li", {
  duration: 0.5,
  y: "-100%",
  opacity: 0,
  delay: 0.5,
  ease: "power2.in",
  stagger: 0.2,
});
gsap.from(".logo", {
  duration: 0.6,
  x: "-100%",
  opacity: 0,
  delay: 0.3,
  ease: "ease",
});
gsap.from(".slider-h4-center", {
  duration: 0.5,
  x: "-50%",
  opacity: 0,
  delay: 1,
  ease: "power.in",
});
gsap.from(".slider-h1-center", {
  duration: 0.5,
  y: "100%",
  opacity: 0,
  delay: 1,
  ease: "power2.in",
});
gsap.from(".heading-h2", {
  duration: 0.5,
  y: "-100%",
  opacity: 0,
  delay: 1,
  ease: "power2.in",
});

gsap.from(".button-center", {
  duration: 0.5,
  x: "50%",
  opacity: 0,
  delay: 1,
  ease: "power2.in",
});

// Counter function for the about page!

const shows = document.querySelectorAll(".js-count");

// find the maximum value of all the numbers

const maxNumber = Math.max(
  ...Array.from(shows, (show) => parseInt(show.textContent, 10))
);

shows.forEach((show) => {
  let counter = 0,
    delay = 1,
    x = maxNumber / 4,
    y = 1;

  // Delete the "+" sign from the number before using it
  const originalNumber = parseInt(show.textContent, 10);

  counter_js();

  function counter_js() {
    y++;
    delay = x - y;

    // Use the original value without the "+" sign
    show.textContent = counter.toString() + "+";
    counter++;

    if (counter <= originalNumber) {
      setTimeout(function () {
        counter_js();
      }, delay);
    }
  }
});
