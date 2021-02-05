import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-card-hero.js';

describe('auro-card-hero', () => {
  it('sets the CSS class on auro-card-hero > div element', async () => {
    const el = await fixture(html`
      <auro-card-hero cssclass="testClass"></auro-card-hero>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-card-hero is accessible', async () => {
    const el = await fixture(html`
      <auro-card-hero cssclass="testClass"></auro-card-hero>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-card-hero custom element is defined', async () => {
    const el = await !!customElements.get("auro-card-hero");

    await expect(el).to.be.true;
  });
});
