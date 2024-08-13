import {EventEmitter} from "events";

const myEventEmitter = new EventEmitter;

function notifyConnection (ip){
    console.log(' have been connect through '+ ip);
    
}

myEventEmitter.on('connected',notifyConnection);
myEventEmitter.emit('connected','127.0.87.987.9');


