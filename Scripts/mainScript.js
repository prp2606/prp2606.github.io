// Scroll to top
const topBtn = document.getElementById("scrollToTop");
const aboutMe = document.getElementById("aboutMe");
const skillsAndEducation = document.getElementById("skillsAndEducation");
const front = document.getElementById("front");
const myWork = document.getElementById("myWork");
const contactMe = document.getElementById("contactMe");

window.onscroll = () => {
  if (document.documentElement.scrollTop <= 30) {
    topBtn.style.display = "none";
    aboutMe.style.animationPlayState = "paused";
    skillsAndEducation.style.animationPlayState = "paused";
    front.style.animationPlayState = "paused";
    myWork.style.animationPlayState = "paused";
    contactMe.style.animationPlayState = "paused";
  } else if (
    document.documentElement.scrollTop > 30 &&
    document.documentElement.scrollTop <= 300
  ) {
    topBtn.style.display = "inline";
    aboutMe.style.animationPlayState = "paused";
    front.style.animationPlayState = "paused";
    skillsAndEducation.style.animationPlayState = "paused";
    myWork.style.animationPlayState = "paused";
    contactMe.style.animationPlayState = "paused";
  } else if (
    document.documentElement.scrollTop > 300 &&
    document.documentElement.scrollTop <= 1000
  ) {
    topBtn.style.display = "inline";
    aboutMe.style.animationPlayState = "running";
    front.style.animationPlayState = "running";
    skillsAndEducation.style.animationPlayState = "paused";
    myWork.style.animationPlayState = "paused";
    contactMe.style.animationPlayState = "paused";
  } else if (
    document.documentElement.scrollTop > 1000 &&
    document.documentElement.scrollTop <= 1750
  ) {
    topBtn.style.display = "inline";
    aboutMe.style.animationPlayState = "running";
    front.style.animationPlayState = "running";
    skillsAndEducation.style.animationPlayState = "running";
    myWork.style.animationPlayState = "paused";
    contactMe.style.animationPlayState = "paused";
  } else if (
    document.documentElement.scrollTop > 1750 &&
    document.documentElement.scrollTop <= 2700
  ) {
    topBtn.style.display = "inline";
    aboutMe.style.animationPlayState = "running";
    front.style.animationPlayState = "running";
    skillsAndEducation.style.animationPlayState = "running";
    myWork.style.animationPlayState = "running";
    contactMe.style.animationPlayState = "paused";
  } else if (document.documentElement.scrollTop > 2700) {
    topBtn.style.display = "inline";
    aboutMe.style.animationPlayState = "running";
    front.style.animationPlayState = "running";
    skillsAndEducation.style.animationPlayState = "running";
    myWork.style.animationPlayState = "running";
    contactMe.style.animationPlayState = "running";
  }
};

const toTop = () => {
  document.documentElement.scrollTop = 0;
};
// End Scroll to top

// Activated tab in Navigation Menu
const navLinks = document.querySelectorAll(".navLinks>a");
const activateTab = (link) => {
  for (let i = 0; i < navLinks.length; i++) {
    let currentLink = navLinks[i].innerText;
    let currentLinksP = navLinks[i].lastChild;
    if (currentLink === link) {
      currentLinksP.style.border = "0.2px solid white";
    } else {
      currentLinksP.style.border = "0.2px solid transparent";
    }
  }
};
// End Activated tab in Navigation Menu

// Dynamic text Intro section
const dynamicSpan = document.querySelector(".dynamicPhrase");
const cursorBlink = document.querySelector(".cursor");

const typewriter = [
  "Hello, કેમ છો, नमस्कार!",
  "Welcome to my Portfolio.",
  "Let me walk you through my profile.",
];
const typingDelay = 100;
const eraseDelay = 50;
const nextStringDelay = 1500;
let typewriterIndex = 0;
let typewriterStringIndex = 0;

const type = () => {
  if (typewriterStringIndex < typewriter[typewriterIndex].length) {
    if (!cursorBlink.classList.contains("typing")) {
      cursorBlink.classList.add("typing");
    }

    dynamicSpan.textContent += typewriter[typewriterIndex].charAt(
      typewriterStringIndex
    );
    typewriterStringIndex++;

    setTimeout(type, typingDelay);
  } else {
    cursorBlink.classList.remove("typing");
    setTimeout(erase, nextStringDelay);
  }
};

