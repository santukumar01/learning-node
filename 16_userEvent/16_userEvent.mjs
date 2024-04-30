
import * as Events from 'events';

//eventEmiiter -> evnt sender
//event is a module but Event Emitter is a function / class

export class UserEvents extends Events.EventEmitter {
    createPost(content) {
        console.log('post is creted');
        this.emit('postCreated');  // event name 
    }
}
