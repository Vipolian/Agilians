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

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        
        .card {
         background-color: black;
        }
        
       .speakers li {
       list-style: none;
       
       }
       
       .discr {
       margin-top: 1.5vh;
       display: flex;
       flex-direction: row;
       margin-bottom: 5vh;
       align-items: flex-start;      
       }
       
       .shead {
       color: red;
       font-size: 5rem;
       font-weight: bold;
       margin-bottom: 0;
       margin-left: 2vw;
       }
       
       img {
       margin-right: 3vw;
       height: 9rem;
       }
       
       .prob {
       font-size: 2rem;
       margin-left: 2vw;
       }
       
       .banner {
       height: 80vh;
       background: url("../images/banner.jpg") no-repeat left;
       background-size: auto;
       }
       
       .banner h1 {
       font-size: 7rem;
       color: red;
       font-family: "Roboto", "Noto", sans-serif;
       font-weight: bolder;
       padding-left: 7vw;
       padding-top: 10vh;
       text-shadow: 3px 2px 4px black, 0 0 1em red;
       }
       
       .them li {
       list-style: square;      
       margin-left: 2.5vw;
       font-size: 2.3rem;
       }
       
      </style>

      <div class="card">
        <div class="banner">
        <h1>Cyber
        <br>Security 
        <br>2018</h1>
        </div>
        <p class="shead">Problem</p>
        <p class="prob">Cyber threats continue to originate from a wide variety (and ever-multiplying) range of entities from state-sponsored groups and terrorists to criminal elements and emerging hacktivist movements. 
        <br>As these groups exercise increasing sophistication in their use of advanced technology, the federal government is pressured to keep “ahead of the game” in protecting a wide array of disparate legacy systems with more limited resources. 
        <br>There is nothing like attending a face-to-face event for knowledge gathering networking, and we don’t have to tell you how helpful it can be to get a hands-on demo of a new tool or to have your questions answered by experts. 
        </p>
        <p class="shead">Themes</p>
        <ul class="them">
          <li>Cyber Terrorism</li>
          <li>AI and Machine Learning </li>
          <li>Cloud Data Protection</li>
          <li>Blockchain Technology & Cybersecurity</li>
          <li>Protecting Critical Defense Infrastructures</li>
        </ul>
        <p class="shead">Speakers</p>
        <div class="speakers">
          <ul>
            <li>
            <h2>Jennifer Granick | TED Speaker</h2>
            <div class="discr">           
            <img src="../images/Jen.jpg">
              <div>              
              Jennifer Granick fights for civil liberties in the age of surveillance and powerful digital technology.
              <p>Surveillance and cybersecurity counsel</p>
              http://www.ted.com/speakers/jennifer_granick
              </div>
             </div>
             </li>
            <li>
               <h2>James Lyne | TED Speaker</h2>    
            <div class="discr">
            <img src="../images/James.jpg">
           <div>                       
              Whether he’s taking on insecure hotspots, inept passwords, or lax OS designers, James Lyne exposes  
              <br>technology’s vulnerabilities while elevating the security awareness of everyday users.
              <p>Cybersecurity specialist</p>
              http://www.ted.com/speakers/james_lyne
              </p> 
              </div>
              </div>
            </li>
            <li>
            <h2>Mikko Hypponen | TED Speaker</h2>    
            <div class="discr">
            <img src="../images/Mikko.jpg">
           <div>                       
              As computer access expands, 
              <br/>Mikko Hypponen asks: What's the next killer virus, and will the world be able to cope with it? 
              <br>And also: How can we protect digital privacy in the age of government surveillance?
              <p>Cybersecurity expert</p>
              http://www.ted.com/speakers/mikko_hypponen
              </p> 
              </div>
              </div>
            </li>
            <li>
            <h2>Chris Domas | TED Speaker</h2>  
            <div class="discr">
            <img src="../images/Chris.jpg">
            <div>                         
              Chris Domas is an embedded systems engineer and cybersecurity researcher.
              <p>Cybersecurity researcher</p>
              http://www.ted.com/speakers/chris_domas
              </p> 
              </div>
              </div> 
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
