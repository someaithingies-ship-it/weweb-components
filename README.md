# WeWeb Components

Reusable UI components for WeWeb apps.

## Button

Plain-HTML reusable button component (primary / secondary).

Include files in your page or WeWeb project:

<link rel="stylesheet" href="/button/button.css">
<script src="/button/button.js"></script>

Markup examples:

<button class="ww-btn ww-btn--primary" data-action="myAction">Save</button>
<button class="ww-btn ww-btn--secondary" data-action="cancelAction">Cancel</button>

Handling clicks:

1) Provide a global function named in `data-action` (example: `function myAction(el){ ... }`).
2) Or listen for the `ww-button-click` event on `document`:

```js
document.addEventListener('ww-button-click', function(e){
  console.log('button action', e.detail.action, e.detail.element);
});
```

This keeps the HTML simple for non-programmers while allowing WeWeb or JS code to wire actions.
# WeWeb Components

Reusable UI components for WeWeb apps.
