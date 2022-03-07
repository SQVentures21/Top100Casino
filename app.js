//css progressbar

$(function () {
  // Remove svg.radial-progress .complete inline styling
  $("svg.radial-progress").each(function (index, value) {
    $(this).find($("circle.complete")).removeAttr("style");
  });

  // Activate progress animation on scroll
  $(window)
    .scroll(function () {
      $("svg.radial-progress").each(function (index, value) {
        // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
        if (
          $(window).scrollTop() >
            $(this).offset().top - $(window).height() * 0.75 &&
          $(window).scrollTop() <
            $(this).offset().top + $(this).height() - $(window).height() * 0.25
        ) {
          // Get percentage of progress
          percent = $(value).data("percentage");
          // Get radius of the svg's circle.complete
          radius = $(this).find($("circle.complete")).attr("r");
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - (percent * circumference) / 100;
          // Transition progress for 1.25 seconds
          $(this)
            .find($("circle.complete"))
            .animate({ "stroke-dashoffset": strokeDashOffset }, 1250);
        }
      });
    })
    .trigger("scroll");
});

// stars

// star 1

$(".starOne-1").mouseenter(function () {
  $(".evaluare-text").text("Slab");
});
$(".starOne-2").mouseenter(function () {
  $(".evaluare-text").text("Decent");
});
$(".starOne-3").mouseenter(function () {
  $(".evaluare-text").text("Bun");
});
$(".starOne-4").mouseenter(function () {
  $(".evaluare-text").text("Foarte Bun");
});
$(".starOne-5").mouseenter(function () {
  $(".evaluare-text").text("Excelent");
});

// $(".rating").mouseleave(function () {
//   $(".evaluare-textModal2").text("Lasă o notă!");
// });

$(".ratingStarOne").click(function () {
  $(".evaluare-text").text("Multumim!");
});

const containerStarOne = document.querySelector(".ratingStarOne");
const itemsStarOne = containerStarOne.querySelectorAll(".rating-item");
containerStarOne.onclick = (e) => {
  const elClass = e.target.classList;
  // change the rating if the user clicks on a different star
  if (!elClass.contains("active")) {
    itemsStarOne.forEach(
      // reset the active class on the star
      (item) => item.classList.remove("active")
    );
    console.log(e.target.getAttribute("data-rate"));
    elClass.add("active"); // add active class to the clicked star
  }
};

// star 2

$(".starTwo-1").mouseenter(function () {
  $(".evaluare-textStarTwo").text("Slab");
});
$(".starTwo-2").mouseenter(function () {
  $(".evaluare-textStarTwo").text("Decent");
});
$(".starTwo-3").mouseenter(function () {
  $(".evaluare-textStarTwo").text("Bun");
});
$(".starTwo-4").mouseenter(function () {
  $(".evaluare-textStarTwo").text("Foarte Bun");
});
$(".starTwo-5").mouseenter(function () {
  $(".evaluare-textStarTwo").text("Excelent");
});

$(".ratingStarTwo").click(function () {
  $(".evaluare-textStarTwo").text("Multumim!");
});

const containerStarTwo = document.querySelector(".ratingStarTwo");
const itemsStarTwo = containerStarTwo.querySelectorAll(".rating-item");
containerStarTwo.onclick = (e) => {
  const elClass = e.target.classList;
  // change the rating if the user clicks on a different star
  if (!elClass.contains("active")) {
    itemsStarTwo.forEach(
      // reset the active class on the star
      (item) => item.classList.remove("active")
    );
    elClass.add("active"); // add active class to the clicked star
  }
};

//star3
$(".starThree-1").mouseenter(function () {
  $(".evaluare-textStarThree").text("Slab");
});
$(".sstarThree-2").mouseenter(function () {
  $(".evaluare-textStarThree").text("Decent");
});
$(".starThree-3").mouseenter(function () {
  $(".evaluare-textStarThree").text("Bun");
});
$(".starThree-4").mouseenter(function () {
  $(".evaluare-textStarThree").text("Foarte Bun");
});
$(".starThree-5").mouseenter(function () {
  $(".evaluare-textStarThree").text("Excelent");
});

$(".ratingStarThree").click(function () {
  $(".evaluare-textStarThree").text("Multumim!");
});

