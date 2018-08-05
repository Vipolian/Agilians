/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

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
          <input>
          <p>Surname:</p>
          <input>
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
}

window.customElements.define('my-view3', MyView3);
