const template = document.querySelector('template')
class Mytext extends HTMLElement{
    constructor(){
        super()
        this.append(template.content.cloneNode(true))
    }
}

customElements.define('my-text', Mytext)