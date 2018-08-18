build/css:
	./node_modules/node-sass/bin/node-sass --source-map true --output-style compressed --output dist sass/progress.scss

build/js:
	./node_modules/rollup/bin/rollup -c rollup.config.js

build/examples:
	./node_modules/node-sass/bin/node-sass --output-style nested --output examples examples/styling-scss.scss

build: build/css build/js build/examples