// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-card-hero provides users a way to ...
 *
 * @attr {String} cssClass - Applies designated CSS class to DOM element.
 */

// build the component class
class AuroCardHero extends LitElement {
  // constructor() {
  //   super();
  // }

  // This function removes a CSS selector if the footer slot is empty
  firstUpdated() {
    const slotClass = this.cssClass.split(" ").join("."),
      slotObj = this.shadowRoot.querySelectorAll(`.${slotClass} slot`);

    for (const item of slotObj) {
      this.slt = item.assignedNodes();

      // eslint-disable-next-line no-magic-numbers
      if (this.slt.length === 0) {
        item.removeAttribute("class");
      }
    }
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      // ...super.properties,
      cssClass: { type: String },
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div id="auroBanner" class=${this.cssClass}>
        <slot name="img" class="img"></slot>
        <div class="gutter"></div>
        <div class="offer">
          <slot name="title" class="title"></slot>
          <slot name="subtitle" class="subtitle"></slot>
          <slot name="description" class="description"></slot>
          <slot name="cta" class="cta"></slot>
          <slot name="fine-print" class="finePrint"></slot>
        </div>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-card-hero")) {
  customElements.define("auro-card-hero", AuroCardHero);
}
