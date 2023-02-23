class SermonCustomElement extends HTMLElement {
    constructor() {
        super();
        console.log("sermon constructor");
    }

    connectedCallback() {
        document.querySelectorAll("h2").forEach((element) => {
            element.style.cssText += 'overflow: hidden;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;';
        });
    }

    truncatedSermonTitles() {
        document.querySelectorAll("h2").forEach((element) => {
            element.style.cssText += 'overflow: hidden;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;';
        });
    }

    foobar() {
        console.log("foo bar");
    }
}
customElements.define('sermon-custom-element', SermonCustomElement);

