[![npm (tag)](https://img.shields.io/npm/v/circle-progress-ts/latest.svg?style=popout-square)](https://www.npmjs.com/package/circle-progress-ts)

# circle-progress

[Demo](https://marinewater.github.io/circle-progress/demo.html)

## Table of contents
* Installation
* Usage 
    * JS and CSS
    * SCSS
    * Typescript
* Styling
    * CSS
        * Background
        * Circle color
        * Circle progress color
        * Circle width
    * SCSS
        * Background
        * Circle color
        * Circle progress color
        * Circle width

## Installation
```sh
npm install --save circle-progress-ts 
```

## Usage:
* JS and CSS
* Scss
* Typescript

### JS and CSS

Include stylesheet, e.g.
```html
<link rel="stylesheet" type="text/css" href="node_modules/circle-progress-ts/dist/progress.css">
```

Include javascript, e.g.
```html
<script src="node_modules/circle-progress-ts/dist/progress.min.js"></script>
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
@import "./node_modules/circle-progress-ts/sass/progress";
```

### Typescript
```typescript
// import circle progress lib
import { Progress } from 'circle-progress-ts';

// initialize
const circle = document.querySelector( '.circle' );
const p = new Progress( circle );

// change progress
p.progress( 20 );
p.progress_animate( 60, 500 );
```

## Styling
* CSS
* SCSS

### CSS
[Example](https://github.com/marinewater/circle-progress/blob/master/examples/styling-css.html),
[Demo](https://marinewater.github.io/circle-progress/examples/styling-css.html)

* Background
* Circle color
* Circle progress color
* Circle width

#### Background
Usually the same as parent background
```css
.circle .inner {
    background: #373737;
}
```

#### Circle color
color of the circle of the remaining progress
```css
.circle .color {
    color: #fff;
}
```

#### Circle progress color
color of the circle of the completed progress
```css
.circle .color {
    background-color: #f00;
}
```

#### Circle width
```css
.circle .inner {
    width: 93%;
    height: 93%;
}
```

### SCSS
[Example](https://github.com/marinewater/circle-progress/blob/master/examples/styling-scss.scss),
[Demo](https://marinewater.github.io/circle-progress/examples/styling-scss.html)

* Background
* Circle color
* Circle progress color
* Circle width

#### Background
Usually the same as parent background
```scss
$bg-color: #1c1d61;
```

#### Circle color
color of the circle of the remaining progress
```scss
$circle-color: #6c6c6c;
```

#### Circle progress color
color of the circle of the completed progress
```scss
$circle-progress-color: #ff9205;
```

#### Circle width
```scss
$circle-width: 7%;
```