const containerStarThree = document.querySelector(".ratingStarThree");
const itemsStarThree = containerStarThree.querySelectorAll(".rating-item");
containerStarThree.onclick = (e) => {
  const elClass = e.target.classList;
  // change the rating if the user clicks on a different star
  if (!elClass.contains("active")) {
    itemsStarThree.forEach(
      // reset the active class on the star
      (item) => item.classList.remove("active")
    );
    elClass.add("active"); // add active class to the clicked star
  }
};

//star4
$(".starFour-1").mouseenter(function () {
  $(".evaluare-textStarFour").text("Slab");
});
$(".starFour-2").mouseenter(function () {
  $(".evaluare-textStarFour").text("Decent");
});
$(".starFour-3").mouseenter(function () {
  $(".evaluare-textStarFour").text("Bun");
});
$(".starFour-4").mouseenter(function () {
  $(".evaluare-textStarFour").text("Foarte Bun");
});
$(".starFour-5").mouseenter(function () {
  $(".evaluare-textStarFour").text("Excelent");
});

$(".ratingStarFour").click(function () {
  $(".evaluare-textStarFour").text("Multumim!");
});

const containerStarFour = document.querySelector(".ratingStarFour");
const itemsStarFour = containerStarFour.querySelectorAll(".rating-item");
containerStarFour.onclick = (e) => {
  const elClass = e.target.classList;
  // change the rating if the user clicks on a different star
  if (!elClass.contains("active")) {
    itemsStarFour.forEach(
      // reset the active class on the star
      (item) => item.classList.remove("active")
    );
    elClass.add("active"); // add active class to the clicked star
  }
};

//star5
$(".starFive-1").mouseenter(function () {
  $(".evaluare-textStarFive").text("Slab");
});
$(".starFive-2").mouseenter(function () {
  $(".evaluare-textStarFive").text("Decent");
});
$(".starFive-3").mouseenter(function () {
  $(".evaluare-textStarFive").text("Bun");
});
$(".starFive-4").mouseenter(function () {
  $(".evaluare-textStarFive").text("Foarte Bun");
});
$(".starFive-5").mouseenter(function () {
  $(".evaluare-textStarFive").text("Excelent");
});

$(".ratingStarFive").click(function () {
  $(".evaluare-textStarFive").text("Multumim!");
});

const containerStarFive = document.querySelector(".ratingStarFive");
const itemsStarFive = containerStarFive.querySelectorAll(".rating-item");
containerStarFive.onclick = (e) => {
  const elClass = e.target.classList;
  // change the rating if the user clicks on a different star
  if (!elClass.contains("active")) {
    itemsStarFive.forEach(
      // reset the active class on the star
      (item) => item.classList.remove("active")
    );
    elClass.add("active"); // add active class to the clicked star
  }
};

//star6
$(".starSix-1").mouseenter(function () {
  $(".evaluare-textStarSix").text("Slab");
});
$(".starSix-2").mouseenter(function () {
  $(".evaluare-textStarSix").text("Decent");
});
$(".starSix-3").mouseenter(function () {
  $(".evaluare-textStarSix").text("Bun");
});
$(".starSix-4").mouseenter(function () {
  $(".evaluare-textStarSix").text("Foarte Bun");
});
$(".starSix-5").mouseenter(function () {
  $(".evaluare-textStarSix").text("Excelent");
});

$(".ratingStarSix").click(function () {
  $(".evaluare-textStarSix").text("Multumim!");
});

const containerStarSix = document.querySelector(".ratingStarSix");
const itemsStarSix = containerStarSix.querySelectorAll(".rating-item");
containerStarSix.onclick = (e) => {
  const elClass = e.target.classList;
  // change the rating if the user clicks on a different star
  if (!elClass.contains("active")) {
    itemsStarSix.forEach(
      // reset the active class on the star
      (item) => item.classList.remove("active")
    );
    elClass.add("active"); // add active class to the clicked star
  }
};

//star7
$(".starSeven-1").mouseenter(function () {
  $(".evaluare-textStarSeven").text("Slab");
});
$(".starSeven-2").mouseenter(function () {
  $(".evaluare-textStarSeven").text("Decent");
});
$(".starSeven-3").mouseenter(function () {
  $(".evaluare-textStarSeven").text("Bun");
});
$(".starSeven-4").mouseenter(function () {
  $(".evaluare-textStarSeven").text("Foarte Bun");
});
$(".starSeven-5").mouseenter(function () {
  $(".evaluare-textStarSeven").text("Excelent");
});

