
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
        font-size: 1.3rem;
        background-color: darkgray;
        color: #eeeeee;       
        text-align: center;
        padding-top: 5px;
        padding-bottom: 5px;
        width: 100px;
        margin-top: 3rem;
        border-radius: 10px;      
        }
        
        .people {
         height: 55vh;
         width: 40rem;
         margin-right: 3vw ;
         margin-left: 5vw;
       
       background-size: auto;
       background: url("../images/people.png") center no-repeat;
       right: 0;
        }
        
        .view {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        }
        
        .title {
          font-size: 5vh;
          color: red;
          font-weight: bolder;
          margin: 2vh auto 3vh -1vw;
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
        margin-left: 3vw;
        }
      
      </style>

      <div class="card">
        <div class="view">
          <div class="data">  
          <p class="title">Registration</p>
              
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
           
           <div class="button">submit</div>
          </div>     
           <div class="people"></div>
          </div>
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
