const navLinks = document.querySelectorAll(".nav-link");
const hamburgerMenu = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const disableScreen = document.querySelector(".disable-screen");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    navLink.classList.add("active");
    hamburgerMenu.classList.remove("show");
    navBar.classList.remove("show");
    if (!hamburgerMenu.classList.contains("show")) {
      disableScreen.classList.add("fadeOut");
      setTimeout(() => {
        disableScreen.classList.remove("show");
        disableScreen.classList.remove("fadeOut");
      }, 300);
    }
  });
});

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("show");
  navBar.classList.toggle("show");
  disableScreen.classList.add("show");
  if (!hamburgerMenu.classList.contains("show")) {
    disableScreen.classList.add("fadeOut");
    setTimeout(() => {
      disableScreen.classList.remove("show");
      disableScreen.classList.remove("fadeOut");
    }, 300);
  }
  if (hamburgerMenu.classList.contains("show")) {
    disableScreen.addEventListener("click", () => {
      hamburgerMenu.classList.remove("show");
      navBar.classList.remove("show");
      disableScreen.classList.add("fadeOut");
      setTimeout(() => {
        disableScreen.classList.remove("show");
        disableScreen.classList.remove("fadeOut");
      }, 300);
    });
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   const navLinks = document.querySelectorAll(".nav-bar .nav-item a");
//   const sections = document.querySelectorAll(".space-section");

//   function setActiveLink() {
//     let currentSection = "";

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.offsetHeight;

//       if (window.scrollY >= sectionTop - sectionHeight / 3) {
//         currentSection = section.getAttribute("id");
//       }
//     });

//     navLinks.forEach((link) => {
//       link.classList.remove("active");
//       if (link.getAttribute("href").includes(currentSection)) {
//         link.classList.add("active");
//       }
//     });
//   }
//   window.addEventListener("scroll", setActiveLink());
// });

// scroll smooth
document.querySelectorAll(".nav-bar .nav-item a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

document
  .querySelector(".introduction a")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

document.querySelectorAll(".nav-bar-footer ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// ambil data JSON menggunakan JQuery

const getDataSertification = () => {
  $.ajax({
    url: "../public/data/sertification.json",
    success: (results) => {
      let cards = "";
      results.forEach((result) => {
        cards += showCertification(result);
        $(".certification-list").html(cards);
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
};

getDataSertification();

const getDataPortofolio = () => {
  $.ajax({
    url: "../public/data/portofolio.json",
    success: (results) => {
      let cards = "";
      let x = 0;

      results.forEach((result) => {
        cards += showPortofolio(result, x);
        $(".portofolio-list").html(cards);

        x++;
      });

      for (let i = 0; i < results.length; i++) {
        if (i < results.length) {
          let contentCards = "";
          results[i].listPorts.forEach((listPort) => {
            if (results[i].partTitle === "Video Editor") {
              contentCards += contentCardsVideo(listPort);
            } else {
              contentCards += contentCardsPhoto(listPort);
            }
            $(`.content-item-portofolio-${i}`).html(contentCards);
          });
        }
      }
    },
    error: (e) => {
      console.log(e);
    },
  });
};

getDataPortofolio();

// Update UI
const showCertification = (result) => {
  return `<div class="card">
              <img src="${result.path.mainPath}" alt="img-card"/>
              <h3>${result.title}</h3>
              <p>${result.publisher}</p>
              <p>${result.year} - ${result.exp}</p>
            </div>`;
};

const showPortofolio = (result, x) => {
  return `<h2 class="title-content">${result.partTitle}</h2>
            <div class="content-item-row content-item-portofolio-${x}"></div>`;
};

const contentCardsPhoto = (listPort) => {
  return `<div class="card mt-5">
                <img src="${listPort.imgPath}" alt="img-card"/>
                <p>${listPort.title}</p>
              <a href="${listPort.url}">
                <button class="btn blue-theme mt-3">Lihat</button>
              </a>
            </div>`;
};
const contentCardsVideo = (listPort) => {
  return `<div class="card mt-5">
              <iframe width="100%" height="180px" 
                src="https://www.youtube.com/embed/${listPort.videoId}" 
                title="${listPort.title}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
              <p>${listPort.title}</p>
              <a href="${listPort.url}">
                <button class="btn blue-theme mt-3">Lihat</button>
              </a>
            </div>`;
};
