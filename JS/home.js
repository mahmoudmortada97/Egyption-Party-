export class Home {
  constructor(sideBar, sideBarContent) {
    this.sideBar = sideBar;
    this.sideBarContent = sideBarContent;
  }

  toggleSideBar = () => {
    if (this.sideBar.css("left") >= "0px") {
      this.sideBar.animate({ left: -this.sideBarContent.innerWidth() }, 500);
    } else {
      this.sideBar.animate({ left: "0px" }, 500);
    }
  };
  closeSideBar = () => {
    this.sideBar.animate({ left: -this.sideBarContent.innerWidth() }, 500);
  };
}
