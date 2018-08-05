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
import '@em-polymer/google-map/google-map';
import '@em-polymer/google-map/google-map-marker';

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        
      .card {
      
      }
      </style>

      <div class="card">
      <h1>Address:</h1>
      <p>ul. Baumanskaya 2-ya, 5, Moscow</p>
      <google-map slot="markers" fit-to-markers api-key="AIzaSyD3E1D9b-Z7ekrT3tbhl_dy8DCXuIuDDRc">
      <google-map-marker slot="markers" latitude="37.78" longitude="-122.4" draggable="true"></google-map-marker>
      </google-map>
      <h1>Organizers's Contacts</h1>
      <ul>
      <li>Email: polevit@yandex.ru</li>
      <li>Phone: +7-968-516-45-45</li>
      <li>Fax: +7-499-267-48-44</li>
      </ul>
       
      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
