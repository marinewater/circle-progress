var progress = (function (exports) {
    'use strict';

    var Progress = /** @class */ (function () {
        function Progress(element) {
            this._current_progress = 0;
            this._element = element;
            this._addChildren();
            this._getColors();
        }
        Progress.prototype._addChildren = function () {
            this._element.innerHTML = '<div class="outer"><div class="inner"><div class="progress-text"></div></div></div>';
            this._outer = this._element.querySelector('.outer');
            this._progress_text = this._element.querySelector('.progress-text');
        };
        Progress.prototype._getColors = function () {
            var color = document.createElement('div');
            color.classList.add('color');
            this._element.appendChild(color);
            var style = window.getComputedStyle(color);
            this._circle_progress_color = style.getPropertyValue('background-color');
            this._circle_color = style.getPropertyValue('color');
            this._element.removeChild(color);
        };
        Progress.prototype._progress = function (progress) {
            if (progress <= 50) {
                this._outer.style.backgroundColor = this._circle_progress_color;
                this._outer.style.backgroundImage = "linear-gradient(" + (90 + (360 * progress / 100)) + "deg, transparent 50%, " + this._circle_color + " 50%), linear-gradient(90deg, " + this._circle_color + " 50%, transparent 50%)";
            }
            else {
                this._outer.style.backgroundColor = this._circle_progress_color;
                this._outer.style.backgroundImage = "linear-gradient(" + (-90 + (360 * progress / 100)) + "deg, transparent 50%, " + this._circle_progress_color + " 50%), linear-gradient(90deg, " + this._circle_color + " 50%, transparent 50%)";
            }
            this._progress_text.innerText = Math.round(progress) + "%";
        };
        Progress.prototype.progress = function (progress) {
            this._progress(progress);
            this._current_progress = progress;
        };
        Progress.prototype.progress_animate = function (progress, time) {
            this._animate(progress, time, null);
        };
        Progress.prototype._animate = function (progress, time, start) {
            var _this = this;
            requestAnimationFrame(function (timestamp) {
                if (start === null) {
                    start = timestamp;
                    _this._animate(progress, time, start);
                }
                else if (timestamp - start > time) {
                    console.log(progress);
                    _this.progress(progress);
                }
                else {
                    _this._progress(_this._current_progress + (progress - _this._current_progress) * (timestamp - start) / time);
                    _this._animate(progress, time, start);
                }
            });
        };
        return Progress;
    }());

    exports.Progress = Progress;

    return exports;

}({}));
//# sourceMappingURL=progress.js.map
