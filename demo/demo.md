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

<div class="exampleWrapper">
  <auro-card-hero cssClass="banner">
    <div slot="img-left" style="min-width: 200px;height: 200px; background-image: url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/kitty.png); background-size: cover; background-position: center;" ></div>
    <auro-header slot="title" level="5" display="400">Title</auro-header>
    <auro-header slot="subtitle" level="5" display="400">Sub title</auro-header>
    <auro-button href="#" cta slot="cta">Button</auro-button>
    <p slot="fine-print">Void where prohibitited</p>
    <div slot="img-right" ></div>
  </auro-card-hero>
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