$(".ratingStarSeven").click(function () {
  $(".evaluare-textStarSeven").text("Multumim!");
});

const containerStarSeven = document.querySelector(".ratingStarSeven");
const itemsStarSeven = containerStarSeven.querySelectorAll(".rating-item");
containerStarSeven.onclick = (e) => {
  const elClass = e.target.classList;
  // change the rating if the user clicks on a different star
  if (!elClass.contains("active")) {
    itemsStarSeven.forEach(
      // reset the active class on the star
      (item) => item.classList.remove("active")
    );
    elClass.add("active"); // add active class to the clicked star
  }
};

//star8
$(".starEight-1").mouseenter(function () {
  $(".evaluare-textStarEight").text("Slab");
});
$(".starEight-2").mouseenter(function () {
  $(".evaluare-textStarEight").text("Decent");
});
$(".starEight-3").mouseenter(function () {
  $(".evaluare-textStarEight").text("Bun");
});
$(".starEight-4").mouseenter(function () {
  $(".evaluare-textStarEight").text("Foarte Bun");
});
$(".starEight-5").mouseenter(function () {
  $(".evaluare-textStarEight").text("Excelent");
});

$(".ratingStarEight").click(function () {
  $(".evaluare-textStarEight").text("Multumim!");
});

const containerStarEight = document.querySelector(".ratingStarEight");
const itemsStarEight = containerStarEight.querySelectorAll(".rating-item");
containerStarEight.onclick = (e) => {
  const elClass = e.target.classList;
  // change the rating if the user clicks on a different star
  if (!elClass.contains("active")) {
    itemsStarEight.forEach(
      // reset the active class on the star
      (item) => item.classList.remove("active")
    );
    elClass.add("active"); // add active class to the clicked star
  }
};

//star9
$(".starNine-1").mouseenter(function () {
  $(".evaluare-textStarNine").text("Slab");
});
$(".starNine-2").mouseenter(function () {
  $(".evaluare-textStarNine").text("Decent");
});
$(".starNine-3").mouseenter(function () {
  $(".evaluare-textStarNine").text("Bun");
});
$(".starNine-4").mouseenter(function () {
  $(".evaluare-textStarNine").text("Foarte Bun");
});
$(".starNine-5").mouseenter(function () {
  $(".evaluare-textStarNine").text("Excelent");
});

$(".ratingStarNine").click(function () {
  $(".evaluare-textStarNine").text("Multumim!");
});

const containerStarNine = document.querySelector(".ratingStarNine");
const itemsStarNine = containerStarNine.querySelectorAll(".rating-item");
containerStarNine.onclick = (e) => {
  const elClass = e.target.classList;
  // change the rating if the user clicks on a different star
  if (!elClass.contains("active")) {
    itemsStarNine.forEach(
      // reset the active class on the star
      (item) => item.classList.remove("active")
    );
    elClass.add("active"); // add active class to the clicked star
  }
};

//star10
$(".starTen-1").mouseenter(function () {
  $(".evaluare-textStarTen").text("Slab");
});
$(".starTen-2").mouseenter(function () {
  $(".evaluare-textStarTen").text("Decent");
});
$(".starTen-3").mouseenter(function () {
  $(".evaluare-textStarTen").text("Bun");
});
$(".starTen-4").mouseenter(function () {
  $(".evaluare-textStarTen").text("Foarte Bun");
});
$(".starTen-5").mouseenter(function () {
  $(".evaluare-textStarTen").text("Excelent");
});

$(".ratingStarTen").click(function () {
  $(".evaluare-textStarTen").text("Multumim!");
});

const containerStarTen = document.querySelector(".ratingStarTen");
const itemsStarTen = containerStarTen.querySelectorAll(".rating-item");
containerStarTen.onclick = (e) => {
  const elClass = e.target.classList;
  // change the rating if the user clicks on a different star
  if (!elClass.contains("active")) {
    itemsStarTen.forEach(
      // reset the active class on the star
      (item) => item.classList.remove("active")
    );
    elClass.add("active"); // add active class to the clicked star
  }
};

//star11
$(".starEleven-1").mouseenter(function () {
  $(".evaluare-textStarEleven").text("Slab");
});
$(".starEleven-2").mouseenter(function () {
  $(".evaluare-textStarEleven").text("Decent");
});
$(".starEleven-3").mouseenter(function () {
  $(".evaluare-textStarEleven").text("Bun");
});
$(".starEleven-4").mouseenter(function () {
  $(".evaluare-textStarEleven").text("Foarte Bun");
});
$(".starEleven-5").mouseenter(function () {
  $(".evaluare-textStarEleven").text("Excelent");
});

