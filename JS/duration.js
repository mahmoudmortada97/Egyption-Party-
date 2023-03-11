export class Duration {
  constructor(durationDate) {
    this.durationDate = durationDate;
  }

  timer = () =>
    setInterval(() => {
      const currentDate = new Date(),
        parteyDate = new Date("09/20/2023"),
        allTimeDiff =
          (parteyDate.getTime() - currentDate.getTime()) /
          (1000 * 60 * 60 * 24),
        days = Math.floor(allTimeDiff),
        hours = Math.floor((allTimeDiff - days) * 24),
        minutes = Math.floor(((allTimeDiff - days) * 24 - hours) * 60),
        seconds = Math.floor(
          (((allTimeDiff - days) * 24 - hours) * 60 - minutes) * 60
        );
      this.durationDate.eq(0).html(days >= 10 ? days : `0${days}`);
      this.durationDate.eq(1).html(hours >= 10 ? hours : `0${hours}`);
      this.durationDate.eq(2).html(minutes >= 10 ? minutes : +`0${minutes}`);
      this.durationDate.eq(3).html(seconds >= 10 ? seconds : `0${seconds}`);
    }, 1000);
}