const erase = () => {
  if (typewriterStringIndex > 0) {
    if (!cursorBlink.classList.contains("typing")) {
      cursorBlink.classList.add("typing");
    }

    dynamicSpan.textContent = typewriter[typewriterIndex].substring(
      0,
      typewriterStringIndex - 1
    );
    typewriterStringIndex--;

    setTimeout(erase, eraseDelay);
  } else {
    cursorBlink.classList.remove("typing");
    typewriterIndex++;
    if (typewriterIndex >= typewriter.length) {
      typewriterIndex = 0;
    }
    setTimeout(type, nextStringDelay);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, nextStringDelay);
});
//End of Dynamic text Intro section

// Color Change Animation
const dynamicPhrase = document.querySelector("#dynamicPhrase>.dynamicPhrase");
const cursor = document.querySelector("#dynamicPhrase>.cursor");
const aboutMeCardBack = document.getElementById("back");
const skillContainer = document.getElementById("skillContainer");
// const color = ["#00dfdf", "#ffb500", "#f62681", "magenta", "#39FF14", "blue"];
const color = [
  "rgb(255, 113, 175)",
  "magenta",
  "rgb(38 255 0)",
  "yellow",
  "transparent",
];
const aboutMeColor = [
  "#fffdd0",
  // "#add8e6",
  "rgb(149, 229, 255)",
  "#ffe5b4",
  "rgb(255, 255, 85)",
  "transparent",
];
const colorDelay = 5000;
let colorIndex = 0;

const nextColor = () => {
  if (colorIndex < color.length - 1) {
    dynamicPhrase.style.color = color[colorIndex];
    cursor.style.backgroundColor = color[colorIndex];
    aboutMeCardBack.style.backgroundColor = aboutMeColor[colorIndex];
    colorIndex++;
    setTimeout(nextColor, colorDelay);
  } else {
    colorIndex = 0;
    nextColor();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(nextColor, colorDelay);
});

// Create a condition that targets viewports at least 768px wide
const mediaQuery1 = window.matchMedia("(max-width: 1280px)");
const mediaQuery2 = window.matchMedia("(max-width: 1340px)");
const mediaQuery3 = window.matchMedia("(max-width: 900px)");
const mediaQuery4 = window.matchMedia("(max-width: 700px)");
const mediaQuery5 = window.matchMedia("(max-width: 600px)");
const toOmit = Array.from(document.getElementsByClassName("tabChange"));

function handleSLaptopChange1(e) {
  if (e.matches) {
    toOmit.forEach((element) => {
      element.style.display = "none";
    });
    aboutMeCardBack.style.backgroundColor = color[color.length - 1];
  } else {
    toOmit.forEach((element) => {
      element.style.display = "block";
    });
  }
}

const primaryinfo = document.querySelector(".primaryInfo");
const secondaryinfo = document.querySelector(".secondaryInfo");
const knowMoreBtn = document.getElementById("btn1");
const backBtn = document.getElementById("btn2");

const handleSLaptopChange2 = (e) => {
  if (e.matches) {
    primaryinfo.style.display = "flex";
    secondaryinfo.style.display = "none";
    knowMoreBtn.style.display = "block";
    backBtn.style.display = "none";
  } else {
    primaryinfo.style.display = "flex";
    secondaryinfo.style.display = "flex";
    knowMoreBtn.style.display = "none";
    backBtn.style.display = "none";
  }
};

const navLink = Array.from(document.getElementsByClassName("navLinks"));
const modesBtns = Array.from(document.querySelectorAll("#modes>span"));
const myImage = document.querySelector("#front>img");

const handleSLaptopChange3 = (e) => {
  if (e.matches) {
    myImage.src = "./Images/Me/me.jpeg";

    modesBtns[0].onclick = () => {
      opaque.style.backgroundColor = "white";
      modes.style.filter = "invert(0%)";
      darkMode.style.display = "inline";
      lightMode.style.display = "none";
      intro.style.filter = "invert(100%)";
      aboutHeading.style.filter = "invert(100%)";
      aboutButton.forEach((element) => {
        element.style.filter = "invert(100%)";
      });
      btn.forEach((element) => {
        element.style.filter = "invert(100%)";
      });
      skillsAndEducation.style.filter = "invert(100%)";
      detail.forEach((element) => {
        element.style.filter = "invert(100%)";
      });
      contactMeTitle.style.filter = "invert(100%)";
      myWorkTitle.style.filter = "invert(100%)";
    };

    modesBtns[1].onclick = () => {
      opaque.style.backgroundColor = "black";
      modes.style.filter = "invert(100%)";
      darkMode.style.display = "none";
      lightMode.style.display = "inline";
      intro.style.filter = "invert(0%)";
      aboutHeading.style.filter = "invert(0%)";
      aboutButton.forEach((element) => {
        element.style.filter = "invert(0%)";
      });
      btn.forEach((element) => {
        element.style.filter = "invert(0%)";
      });
      skillsAndEducation.style.filter = "invert(0%)";
      detail.forEach((element) => {
        element.style.filter = "invert(0%)";
      });
      contactMeTitle.style.filter = "invert(0%)";
      myWorkTitle.style.filter = "invert(0%)";
    };

    navLink.forEach((element) => {
      element.addEventListener("click", () => {
        if (!menuOpen) {
          hamBurgerMenu.classList.add("open");
          navItems.forEach((element) => {
            element.style.height = "90vh";
            element.style.clipPath = "circle(1000px at 93.3% 7.8%)";
          });
          menuOpen = true;
        } else {
          hamBurgerMenu.classList.remove("open");
          navItems.forEach((element) => {
            element.style.height = "0vh";
            element.style.clipPath = "circle(0px at 93.3% 7.8%)";
          });
          menuOpen = false;
        }
      });
    });
  }
};