$(".ratingStarEleven").click(function () {
  $(".evaluare-textStarEleven").text("Multumim!");
});

const containerStarEleven = document.querySelector(".ratingStarEleven");
const itemsStarEleven = containerStarEleven.querySelectorAll(".rating-item");
containerStarEleven.onclick = (e) => {
  const elClass = e.target.classList;
  // change the rating if the user clicks on a different star
  if (!elClass.contains("active")) {
    itemsStarEleven.forEach(
      // reset the active class on the star
      (item) => item.classList.remove("active")
    );
    elClass.add("active"); // add active class to the clicked star
  }
};

//star12
$(".starTwelve-1").mouseenter(function () {
  $(".evaluare-textStarTwelve").text("Slab");
});
$(".starTwelve-2").mouseenter(function () {
  $(".evaluare-textStarTwelve").text("Decent");
});
$(".starTwelve-3").mouseenter(function () {
  $(".evaluare-textStarTwelve").text("Bun");
});
$(".starTwelve-4").mouseenter(function () {
  $(".evaluare-textStarTwelve").text("Foarte Bun");
});
$(".starTwelve-5").mouseenter(function () {
  $(".evaluare-textStarTwelve").text("Excelent");
});

$(".ratingStarTwelve").click(function () {
  $(".evaluare-textStarTwelve").text("Multumim!");
});

const containerStarTwelve = document.querySelector(".ratingStarTwelve");
const itemsStarTwelve = containerStarTwelve.querySelectorAll(".rating-item");
containerStarTwelve.onclick = (e) => {
  const elClass = e.target.classList;
  // change the rating if the user clicks on a different star
  if (!elClass.contains("active")) {
    itemsStarTwelve.forEach(
      // reset the active class on the star
      (item) => item.classList.remove("active")
    );
    elClass.add("active"); // add active class to the clicked star
  }
};
//arrow div hide/show

const targetDiv = document.getElementById("myDiv");
const btn = document.getElementById("arrow1");
btn.onclick = function () {
  if (targetDiv.style.display === "none") {
    targetDiv.style.display = "block";
    btn.style.transform = "rotate(180deg)";
  } else {
    targetDiv.style.display = "none";
    btn.style.transform = "rotate(360deg)";
  }
};

// modal 2 show/hide

const targetDiv2 = document.getElementById("myDiv2");
const btn2 = document.getElementById("arrow-2");
btn2.onclick = function () {
  if (targetDiv2.style.display === "none") {
    targetDiv2.style.display = "block";
    btn2.style.transform = "rotate(90deg)";
  } else {
    targetDiv2.style.display = "none";
    btn2.style.transform = "rotate(360deg)";
  }
};

// modal 3 show/hide

const targetDiv3 = document.getElementById("myDiv3");
const btn3 = document.getElementById("arrow-3");
btn3.onclick = function () {
  if (targetDiv3.style.display === "none") {
    targetDiv3.style.display = "block";
    btn3.style.transform = "rotate(180deg)";
  } else {
    targetDiv3.style.display = "none";
    btn3.style.transform = "rotate(360deg)";
  }
};

// modal 4 show/hide

const targetDiv4 = document.getElementById("myDiv4");
const btn4 = document.getElementById("arrow-4");
btn4.onclick = function () {
  if (targetDiv4.style.display === "none") {
    targetDiv4.style.display = "block";
    btn4.style.transform = "rotate(180deg)";
  } else {
    targetDiv4.style.display = "none";
    btn4.style.transform = "rotate(360deg)";
  }
};

// modal 5 show/hide

const targetDiv5 = document.getElementById("myDiv5");
const btn5 = document.getElementById("arrow-5");
btn5.onclick = function () {
  if (targetDiv5.style.display === "none") {
    targetDiv5.style.display = "block";
    btn5.style.transform = "rotate(180deg)";
  } else {
    targetDiv5.style.display = "none";
    btn5.style.transform = "rotate(360deg)";
  }
};

// modal 6 show/hide

