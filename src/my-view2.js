
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';



class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        
        .view {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        }
        
       .bmstu {
       height: 55vh;
       width: 70rem;
       min-width: 300px;
       background-size: cover;
       background: url("../images/mgtu.png") center;
       right: 0;
      
       }
       
      .title {
      font-size: 3.7rem;
      color: red;
      font-weight: bolder;
      margin: 2vh auto 2vh -1vw;
      }
      .contact {
      display: flex;
      flex-direction: column;
      margin-left: 3vw;
      margin-bottom: 2vh;
      }
     
      </style>

      <div class="card">
      
      <div class="view">
        <div class="contact">
        <p class="title">Questions</p>
        <div>
        <h1>When?</h1>
        <p>CSC 2018 will be held on August 7 <br> at 7:00pm</p>
        </div>
        <div>
        <h1>Where?</h1>
        <p>ul. Baumanskaya 2-ya, 5
        <br>BMSTU, Moscow</p>
        </div>
        
        <div>
        <h1>How?</h1>
            <p>Email: polevit@yandex.ru
            <br>Phone: +7-968-516-45-45
            <br>Fax: +7-499-267-48-44</p>
       </div>
       </div>
       <div class="bmstu"></div>
      </div>
      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
