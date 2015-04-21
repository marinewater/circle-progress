# circle-progress

[Demo](http://marinewater.github.io/circle-progress/)

## Requirement
* jQuery
* jquery.transform2d.js
* compass

## Usage:

Add the required files to your head or body tag:
```html
<link href="stylesheets/screen.css" rel="stylesheet" type="text/css" />
<script src="js/jquery.min.js"></script>
<script src="js/jquery.transform2d.js"></script>
<script src="js/jquery.progress.js"></script>
```

Add a tag with the progress-circle class to your html:
```html
<div id="progress-circle" class="progress-circle">
</div>
```

Include the scss file (compass needed) and include the mixin (`progress-circle($diameter, $width, $circle-bg, $bg, $progress-color, $progress-font-size, $transition-length)`)
```scss
@import "_progress";

#progress-circle {
	@include progress-circle(150px, 2px, #a1a1a1, #fff, #ff5521, 24px, 0.5s);
}
```

call .progress(percentage) on your jquery element

```js
$("#progress-circle").progress(0);
$("#progress-circle").progress(30);
$("#progress-circle").progress(75);
$("#progress-circle").progress(100);
```