const targetDiv6 = document.getElementById("myDiv6");
const btn6 = document.getElementById("arrow-6");
btn6.onclick = function () {
  if (targetDiv6.style.display === "none") {
    targetDiv6.style.display = "block";
    btn6.style.transform = "rotate(180deg)";
  } else {
    targetDiv6.style.display = "none";
    btn6.style.transform = "rotate(360deg)";
  }
};

// modal 7 show/hide

const targetDiv7 = document.getElementById("myDiv7");
const btn7 = document.getElementById("arrow-7");
btn7.onclick = function () {
  if (targetDiv7.style.display === "none") {
    targetDiv7.style.display = "block";
    btn7.style.transform = "rotate(180deg)";
  } else {
    targetDiv7.style.display = "none";
    btn7.style.transform = "rotate(360deg)";
  }
};

// modal 8 show/hide

const targetDiv8 = document.getElementById("myDiv8");
const btn8 = document.getElementById("arrow-8");
btn8.onclick = function () {
  if (targetDiv8.style.display === "none") {
    targetDiv8.style.display = "block";
    btn8.style.transform = "rotate(180deg)";
  } else {
    targetDiv8.style.display = "none";
    btn8.style.transform = "rotate(360deg)";
  }
};

// modal 9 show/hide

const targetDiv9 = document.getElementById("myDiv9");
const btn9 = document.getElementById("arrow-9");
btn9.onclick = function () {
  if (targetDiv9.style.display === "none") {
    targetDiv9.style.display = "block";
    btn9.style.transform = "rotate(180deg)";
  } else {
    targetDiv9.style.display = "none";
    btn9.style.transform = "rotate(360deg)";
  }
};

// modal 10 show/hide

const targetDiv10 = document.getElementById("myDiv10");
const btn10 = document.getElementById("arrow-10");
btn10.onclick = function () {
  if (targetDiv10.style.display === "none") {
    targetDiv10.style.display = "block";
    btn10.style.transform = "rotate(180deg)";
  } else {
    targetDiv10.style.display = "none";
    btn10.style.transform = "rotate(360deg)";
  }
};

// modal 11 show/hide

const targetDiv11 = document.getElementById("myDiv11");
const btn11 = document.getElementById("arrow-11");
btn11.onclick = function () {
  if (targetDiv11.style.display === "none") {
    targetDiv11.style.display = "block";
    btn11.style.transform = "rotate(180deg)";
  } else {
    targetDiv11.style.display = "none";
    btn11.style.transform = "rotate(360deg)";
  }
};

// modal 12 show/hide

const targetDiv12 = document.getElementById("myDiv12");
const btn12 = document.getElementById("arrow-12");
btn12.onclick = function () {
  if (targetDiv12.style.display === "none") {
    targetDiv12.style.display = "block";
    btn12.style.transform = "rotate(180deg)";
  } else {
    targetDiv12.style.display = "none";
    btn12.style.transform = "rotate(360deg)";
  }
};

//last modal

const targetDiv13 = document.getElementById("myDiv13");
const btn13 = document.getElementById("arrow-13");
btn13.onclick = function () {
  if (targetDiv13.style.display === "none") {
    targetDiv13.style.display = "block";
    btn13.style.transform = "rotate(180deg)";
  } else {
    targetDiv13.style.display = "none";
    btn13.style.transform = "rotate(360deg)";
  }
};

const swiper = new Swiper(".swiper", {
  // Optional parameters

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

//accordio

var acc = document.getElementsByClassName("accordio-div1");
var arrowAcordio = document.getElementById("arrow-accordio");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      arrowAcordio.style.transform = "rotate(0deg)";
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      arrowAcordio.style.transform = "rotate(45deg)";
    }
  });
}

//accordio2

var acc2 = document.getElementsByClassName("accordio-div2");
var arrowAcordio2 = document.getElementById("arrow-accordio2");
var i;

for (i = 0; i < acc.length; i++) {
  acc2[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      arrowAcordio2.style.transform = "rotate(0deg)";
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      arrowAcordio2.style.transform = "rotate(45deg)";
    }
  });
}

// accordio3;

var acc3 = document.getElementsByClassName("accordio-div3");
var arrowAcordio3 = document.getElementById("arrow-accordio3");
var i;

for (i = 0; i < acc.length; i++) {
  acc3[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      arrowAcordio3.style.transform = "rotate(0deg)";
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      arrowAcordio3.style.transform = "rotate(45deg)";
    }
  });
}

// accordio4;

