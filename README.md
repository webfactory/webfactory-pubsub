# webfactory-pubsub
Javascript Helperclasses for a simple publisher/subscriber system.

## Example Usage

Create a publisher, that notifies its subscribers when the window resize-event is fired. Extend the publisher-class, add a resize-handler and instantiate it. Then instantiate the subscriber and subscribe to your publisher-instance.
````
import {Publisher, Subscriber} from 'webfactory-pubsub';

class ResizePublisher extends Publisher {
  constructor() {
    super();
        
    window.addEventListener('resize', () => {
        this.data = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        };
        this.notifyAll();
    });
  }
}

const myResizePublisher = new ResizePublisher();

const myResizeSubscriber = new Subscriber(function(data) {
    console.log(data);
},'myResizeSubscriber');

myResizePublisher.subscribe(myResizeSubscriber);
````
