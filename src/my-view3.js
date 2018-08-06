
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/iron-input/iron-input'
import '@polymer/iron-ajax/iron-ajax'


class MyView3 extends PolymerElement {
    static get template() {
        return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .button {
        cursor: pointer;
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
              <iron-input
                name="firstName"
                label="First name"
                error-message="Please enter a first name"
                class="custom"
                pattern="[a-zA-Z]*"
                required
                auto-validate
                value="{{firstName}}">
                <input>
              </iron-input>
                
              <iron-input
                name="lastName"
                label="Last name"
                error-message="Please enter a last name"
                class="custom"
                pattern="[a-zA-Z]*"
                required
                auto-validate
                value="{{lastName}}">
                <input>
              </iron-input>
    
              <iron-input
                name="email"
                label="Email address"
                type="email"
                error-message="Please enter a valid email address"
                class="custom"
                auto-validate
                required
                value="{{email}}">
                <input>
              </iron-input>

              <iron-input
                name="password"
                label="Password"
                type="password"
                error-message="Weak"
                class="custom"
                char-counter
                minlength="10"
                auto-validate
                required
                value="{{password}}">
                <input>
              </iron-input>
          </div>     
          <div class="button" onclick="Registration()">submit</div>
      </div>
      
       <iron-ajax
            id="requestRegister"
            url="https://staging1.babylontesting.co.uk/api/v2/patients"
            method="POST"
            body="{{ requestBody }}"
            handle-as="json"
            content-type="application/json"
            headers='{ "X-App-Version": "1.0.0", "X-Platform": "web" }'
            on-response="hResponse"
            debounce-duration="300">
        </iron-ajax>
        
    `;
    }

    Registration() {
        this.requestBody = {
            patient: {
                first_name: this.firstName,
                last_name: this.lastName,
                email: this.email,
                password: this.password,
            }
        };
        this.$.requestRegister.generateRequest();
    }

}

window.customElements.define('my-view3', MyView3);
