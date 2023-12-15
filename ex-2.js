class Notification {
  constructor(notificationId, createdTime, content) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    
  }
  sendDetail() {
    return `${this.notificationId} ${this.createdTime}(${this.content})`;
  }
}

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content);
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to  ${this.receiver}`);
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    super(notificationId, createdTime, content);
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`Notification has been sent to  ${this.phoneNumber}`);
  }
}

const emil = new EmailNotification(
  "001",
  new Date(),
  "This is email noti message.",
  "knot@gmail.com"
);
console.log(emil.sendDetail());
emil.send();

const phone = new SMSNotification(
  "001",
  new Date(),
  "This is sms noti message",
  "0923232332"
);
console.log(phone.sendDetail());
phone.send();
