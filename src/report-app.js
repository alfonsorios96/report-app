import {LitElement, html} from 'lit-element';

// These are the elements needed by this element.
import {styles} from './report-styles.js';

class Report extends LitElement {
    static get properties() {
        return {};
    }

    static get styles() {
        return [
            styles
        ];
    }

    render() {
        return html`
      <main role="main" class="container-app main-app">
      <h2>Contrato de ...</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu diam dui. Fusce hendrerit velit vel dolor imperdiet, id pharetra sapien auctor. Sed vitae dui malesuada, iaculis elit vitae, porta sapien. Aliquam volutpat risus ac ligula aliquet, gravida fringilla nisl suscipit. Sed efficitur maximus arcu vitae tempor. Nulla quis molestie sem. Nunc suscipit et elit nec fermentum. Morbi luctus interdum massa feugiat dignissim. Aliquam interdum faucibus tortor a pharetra. Suspendisse potenti. Curabitur sed sapien in metus sagittis lobortis ac in sem.
      </p>
      <p>
      Aliquam erat volutpat. Sed dictum ante imperdiet augue commodo vehicula. Fusce vitae bibendum enim. Duis consectetur augue non dui semper, ut elementum velit condimentum. Nam id massa in leo viverra dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sed nisl eu nulla pulvinar ultrices eget sed nulla. Ut molestie nibh sed elit viverra varius. Curabitur consectetur, nisl id aliquam scelerisque, neque dui varius velit, quis vulputate mi lectus ac arcu. Vestibulum ac tortor eget ligula dignissim cursus ut et purus. Pellentesque ac libero vestibulum, dictum sem eget, porta tellus. Maecenas ac nulla a risus viverra efficitur at nec libero.
</p>
<p>
Integer et elit nulla. Nulla tristique est non fringilla auctor. Aliquam erat volutpat. Donec mollis dolor quis dolor scelerisque vehicula. Proin vestibulum metus vitae urna rhoncus, ut laoreet tortor facilisis. Fusce tristique diam non quam hendrerit, sed maximus nulla placerat. Donec odio nisl, blandit in tellus ac, facilisis dapibus odio. Phasellus sed lectus imperdiet mi eleifend imperdiet eu in est. Suspendisse a mi purus. Ut et sollicitudin augue. Vivamus quis tempus ligula. Nullam nec fermentum sem, eu dignissim lectus.
</p>
<p>
Nunc aliquam enim sit amet nulla imperdiet, pharetra ornare lorem interdum. Vivamus lorem nisi, accumsan at luctus eget, tincidunt eu erat. Nulla lacinia, arcu nec interdum tincidunt, sem eros tempor nibh, non ultricies augue leo et libero. Quisque accumsan, lacus in volutpat scelerisque, sapien massa sodales nunc, non congue ligula justo in felis. Cras sagittis egestas felis, sit amet sodales lacus fermentum non. Maecenas in convallis lacus. Aliquam et pharetra ligula, eget porta elit.
</p>
       <canvas id="canvas"></canvas>
       <div class="actions">
           <p>Firma</p>
           <button @click="${this.clear}">Limpiar</button>
           <button @click="${this.save}">Autorizar</button>
        </div>
      </main>
    `;
    }

    firstUpdated(_changedProperties) {
        const canvas = this.shadowRoot.querySelector('#canvas');
        this.ctx = canvas.getContext('2d');
        let cw = canvas.width = 300,
            cx = cw / 2;
        let ch = canvas.height = 300,
            cy = ch / 2;

        let drawing = false;
        this.ctx.lineJoin = 'round';

        canvas.addEventListener('mousedown', evt => {
            drawing = true;
            this.ctx.beginPath();

        }, false);

        canvas.addEventListener('mouseup', evt => {
            drawing = false;

        }, false);

        canvas.addEventListener("mouseout", evt => {
            drawing = false;
        }, false);

        canvas.addEventListener("mousemove", evt => {
            if (drawing) {
                const m = oMousePos(canvas, evt);
                this.ctx.lineTo(m.x, m.y);
                this.ctx.stroke();
            }
        }, false);

        function oMousePos(canvas, evt) {
            var ClientRect = canvas.getBoundingClientRect();
            return {
                x: Math.round(evt.clientX - ClientRect.left),
                y: Math.round(evt.clientY - ClientRect.top)
            }
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, 300, 300);
    }

    save() {
        const signature = this.shadowRoot.querySelector('#canvas').toDataURL();
        console.log(signature);
    }
}

window.customElements.define('report-app', Report);
