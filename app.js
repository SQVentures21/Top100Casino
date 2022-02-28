//navbar

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

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

// starts evaluation c1

$(".btn.one").mouseenter(function () {
  $(".evaluare-text").text("Excelent");
});
$(".btn.two").mouseenter(function () {
  $(".evaluare-text").text("Foarte Bun");
});
$(".btn.three").mouseenter(function () {
  $(".evaluare-text").text("Bun");
});
$(".btn.four").mouseenter(function () {
  $(".evaluare-text").text("Decent");
});
$(".btn.five").mouseenter(function () {
  $(".evaluare-text").text("Slab");
});

$(".rating").mouseleave(function () {
  $(".evaluare-text").text("Lasă o notă!");
});

//end stars

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

// starts evaluation c1

$(".one2").mouseenter(function () {
  $(".evaluare-textModal2").text("Excelent");
});
$(".two2").mouseenter(function () {
  $(".evaluare-textModal2").text("Foarte Bun");
});
$(".three2").mouseenter(function () {
  $(".evaluare-textModal2").text("Bun");
});
$(".four2").mouseenter(function () {
  $(".evaluare-textModal2").text("Decent");
});
$(".five2").mouseenter(function () {
  $(".evaluare-textModal2").text("Slab");
});

$(".rating").mouseleave(function () {
  $(".evaluare-textModal2").text("Lasă o notă!");
});

//end stars

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
