const cardUI = document.querySelectorAll(".card");

cardUI.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (
      !e.target.parentElement.parentElement.children[1].classList.contains(
        "check"
      )
    ) {
      e.target.parentElement.children[0].classList.add("titleCheck");
      e.target.parentElement.parentElement.children[1].classList.add("check");
    } else if (
      e.target.parentElement.parentElement.children[1].classList.contains(
        "check"
      )
    ) {
      e.target.parentElement.children[0].classList.remove("titleCheck");
      e.target.parentElement.parentElement.children[1].classList.remove(
        "check"
      );
    }

    if (!e.target.parentElement.children[1].classList.contains("check")) {
      e.target.children[0].classList.add("titleCheck");
      e.target.parentElement.children[1].classList.add("check");
    } else if (e.target.parentElement.children[1].classList.contains("check")) {
      e.target.children[0].classList.remove("titleCheck");
      e.target.parentElement.children[1].classList.remove("check");
    }
  });
});
