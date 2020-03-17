// ---------------------------------------------------------------------
// ---------------------------- Louise -----------------------------------
// ---------------------------------------------------------------------

import createPartyService from "./../services/createPartyService.js"

export default class SettingsPage {
  constructor() {
    // this.getThePartyId();
    // this.rangeSlider();
    // this.createPartyService = createPartyService;
    // this.partyId = "";
    this.template();
    this.showSliderValue();

    // this.rangeSlider = document.getElementById("rs-range-line");
    this.rangeBullet = document.getElementById("rs-bullet");

    // this.template();

  }

  getThePartyId() {
    this.partyId = createPartyService.partyId;
    console.log(createPartyService.partyId)
    document.querySelector('#myText').value = this.partyId;
  }

  template() {
    console.log(createPartyService)
    document.querySelector('#content').innerHTML += /*html*/ `
        <section id="settingsPage" class="page flexcontainer">
          <img class="goBack" onclick="navigateTo('home')" src="img/hide.svg">
          <input value="Party Id" class="inputfield" type="text" id="myText" value="${this.partyId}">  

          <input type="image" id="text-to-copy" alt="copy"
          src="img/icon_copy.svg" id="copy-text" height="20px" width="20px">
          <span id="Party Id" style="display: none;">Copied!</span>


          <button name="settingsPage" class="btn" onclick="createParty(this.name);getThePartyId()">Få et gruppe ID</button> </button>
	
        <div class="container">
        
        <div class="slidecontainer">
        <p id="valueText"> Antal runder: <span id="rs-bullet" class"rs-label">0</span></p>
        <input type="range" min="0" max="100" value="0" class="rs-range" id="rs-range-line" oninput="showSliderValue()">
      
      </div>
  
    <label class="toggleLang">
        <input type="checkbox" id="dabox" class="star">
           <span class="sliderLang">
           
        </span>
      
      </label>
    </label>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <button class="btn" name="addPlayers" onclick="navigateTo(this.name);addContentToPartyArr()">Fortsæt</button>
      
      </section>`
  }

  myFunction() {
    let copyText = document.getElementById("myText");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }

  rangeSlider() {
    let rangeSlider = document.getElementById("rs-range-line");

    rangeSlider.addEventListener("input", this.showSliderValue, false);
  }

  // showSliderValue() {
  //   let rangeBullet = document.getElementById("rs-bullet");
  //   rangeBullet.innerHTML = rangeSlider.value;
  //   var bulletPosition = (rangeSlider.value / rangeSlider.max);
  //   let theBulletPosition = bulletPosition * 578
  //   rangeBullet.style.left = `${theBulletPosition}px`;

  // }

  showSliderValue() {
    let slider = document.getElementById("rs-range-line");
    let output = document.getElementById("rs-bullet");
    output.innerHTML = slider.value;
    console.log(slider.value);
    let bulletPosition = slider.value / slider.max;
    output.style.left = bulletPosition * 578 + "px";
  }

  // showSliderValue() {
  //   this.rangeBullet.innerHTML = rangeSlider.value;
  //   var bulletPosition = (rangeSlider.value / rangeSlider.max);
  //   rangeBullet.style.left = (bulletPosition * 578) + "px";
  // }
  //slider() {
  //let slider = document.getElementById("myRange");
  //let output = document.getElementById("demo");
  //output.innerHTML = slider.value;

  //slider.oninput = function () {
  /// output.innerHTML = this.value;
  //}
  // }

  myFunction() {
    let x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
  }

  myText(length) {
    let x = document.getElementById("idButton").value;
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

  }
}