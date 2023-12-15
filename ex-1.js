class EmailNotification { 
    constructor(notificationId,createdTime,content,receiver){
this.notificationId=notificationId
this.createdTime=createdTime;
this.content=content
this.receiver=receiver

    }
    send(){
        console.log(`Notification has been sent to  ${this.receiver}`)
    }
}

class SMSNotification { 
    constructor(notificationId,createdTime,content,phoneNumber){
        this.notificationId=notificationId
        this.createdTime=createdTime;
        this.content=content
        this.phoneNumber=phoneNumber
        
            }
            send(){
                console.log(`Notification has been sent to  ${this.phoneNumber}`)
            }
        }

const emil = new EmailNotification("001",new Date(),"This is email noti message.","knot@gmail.com")
emil.send() // Output: Notification has been sent to knot@gmail.com
const phone = new SMSNotification("001",new Date(),"This is sms noti message","0923232332")
phone.send()