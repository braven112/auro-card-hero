# auro-card-hero

<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis in tellus nec pellentesque. Integer bibendum ligula sit amet vehicula gravida. Maecenas accumsan, ligula vitae molestie iaculis, tellus mi laoreet ex [install instructions](https://auro.alaskaair.com/components/auro/button/install), ac malesuada velit dolor vel mi. Cras et rutrum urna. Sed mattis mi eu tortor ullamcorper, egestas bibendum mauris cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra eros eget neque commodo vulputate. In tempus eu velit at dictum.

Nulla at augue facilisis `odio lobortis` molestie vitae a nulla. -->
<!--
## auro-card-hero use cases

The `auro-card-hero` element should be used in situations where users may: -->

<!-- - egestas bibendum mauris cursus
- quis euismod felis mollis
- consectetur ipsum risus sed tortor

> Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam fermentum libero ipsum, ac tempor sapien blandit in. Nam tincidunt non felis molestie varius.

| convallis | tristique | nisl dignissim | eleifend |
| --------- | --------- | -------------- | -------- |
| √         | √         |                |          |
|           |           | √              | √        | -->

<auro-header slot="title" level="2" display="800">Banner Variant - Default</auro-header>

<div class="exampleWrapper">
   <auro-card-hero cssClass="banner">
    <auro-header slot="title" level="2" display="800">Relax before the runway</auro-header>
    <p slot="description" style="line-height: 1.25rem">Experience our unparalleled airport lounge service in a quiet space to relax and recharge, or get a little work done between flights. Enhanced cleaning procedures and limited capacity offer additional peace of mind. Our newest Alaska Lounge location is now open in Sea-Tac's North Satellite terminal. At over 15,800 square feet, our flagship lounge has it all. Prepare to relax by the grand fireplace or sip a local brew at the spacious bar while taking in the best runway views at Sea-Tac.</p>
    <auro-hyperlink href="#" secondary cta slot="cta">Explore lounges</auro-hyperlink>
    <div slot="img-right" style="min-width: 500px;height: 500px; background-image: url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/lounge.png); background-size: cover; background-position: center;" ></div>
  </auro-card-hero>
</div>

<auro-header slot="title" level="2" display="800">Banner Variant - Border</auro-header>

<div class="exampleWrapper">
  <auro-card-hero cssClass="banner border img-left">
    <div slot="img-left" style="min-width: 400px; height: 300px; background-image: url(https://sitecore-prod-cd-westus2.azurewebsites.net/-/media/Images/common-assets/bank/2020/Visa-2020.png?la=en);     background-size: 80%;background-position: center; background-repeat: no-repeat;" >
    </div>
    <auro-header slot="title" level="2" display="800">50,000 reasons to apply.</auro-header>
    <auro-header slot="subtitle" level="5" display="400">For a limited time, get a 50,000 bonus mile offer. That's enough miles for a round-trip ticket anywhere Alaska flies!</auro-header>
    <auro-hyperlink href="https://secure.bankofamerica.com/applynow/initialize-workflow.go?requesttype=C&campaignid=4049859&productoffercode=VF" target="_blank" secondary cta slot="cta">Apply now</auro-hyperlink>
  </auro-card-hero>
</div>

<auro-header slot="title"  level="2" display="800">Hero Variant - Example with left content next to it.</auro-header>

<div class="exampleWrapper">
<div class="heroWrapper">
  <div class="GenericText">
    <ul class="ul-group">
      <li><auro-hyperlink href="#bannerCarouselSection1">Members</auro-hyperlink></li>
      <li><auro-hyperlink href="#infoSection">Benefits</auro-hyperlink></li>
      <li><auro-hyperlink href="#cardSection">Global fares</auro-hyperlink></li>
      <li><auro-hyperlink href="#narrowSection">Seemless travel</auro-hyperlink></li>
    </ul>
  </div>
  <auro-card-hero cssClass="hero">
    <auro-header slot="title" level="2" display="800"><b>one</b>world alliance</auro-header>
    <p slot="description" style="line-height: 1.25rem">Welcome to <b>one</b>world®, an alliance of the world’s leading airlines committed to providing the highest level of service and convenience across more than 1,000 destinations worldwide.</p>
    <auro-hyperlink href="#" secondary cta slot="cta">Button</auro-hyperlink>
    <p slot="fine-print">Void where prohibitited</p>
    <div slot="img-right" style="min-width: 500px;height: 500px; background-image: url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/yellow.png); background-size: cover; background-position: center;" ></div>
  </auro-card-hero>
</div>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-card-hero cssClass="banner"> </auro-card-hero>
```

</auro-accordion>

## Then there is more

Aenean at blandit lorem. Fusce imperdiet mi nec gravida maximus. Quisque nisl libero, condimentum in nisi a, imperdiet lacinia arcu.

```javascript
toggleDialog = (elName) => {
  let dialog = document.querySelector(elName);
  const html = document.querySelector("html");

  html.style.overflow = "hidden";
  dialog.removeAttribute("open");
  dialog.setAttribute("open", true);
};

toggleDialogClose = (elName) => {
  let dialog = document.querySelector(elName);
  const html = document.querySelector("html");

  html.style.overflow = "";
  dialog.removeAttribute("open");
};
```
