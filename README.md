# circle-progress

[Demo](http://marinewater.github.io/circle-progress/)

## Usage:
* JS and CSS only
* Scss
* Typescript

### JS and CSS only

Include stylesheet
```html
<link rel="stylesheet" type="text/css" href="dist/progress.css">
```

Include javascript
```html
<script src="dist/progress.min.js"></script>
```

Add `div` to html
```html
<div class="circle"></div>
```

Add styling to your own css
```css
.circle {
    width: 150px;
    height: 150px;
}
```

Initialize progress circle in JS
```javascript
var circle = document.querySelector( '.circle' );
var p = new progress.Progress( circle );
```

Change progress
```javascript
// change current progress to 20%
p.progress( 20 );
```

or animate progress change over time
```javascript
// changes from current progress to 60% over 500ms
p.progress_animate( 60, 500 );
```


### Scss
just import the scss file
```scss
@import "progress";
```

### Typescript
```typescript
// import circle progress lib
import { Progress } from 'circle-progress';

// initialize
const circle = document.querySelector( '.circle' );
const p = new Progress( circle );

// change progress
p.progress( 20 );
p.progress_animate( 60, 500 );
```