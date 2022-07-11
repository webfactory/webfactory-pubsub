export class Publisher {
    constructor() {
        this.subscribers = []
    }

    subscribe(subscriber)  {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(item => item !== subscriber)
    }

    notify(subscriber) {
        let subscriberIndex = this.subscribers.indexOf(subscriber);
        if (subscriberIndex > -1) {
            this.subscribers[subscriberIndex].notify(this.data);
        }
    }

    notifyAll() {
        this.subscribers.forEach((subscriber) => {
            subscriber.notify(this.data);
        })
    }
}

export class Subscriber {
    constructor(handler, name) {
        this.handler = handler;
        this.name = name;
    }

    notify(data) {
        this.handler(data);
    }
}