var acc4 = document.getElementsByClassName("accordio-div4");
var arrowAcordio4 = document.getElementById("arrow-accordio4");
var i;

for (i = 0; i < acc.length; i++) {
  acc4[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      arrowAcordio4.style.transform = "rotate(0deg)";
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      arrowAcordio4.style.transform = "rotate(45deg)";
    }
  });
}

//scroll to top

$("a[href='#top']").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

//get postion of div

function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}
var x = getOffset(document.querySelector(".wrap-modal-arrow-12")).left;
var y = getOffset(document.querySelector(".wrap-modal-arrow-12")).top;

//hide fixed casino

const buttonHideCasino = document.querySelector(".close-fixed-casino");
const casinoFixedBottom = document.querySelector(".casino-fixed");
let closedPopup = false;

buttonHideCasino.addEventListener("click", () => {
  $(".casino-fixed").fadeOut();
  closedPopup = true;
});

//show position fixed casino

$(document).scroll(function () {
  var scroll = $(this).scrollTop();
  if (scroll > y + 100 && closedPopup === false) {
    $(".casino-fixed").fadeIn();
  } else {
    $(".casino-fixed").fadeOut();
  }
});

console.log(y);

// Get the modal despre noi
var modalDespreNoi = document.getElementById("myModalDespreNoi");

// Get the button that opens the modal
var btnDespreNoi = document.getElementsByClassName("myBtnDespreNoicls");

// Get the <span> element that closes the modal
var closeButtonDespreNoi = document.querySelector(".close1");

// When the user clicks the button, open the modal
btnDespreNoi[0].onclick = function () {
  modalDespreNoi.style.display = "block";
};

btnDespreNoi[1].onclick = function () {
  modalDespreNoi.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
closeButtonDespreNoi.onclick = function () {
  modalDespreNoi.style.display = "none";
};

// // Get the modal contact
var modalContact = document.getElementById("myModalContact");

// Get the button that opens the modal
var btnContact = document.getElementsByClassName("myBtnContact");

// Get the <span> element that closes the modal
var closeButtonContact = document.querySelector(".close2");

// When the user clicks the button, open the modal
btnContact[0].onclick = function () {
  modalContact.style.display = "block";
};

btnContact[1].onclick = function () {
  modalContact.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeButtonContact.onclick = function () {
  modalContact.style.display = "none";
};

//modal newsletter

var modalNewsletter = document.getElementById("myModalNewsletter");

// Get the button that opens the modal
var btnNewsletter = document.getElementById("myBtnNewsletter");

// Get the <span> element that closes the modal
var closeNewsletter = document.querySelector(".closeNewsletter-modal");

// When the user clicks the button, open the modal
btnNewsletter.onclick = function () {
  modalNewsletter.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeNewsletter.onclick = function () {
  modalNewsletter.style.display = "none";
};

//click newsletter change text

function onMouseOut(event) {
  // If the mouse is near the top of the window, show the popup
  if (event.clientY < 50) {
    // Remove this event listener
    document.removeEventListener("mouseout", onMouseOut);

    // Show the popup
    document.getElementById("popup").style.display = "block";
  }
}

document.addEventListener("mouseout", onMouseOut);

const buttonExitPopup = document.querySelector(".exit-popup");

buttonExitPopup.onclick = function () {
  document.getElementById("popup").style.display = "none";
};

//leave counter modal

const countDown = () => {
  const countDate = new Date("March 25 , 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinutes = Math.floor((gap % hour) / minute);
  const textSeconds = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinutes;
  document.querySelector(".second").innerText = textSeconds;

  //zi acutalizata

  document.querySelector(".zi-acutalizata").innerText = textDay;
};

const dataActuala = () => {
  const month = new Array();
  month[0] = "Ianuarie";
  month[1] = "Februarie";
  month[2] = "Martie";
  month[3] = "Aprilie";
  month[4] = "Mai";
  month[5] = "Iunie";
  month[6] = "Iulie";
  month[7] = "August";
  month[8] = "Septembrie";
  month[9] = "Octombrie";
  month[10] = "Noviembrie";
  month[11] = "Decembrie";

  var d = new Date();
  document.querySelector(".luna-actualizata").innerText =
    " " + month[d.getMonth()];
  document.querySelector(".an-acutalizat").innerText = d.getFullYear();
};

setInterval(countDown, 1000);
setInterval(dataActuala, 1000);
