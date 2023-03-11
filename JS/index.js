///  <reference types="../@types/jquery"/>

import { Home } from "./home.js";
import { Details } from "./details.js";
import { Duration } from "./duration.js";
import { Contact } from "./contact.js";

const toggleSideBar = $("#toggleSideBar"),
  closeSideBar = $("#closeSideBar"),
  sideBar = $("#sideBar"),
  sideBarContent = $(".sideBar-Content"),
  singersHeading = $(".singer-item h1"),
  durationDate = $("#duration .duration-item span"),
  messageContent = $("#contact textarea"),
  messageNumberCount = $("#contact #charachterNumbers");

const home = new Home(sideBar, sideBarContent); // new Home instance
const details = new Details(singersHeading); // new Details instance
const duration = new Duration(durationDate); // new Duration instance
const contact = new Contact(messageContent, messageNumberCount); // new Contact instance

toggleSideBar.click(home.toggleSideBar); // toggle sidebar
closeSideBar.click(home.closeSideBar); // close sidebar

singersHeading.click(function (e) {
  details.togglesDurations(e); // toggle durations
});

duration.timer(); // Start timer

messageContent.bind("input propertychange", function (e) {
  contact.displayNumberOfEnteredCharacters(e); // display number of entered characters
});

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});
