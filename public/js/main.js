// Hamburger Menu Section
const nav = document.querySelector(".js-primary-navigation");
const navToggle = document.querySelector(".js-mobile-nav-toggle");
const navToggleImg = document.querySelector(".js-nav-toggle-img");
const navItems = document.querySelectorAll(".js-nav-item");
const navLinks = document.querySelectorAll(".js-nav-link");
const media = window.matchMedia("(width < 48em)");
const body = document.querySelector("body");
const main = document.querySelector("main");
const currentPageClass = document.body.className;

// Hamburger Menu functions
function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    nav.setAttribute("inert", "");
    nav.style.transition = "none";
  } else {
    // is tablet/desktop
    closeMobileMenu();
    nav.removeAttribute("inert");
  }
}

function openMobileMenu() {
  nav.setAttribute("data-visible", "true");
  nav.removeAttribute("inert");
  nav.removeAttribute("style");
  navToggle.setAttribute("aria-expanded", "false");
  navToggleImg.setAttribute("src", "/assets/images/shared/icon-close.svg");
  main.setAttribute("inert", "");
  bodyScrollLockUpgrade.disableBodyScroll(body);
}

function closeMobileMenu() {
  nav.setAttribute("data-visible", "false");
  nav.setAttribute("inert", "");
  navToggle.setAttribute("aria-expanded", "true");
  navToggleImg.setAttribute("src", "/assets/images/shared/icon-hamburger.svg");
  bodyScrollLockUpgrade.enableBodyScroll(body);
  main.removeAttribute("inert");

  setTimeout(() => {
    nav.style.transition = "none";
  }, 500);
}

// Initialize navigation
setupTopNav(media);

// Hamburger Menu event listeners
navToggle.addEventListener("click", function () {
  const visible = nav.getAttribute("data-visible");
  navToggle.focus();
  if (visible === "false") {
    openMobileMenu();
  } else {
    closeMobileMenu();
  }
});

media.addEventListener("change", setupTopNav);

navLinks.forEach((link) => {
  const linkHref = link.getAttribute("href");
  let pageName = linkHref.split("/").pop().replace(".html", "");
  if (pageName === "index") {
    pageName = "home";
  }
  const isActive = currentPageClass.includes(`${pageName}`);

  if (isActive) {
    link.closest(".js-nav-item").classList.add("active");
  } else {
    link.closest(".js-nav-item").classList.remove("active");
  }
});

// Tabs Section
if (!currentPageClass.includes("home")) {
  const tabList = document.querySelector("[role='tablist']");
  const tabs = tabList?.querySelectorAll("[role='tab']");
  let tabFocus = 0;

  function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;

    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
      tabs[tabFocus].setAttribute("tabindex", "-1");

      if (e.keyCode === keydownRight) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
      } else if (e.keyCode === keydownLeft) {
        tabFocus--;
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute("tabindex", "0");
      tabs[tabFocus].focus();
    }
  }

  function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetPicture = targetTab.getAttribute("data-image");

    const tabContainer = targetTab.parentNode;
    const divContainer = tabContainer.parentNode;
    const tabPanel = divContainer.querySelector(`#${targetPanel}`);
    const pictureEl = divContainer.querySelector(`#${targetPicture}`);

    tabContainer
      .querySelector("[aria-selected='true']")
      .setAttribute("aria-selected", "false");

    targetTab.setAttribute("aria-selected", "true");

    divContainer.querySelectorAll("[role='tabpanel']").forEach((panel) => {
      panel.classList.remove("flex");
      panel.classList.add("hidden");
    });

    tabPanel.classList.remove("hidden");
    tabPanel.classList.add("flex");

    divContainer.querySelectorAll("picture").forEach((picture) => {
      picture.classList.add("hidden");
    });

    pictureEl.classList.remove("hidden");
  }

  // Destination tabs event listeners
  tabList.addEventListener("keydown", changeTabFocus);

  tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabPanel);
  });
}