const leftArrow1 = document.getElementById("leftBtn");
const leftArrow2 = Array.from(document.getElementsByClassName("leftBtn"));
const rightArrow1 = document.getElementById("rightBtn1");
const rightArrow2 = document.getElementById("rightBtn2");
const rightArrow3 = Array.from(document.getElementsByClassName("rightBtn"));

const handleSLaptopChange4 = (e) => {
  if (e.matches) {
    leftArrow1.innerHTML = "&lt;";
    leftArrow2.forEach((element) => {
      element.innerHTML = "&lt;";
    });
    rightArrow1.innerHTML = "&gt;";
    rightArrow2.innerHTML = "&gt;";
    rightArrow3.forEach((element) => {
      element.innerHTML = "&gt;";
    });
    myImage.style.padding = "50px 35px";
  }
};
const handleSLaptopChange5 = (e) => {
  if (e.matches) {
    scrollToTop.innerHTML = "TOP";
  }
};

mediaQuery1.addListener(handleSLaptopChange1);
mediaQuery2.addListener(handleSLaptopChange2);
mediaQuery3.addListener(handleSLaptopChange3);
mediaQuery4.addListener(handleSLaptopChange4);
mediaQuery5.addListener(handleSLaptopChange5);

handleSLaptopChange1(mediaQuery1);
handleSLaptopChange2(mediaQuery2);
handleSLaptopChange3(mediaQuery3);
handleSLaptopChange4(mediaQuery4);
handleSLaptopChange5(mediaQuery5);
// End Color Change Animation

// Hamburger Menu
const hamBurgerMenu = document.getElementById("hamBurger");
const navigation = document.getElementById("navigation");
const navItems = Array.from(document.getElementsByClassName("navItems"));
let menuOpen = false;

hamBurgerMenu.addEventListener("click", () => {
  if (!menuOpen) {
    hamBurgerMenu.classList.add("open");
    navItems.forEach((element) => {
      element.style.height = "90vh";
      element.style.clipPath = "circle(1000px at 93.3% 7.8%)";
    });
    menuOpen = true;
  } else {
    hamBurgerMenu.classList.remove("open");
    navItems.forEach((element) => {
      element.style.height = "0vh";
      element.style.clipPath = "circle(0px at 93.3% 7.8%)";
    });
    menuOpen = false;
  }
});

// End Hamburger Menu

// MyWork Section for Tablet
const tabHelper = document.getElementById("tabHelper");

const goLeft1 = () => {
  tabHelper.style.transform = "translateX(0%)";
};

const goLeft2 = () => {
  tabHelper.style.transform = "translateX(-25%)";
};

const goLeft3 = () => {
  tabHelper.style.transform = "translateX(-50%)";
};

const goLeft4 = () => {
  tabHelper.style.transform = "translateX(-75%)";
};

const goRight1 = () => {
  tabHelper.style.transform = "translateX(-25%)";
};

const goRight2 = () => {
  tabHelper.style.transform = "translateX(-50%)";
};

const goRight3 = () => {
  tabHelper.style.transform = "translateX(-75%)";
};

const goRight4 = () => {
  tabHelper.style.transform = "translateX(0%)";
};

// End MyWork Section for Tablet

// Onclick Events [About section]
const knowMore = (event) => {
  primaryinfo.style.display = "none";
  secondaryinfo.style.display = "flex";
  knowMoreBtn.style.display = "none";
  backBtn.style.display = "block";
};

