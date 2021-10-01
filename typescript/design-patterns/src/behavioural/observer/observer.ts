interface Observable {
  subscribe(...observers: Observer[]): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(...args: unknown[]): void;
}

// concrete observable
class InputObservable implements Observable {
  private observers: Observer[] = [];

  constructor(public element: HTMLInputElement) {}

  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => {
      if(!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    });
  }

  unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);

    if(observerIndex > -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

// concrete observable
class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: Observable): void {
    if(observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

class DivObserver implements Observer {
  constructor(public element: HTMLDivElement) {}

  update(observable: Observable): void {
    if(observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}


// client code
function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  document.body.appendChild(input);

  return input;
}

function makeParagraph(): HTMLParagraphElement {
  const p = document.createElement('p');
  document.body.appendChild(p);
  p.innerText = 'Hello World';

  return p;
}

function makeDiv(): HTMLParagraphElement {
  const div = document.createElement('div');
  document.body.appendChild(div);
  div.innerText = 'Hello World - Div';

  return div;
}

const input = new InputObservable(makeInput());
const p1 = new ParagraphObserver(makeParagraph());
const p2 = new ParagraphObserver(makeParagraph());
const div = new DivObserver(makeDiv());
input.subscribe(p1, p2, div);
input.unsubscribe(p2);

input.element.addEventListener('keyup', () => {
  input.notify();
});