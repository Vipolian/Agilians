
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          background-color: black;
          color: darkgray;
          padding: 10px;
        }
        
        .speakers {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: 70vw;
        margin-left: 3vw;
        }
           
        .discr {
        margin-right: 4vw;
           margin-top: 1.5vh;
           display: flex;
           flex-direction: row;
           flex-wrap: wrap;
           margin-bottom: 5vh;
            text-align: left;     
        }
           
        .shead {
           color: red;
           font-size: 3.2rem;
           font-weight: bold;
           margin-bottom: 3.7vh;
           margin-left: 2vw;
           text-shadow: 3px 2px 4px black, 0 0 0.5em red
        }
           
        .speakers img {
           margin-right: 2vw;
           height: 9rem;
           border-radius: 3px;
        }
           
        .prob {
           width: 77vw;
           font-size: 1.5rem;
           margin-left: 2.4vw;
           text-align: left;
        }
        
        .prob2 {
           display: flex;
           flex-direction: row;
           flex-wrap: wrap;
           align-content: flex-start;
           font-size: 1.5rem;
           margin-left: 2.4vw;
           text-align: left;
           margin-bottom: 5vh;
        }
           
        .banner {
           width: 100%;
           display: grid;
           height: 80vh;
           background: url("../images/banner.jpg") no-repeat fixed ;
           background-size: cover;
           overflow: scroll;
           overflow-x: hidden;
           perspective: 1px;
        }
           
          .banner h1 {
            font-size: 8vh;
            color: red;
            font-family: "Roboto", "Noto", sans-serif;
            font-weight: bolder;
            padding-left: 7vw;
            padding-top: 10vh;
            text-shadow: 3px 2px 4px black, 0 0 1.2em red;
           }
           
          .them li {
             list-style: square;      
             margin-left: 2.1vw;
             font-size: 1.8rem;
           }
           
           .inst {
           height: 28vh;
           margin-right: 3vw;
           border-radius: 6px;
           }
      </style>
      
    <div class="banner">
      <h1>Cyber
       <br>Security 
       <br>Conference
       <br>2018
      </h1>
    </div>
    
    <p class="shead">Problem</p>
        
    <div class="prob">
     <p>Cyber threats continue to originate from a wide variety (and ever-multiplying) range of entities from state-sponsored groups and terrorists to criminal elements and emerging hacktivist movements.</p>
     <p>As these groups exercise increasing sophistication in their use of advanced technology, the federal government is pressured to keep “ahead of the game” in protecting a wide array of disparate legacy systems with more limited resources.</p> 
     <p>There is nothing like attending a face-to-face event for knowledge gathering networking, and we don’t have to tell you how helpful it can be to get a hands-on demo of a new tool or to have your questions answered by experts.</p> 
    </div>
        
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
        <div>
          <h2>Jennifer Granick | TED Speaker</h2>
            <div class="discr">           
                <img src="../images/Jen.jpg">
                    <div>              
                        <p>Surveillance and cybersecurity counsel</p>
                        http://www.ted.com/speakers/jennifer_granick
                    </div>
            </div>
            </div>
           <div>
             <h2>James Lyne | TED Speaker</h2>    
             <div class="discr">
               <img src="../images/James.jpg">
                <div>                       
                    <p>Cybersecurity specialist</p>
                    http://www.ted.com/speakers/james_lyne
                    </p> 
                </div>
             </div>
           </div>
           <div>
            <h2>Mikko Hypponen | TED Speaker</h2>    
                <div class="discr">
                   <img src="../images/Mikko.jpg">
                    <div>                       
                        <p>Cybersecurity expert</p>
                        http://www.ted.com/speakers/mikko_hypponen
                        </p> 
                    </div>
                 </div>
            </div>
            <div>
                <h2>Chris Domas | TED Speaker</h2>  
                    <div class="discr">
                    <img src="../images/Chris.jpg">
                       <div>                         
                            <p>Cybersecurity researcher</p>
                            http://www.ted.com/speakers/chris_domas
                            </p> 
                        </div>
                     </div> 
            </div>
        </div>
        
      <p class="shead">Place</p>
      <div class="prob2">
         <img src="../images/Inst.jpg" class="inst">
         <p>Moscow rocket college on the Yauza river
         <br>— is another name of our university used in the West. 
         <br>Due to BMSTU is pioneer works in the field of aviation, 
         <br>rocketry, nuclear power and radio electronics</br> 
      </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
