
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';


class MyView3 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .button {
        background-color: darkgray;
        color: #eeeeee;       
        text-align: center;
        padding-top: 5px;
        padding-bottom: 5px;
        width: 100px;
        margin-top: 2rem;
        border-radius: 10px;      
        }
        
        input {
        border-top: 0;
        border-left: 0;
        border-right: 0; 
        height: 2rem;     
        outline: none; 
        width: 60vw; 
        max-width: 300px;
        font-size: 1.7rem;
        }
        
        .data {
        margin-top: 4rem;
        }
      
      </style>

      <div class="card">
        <h1>Registration</h1>
          <div class="data">  
          <form>     
            <p>Name: </p>
            <iron-input> <input> </iron-input>
            <p>Surname:</p>
            <iron-input> <input> </iron-input>
            <p>Email:</p>
            <input>
            <p>Password:</p>
            <input>
            <p>Password Confirm:</p>
            <input>
          </form>   
          </div>     
          <div class="button">submit</div>
      </div>
    `;
  }

    validate() {
        let name = this.$.name.validate();
        let email = this.$.email.validate();
        let password = this.$.password.validate();
        return name && email && password;
    }

}

window.customElements.define('my-view3', MyView3);
