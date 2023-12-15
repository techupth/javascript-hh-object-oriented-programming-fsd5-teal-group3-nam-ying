//  Start coding here
class User{
    constructor(id,name, email){
        this.id = id;
        this.name=name
        this.email=email
}
}

class PostList{
    constructor(posts,addPost,sharePost){
        this.posts= posts;
        this.addPost=addPost
        this.sharePost= sharePost
    }
    addNewPost(){
        console.log(`You've shared post ${this.posts}to your friend.`)
}
}

let user11 = new PostList("hi sunny day ","john@gmail.com","share")
console.log(user11)
user11.addNewPost()

class Post{
    constructor(id,title,content,comment){
        this.id=id
        this.title=title
        this.content=content
        this.comment=[]
    }
    addComment(comment) {
        this.comment.push(comment);
      }
}
// let mypost = new Post('1','My first blog', 'This is my first blog')
// mypost.addComment('Great job!');
// console.log(mypost)

class Comment {
    constructor(id, content, createdBy) {
      this.id = id;
      this.content = content;
      this.createdBy = createdBy;
      this.likes = 0;
    }
  
    addLike() {
      this.likes += 1;
    }
  }
  class Facebook {
    constructor() {
      this.groupList = [];
      this.pageList = [];
    }
  
    addGroup(groupList) {
      this.groupList.push(groupList);
    }
  
    addPage(pageList) {
      this.pageList.push(pageList);
    }
  }
  const socialMedia = new Facebook();
  socialMedia.addGroup({ name: "Family" });
  console.log(socialMedia)
  
  class FacebookPage {
    constructor(name) {
      this.name = name;
    }
  }
  
  class FacebookGroup {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Notification {
    constructor(id) {
      this.id = id;
    }
    send(commentCreatedBy, postTitle) {
        console.log(`Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`);
      }
}

const user1= new Notification("345")
user1.send('John Doe', 'This is a great post') // Notifications John Doe has just commented on this post— "