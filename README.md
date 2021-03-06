# showllable

is a simple way to apply animations to your pages, the focus of the library and animations that your elements appear in the course of the page scroll.

## Installation

```
npm i showllable
```

How to use

You have to follow two steps to use it

1 - You have to import the CSS, for you to import only once, import in the main folder of your project.

```css
@import '~showllable/dist/css/style.css';
```

2 - Import the Javascript file from the library into your project, either in HTML or in your main JS file

Now we have to analyze if you are using React or vanilla js.

If you are using React, import the showllable function and invoke the componentDidMount of your application.

```js
componentDidMount(){
 showllable()
}
```

I usually put in AppLayout's didMount, but it depends on its architecture.

If you are using vanillajs, it is simpler, just import the script in your application and load the page or in the DOMContentLoaded event invoke the lib function

```js
showllable()
```

After doing these two steps you are free to use apply the animations in your entire project, just go to the element you want to animate and put a date-anime attribute with the value symbolizing the side you want to animate.

```html
<div data-anime='top'></div>
<div data-anime='right'></div>
<div data-anime='bottom'></div>
<div data-anime='left'></div>
<div data-anime='rotate-to-right'></div>
<div data-anime='rotate-to-left'></div>
<div data-anime='top-delay'></div>
<div data-anime='right-delay'></div>
<div data-anime='bottom-delay'></div>
<div data-anime='left-delay'></div>
```

The anime date with 'delay', we usually use for lists of elements that we want to appear in a queue.

***Be careful, make sure the DOM is complete, otherwise we can manipulate it wrongly.
One idea would be to invoke the showllable only in the DOMContentLoaded event. In a version not so far away we will treat this for you.***

Ready ! just use the scroll of the page that the indicated elements will animate with the position that you defined.
