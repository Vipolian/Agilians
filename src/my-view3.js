import '@polymer/iron-ajax/iron-ajax'
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-input/paper-input'




class MyView3 extends PolymerElement {
    static get template() {
        return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        
        .button11 {
        cursor: pointer;
        background-color: red;
        color: #eeeeee;       
        text-align: center;
        padding-top: 5px;
        padding-bottom: 5px;
        width: 100px;
        margin-top: 3vh;
        border-radius: 10px;  
        margin-left: 3vw;    
        margin-bottom: 2vh;
        }
        
        .title {
          font-size: 3rem;
          color: red;
          font-weight: bolder;
          margin: 2vh auto 4vh 2vw;
        }
        
        .data {
        margin-top: 4rem;
        margin-left: 3vw;
        max-width: 450px;
        }
      
      </style>
      
      <div class="card">
        <h1 class="title">Registration</h1>
          <div class="data">  
              <paper-input
                label="First name"
                error-message="Please enter a first name"
                pattern="[a-zA-Z]*"
                required
                auto-validate
                value="{{firstName}}">
              </paper-input>
                
              <paper-input
                label="Last name"
                error-message="Please enter a last name"
                pattern="[a-zA-Z]*"
                required
                auto-validate
                value="{{lastName}}">
              </paper-input>
    
              <paper-input
                label="Email address"
                type="email"
                error-message="Please enter a valid email address"
                auto-validate
                required
                value="{{email}}">
              </paper-input>
              <paper-input
                label="Password"
                type="password"
                error-message="Weak"
                char-counter
                minlength="10"
                auto-validate
                required
                value="{{password}}">
              </paper-input>
          </div>     
          <div class="button11" id="smbt">submit</div>
      </div>
      <iron-ajax
            auto
            id="requestRegister"
            url="https://staging1.babylontesting.co.uk/api/v2/patients"
            method="POST"
            body="{'435345'}"
            handle-as="json"
            content-type="application/json"
            headers='{ "X-App-Version": "1.0.0", "X-Platform": "web" }'
            on-response="hResponse"
            debounce-duration="300">
        </iron-ajax>
    `;
    }

    ready() {
        super.ready();
        this.$.smbt.addEventListener('click',function() {
            // let ajax = document.getElementById('requestRegister');
            // ajax.body = {
            //         first_name: this.firstName,
            //         last_name: this.lastName,
            //         email: this.email,
            //         password: this.password,
            // };
            // ajax.generateRequest();
            fetch("https://staging1.babylontesting.co.uk/api/v2/patients", {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    firstName:this.firstName,
                    lastName:this.lastName,
                    email: this.email,
                    password: this.password,
                }),
            })
        })
    }



}

window.customElements.define('my-view3', MyView3);