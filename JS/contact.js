export class Contact {
  constructor(messageContent, messageNumberCount) {
    this.messageContent = messageContent;
    this.messageNumberCount = messageNumberCount;
  }

  displayNumberOfEnteredCharacters = (e) => {
    this.messageNumberCount.html(
      100 - this.messageContent.val().length > 0
        ? 100 - this.messageContent.val().length
        : "No"
    );
  };
}