const back = (event) => {
  primaryinfo.style.display = "flex";
  secondaryinfo.style.display = "none";
  knowMoreBtn.style.display = "block";
  backBtn.style.display = "none";
};
// End Onclick Events [About section]

// Languages progress bar animation
const languageBars = document.querySelectorAll(".lbar");
const frameworkBars = document.querySelectorAll(".fbar");
const goToFrameworks = document.getElementById("goToFrameworks");
const goToLanguages = document.getElementById("goToLanguages");
const skills = document.getElementById("skills");
const skillsAndEducationContainer = document.getElementById(
  "skillsAndEducationContainer"
);

const skillLevelLanguages = [75, 45, 60, 80, 75];
const skillLevelFrameworks = [55, 50, 50, 40, 30];
let progressDelay1 = 100;
let progressDelay2 = 100;

const seeProgress1 = () => {
  for (let language = 0; language < languageBars.length; language++) {
    for (let level = 0; level <= skillLevelLanguages[language]; level++) {
      setTimeout(() => {
        languageBars[language].innerText = level + "%";
        languageBars[language].style.width = `${level}%`;
      }, (progressDelay1 += 10));
    }
  }

  event.target.style.display = "none";
  goToFrameworks.style.display = "inline";
};

const seeProgress2 = () => {
  for (let framework = 0; framework < frameworkBars.length; framework++) {
    for (let level = 0; level <= skillLevelFrameworks[framework]; level++) {
      setTimeout(() => {
        frameworkBars[framework].innerText = level + "%";
        frameworkBars[framework].style.width = `${level}%`;
      }, (progressDelay2 += 10));
    }
  }

  event.target.style.display = "none";
  goToLanguages.style.display = "inline";
};

const dragDown = () => {
  skills.style.transform = "translateY(-50%)";
};

const dragUp = () => {
  skills.style.transform = "translateY(0%)";
};

const goToEducation = () => {
  skillsAndEducationContainer.style.transform = "translateX(-50%)";
};

const goToSkills = () => {
  skillsAndEducationContainer.style.transform = "translateX(0%)";
};
// End Languages progress bar animation

// Mode Swithcing
const modes = document.getElementById("modes");
const darkMode = document.getElementById("darkMode");
const lightMode = document.getElementById("lightMode");
const carDay = document.getElementById("carDayImg");
const carNight = document.getElementById("carNightImg");
const opaque = document.getElementById("opaque");
const intro = document.getElementById("intro");
const aboutHeading = document.querySelector("#aboutMe>h1.title");
const aboutButton = document.querySelectorAll("p>i");
const btn = document.querySelectorAll(".btn");
const title = document.querySelectorAll(".title");
const detail = document.querySelectorAll(".detail");
const footer = document.getElementById("footContent");
const contactMeTitle = document.querySelector("#contactMe>h1.title");
const myWorkTitle = document.querySelector("#myWork>h1.title");

const darkModeOn = () => {
  modes.style.filter = "invert(100%)";
  darkMode.style.display = "none";
  lightMode.style.display = "inline";
  fixedBG.style.backgroundImage = "url('../Images/Backgrounds/bgNight.png')";
  carNight.style.display = "block";
  carDay.style.display = "none";
  opaque.style.opacity = "0.5";
  // intro.style.filter = "invert(0%)";
  aboutHeading.style.filter = "invert(0%)";
  aboutButton.forEach((element) => {
    element.style.filter = "invert(0%)";
  });
  btn.forEach((element) => {
    element.style.filter = "invert(0%)";
  });
  skillsAndEducation.style.filter = "invert(0%)";
  contactMeTitle.style.filter = "invert(0%)";
  myWorkTitle.style.filter = "invert(0%)";
};

const lightModeOn = () => {
  modes.style.filter = "invert(0%)";
  darkMode.style.display = "inline";
  lightMode.style.display = "none";
  fixedBG.style.backgroundImage = "url('../Images/Backgrounds/bgDay5.jpg')";
  carDay.style.display = "block";
  carNight.style.display = "none";
  opaque.style.opacity = "0";
  // intro.style.filter = "invert(100%)";
  aboutHeading.style.filter = "invert(100%)";
  aboutButton.forEach((element) => {
    element.style.filter = "invert(100%)";
  });
  btn.forEach((element) => {
    element.style.filter = "invert(100%)";
  });
  skillsAndEducation.style.filter = "invert(100%)";
  contactMeTitle.style.filter = "invert(100%)";
  myWorkTitle.style.filter = "invert(100%)";
};
// End Mode Swithcing
