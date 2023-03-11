export class Details {
  constructor(singersHeading) {
    this.singersHeading = singersHeading;
  }

  togglesDurations = (e) => {
    const allParagraphElementsExceptClicked = $(".singer-item p").not(
      $(e.target).siblings()
    );
    for (let i = 0; i < allParagraphElementsExceptClicked.length; i++) {
      allParagraphElementsExceptClicked.eq(i).slideUp(500);
    }
    $(e.target).siblings().slideToggle(500);
  };
}
