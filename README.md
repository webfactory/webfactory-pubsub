# webfactory-pubsub
Javascript Helferklassen für ein einfaches Publisher/Subscriber System.

## Beispielanwendung

Einen Publisher für ein Resize-Event erzeugen, der die Dimension des Window-Objects bei jedem Resize-Event an seine Subscriber benachrichtigt:
````
import {publisher} from 'webfactory-pubsub';
 
const myResizePublisher = new publisher(function() {
    
    this.updateData = () => {
        this.data = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        }
    }
    
    window.addEventlistener('resize', () => {
        this.updateData();
        this.notifyAll();
    });
});
````
Ein Object dem Resize-Publisher subscriben, dass bei jedem Resize-Event benachrichtigt wird und eine Callback-Function ausführt:
````
import {subscriber} from 'webfactory-pubsub';

const myResizeSubscriber = new subscriber('myResizeSubscriber', function(data) {
    console.log(data.windowWidth, data.windowHeight);
});
myResizePublisher.subscribe(myResizeSubscriber);
````
