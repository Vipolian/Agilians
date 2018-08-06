
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import Transport from './my-transport';
import Validator from './my-validator';

class MyView3 extends PolymerElement {
  static get template() {
      return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .button {
        font-size: 1.4rem;
        background-color: red;
        color: #eeeeee;       
        text-align: center;
        padding-top: 5px;
        padding-bottom: 5px;
        width: 150px;
        margin-top: 3vh;
        border-radius: 10px;  
        cursor: pointer;    
        }
        
        .people {
         height: 55vh;
         width: 40rem;
         margin-right: 3vw ;
         margin-left: 5vw;
         background-size: auto;
         background: url("../images/people.png") center no-repeat;
        }
        
        .view {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        }
        
        .title {
          font-size: 3rem;
          color: red;
          font-weight: bolder;
          margin: 2vh auto 4vh -2vw;
         }
        
        input {
            border-top: 0;
            border-left: 0;
            border-right: 0; 
            height: 2rem;     
            outline: none; 
            width: 60vw; 
            max-width: 500px;
            font-size: 1.7rem;
        }
        
        .data {
        font-size: 1.2rem;
        margin-left: 3.5vw;
        margin-bottom: 3vh;
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
           
           <div class="button" onclick="onSubmit()">submit</div>
          </div>     
           <div class="people"></div>
          </div>
      </div>
    `;
  }

    // inputs = [...this.getElementsByClassName('classToFind')];
    // errorFields = [...this.getElementsByClassName('login-page_error')];
    //
    // showErrors (errors, errorFields, inputs) {
    //     inputs.forEach((input, i) => {
    //         input.addEventListener('blur', () => {
    //             errorFields[i].innerHTML = '';
    //             input.style.borderColor = 'dark-grey';
    //             this.isValid([input], [errorFields[i]]);
    //         });
    //     });
    //
    //     errorFields.forEach((input, i) => {
    //         errors.forEach((err) => {
    //             if (input.getAttribute('name') === err.class[1]) {
    //                 input.innerHTML = err.innerHTML;
    //                 inputs[i].style.borderColor = '#E8175D';
    //                 inputs[i].style.boxShadow = '0 0 15px 4px #E8175D';
    //             }
    //         });
    //     });
    // };
    //
    // isValid (inputs = [], errorFields = []) {
    //     const fields = [...document.getElementsByClassName('classToFind')];
    //     const errors = Validator(fields);
    //     if (errors.length === 0) {
    //         return true;
    //     }
    //     this.showErrors(errors, errorFields, inputs);
    //     return false;
    // };
    //
    // onSubmit() {
    // if (this.isValid(this.inputs, this.errorFields)) {
    //     let request = {};
    //     this.inputs.forEach((input) => {
    //         if (input.name === 'login') {
    //             request.login = input.value;
    //         }
    //         if (input.name === 'email') {
    //             request.email = input.value;
    //         }
    //         if (input.name === 'password') {
    //             request.password = input.value;
    //         }
    //     });
    //
    //     Transport.Post(adr, request);
    //     }
    // }
}

window.customElements.define('my-view3', MyView3);
