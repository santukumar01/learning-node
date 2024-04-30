import { UserEvents } from "./16_userEvent.mjs";
const userEvent = new UserEvents();
function saveToDatabase() {
    console.log("saving to DB");
}
function pushnotifications() {
    console.log("push notifications");
}
//event listner
//excute all event listner line by line.
userEvent.addListener('postCreated', saveToDatabase);
userEvent.addListener('postCreated', pushnotifications);

userEvent.createPost("this is my first post");