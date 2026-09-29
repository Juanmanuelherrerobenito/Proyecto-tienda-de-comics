class Carrusel extends HTMLElement {
  constructor() {
    super();
    this.posicion = 0;
    this.attachShadow({ mode: "open" });
  }


  static get observedAttributes() {
    return ["fotos"];
  }


 
  attributeChangedCallback(name, oldVal, newVal) {
    this.fotos = newVal.split(";");
    this.render();
    this.addEvents();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <button id="anterior">-</button>
      <img width="200" src="${this.fotos[this.posicion]}">
      <button id="posterior">+</button>
    `;
  }

  addEvents() {
    this.shadowRoot.getElementById("anterior").onclick = () => this.cambiar(-1);
    this.shadowRoot.getElementById("posterior").onclick = () => this.cambiar(1);
  }

  cambiar(dir) {
    this.posicion = Math.min(
      Math.max(this.posicion + dir, 0),
      this.fotos.length - 1
    );
    this.shadowRoot.querySelector("img").src = this.fotos[this.posicion];
  }
}

customElements.define("carrusel-d", Carrusel);