export class publisher {
    constructor(handler) {
        this.observers = []
        this.handler = handler;
        this.handler();
    }

    subscribe = (observer) => {
        this.observers.push(observer);
    }

    unsubscribe = (observer) => {
        this.observers = this.observers.filter(item => item !== observer)
    }

    notify = (observer) => {
        let observerIndex = this.observers.indexOf(observer);
        if (observerIndex > -1) {
            this.observers[observerIndex].notify(data);
        }
    }

    notifyAll = () => {
        this.observers.forEach((observer) => {
            observer.notify(this.data);
        })
    }
}

export class subscriber {
    constructor(name, handler) {
        this.name = name;
        this.handler = handler;
    }

    notify = (data) => {
        this.handler(data);
    }
}
