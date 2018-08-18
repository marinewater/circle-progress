export class Progress {

    private readonly _element: HTMLDivElement;
    private _outer: HTMLDivElement;
    private _progress_text: HTMLDivElement;

    private _circle_color: string;
    private _circle_progress_color: string;
    private _current_progress = 0;

    constructor( element: HTMLDivElement ) {

        this._element = element;
        this._addChildren();
        this._getColors();

    }

    private _addChildren() {

        this._element.innerHTML = '<div class="outer"><div class="inner"><div class="progress-text"></div></div></div>';
        this._outer = this._element.querySelector( '.outer' );
        this._progress_text = this._element.querySelector( '.progress-text' );

    }

    private _getColors() {

        const color = document.createElement( 'div' );
        color.classList.add( 'color' );
        this._element.appendChild( color );

        const style = window.getComputedStyle( color );
        this._circle_progress_color = style.getPropertyValue( 'background-color' );
        this._circle_color = style.getPropertyValue( 'color' );

        this._element.removeChild( color );

    }

    private _progress( progress: number ) {

        if ( progress <= 50 ) {
            this._outer.style.backgroundColor = this._circle_progress_color;
            this._outer.style.backgroundImage = `linear-gradient(${90+(360*progress/100)}deg, transparent 50%, ${this._circle_color} 50%), linear-gradient(90deg, ${this._circle_color} 50%, transparent 50%)`;
        }
        else {
            this._outer.style.backgroundColor = this._circle_progress_color;
            this._outer.style.backgroundImage = `linear-gradient(${-90+(360*progress/100)}deg, transparent 50%, ${this._circle_progress_color} 50%), linear-gradient(90deg, ${this._circle_color} 50%, transparent 50%)`;
        }

        this._progress_text.innerText = `${Math.round(progress)}%`;

    }

    public progress( progress: number ) {

        this._progress( progress );
        this._current_progress = progress;

    }

    public progress_animate( progress: number, time: number ) {

        this._animate( progress, time, null );

    }

    private _animate( progress, time, start ) {

        const _this = this;

        requestAnimationFrame( function ( timestamp ) {

            if ( start === null ) {
                start = timestamp;
                _this._animate( progress, time, start );
            }
            else if ( timestamp - start > time ) {
                console.log( progress );
                _this.progress( progress );
            }
            else {
                _this._progress( _this._current_progress + ( progress - _this._current_progress ) * ( timestamp - start ) / time );
                _this._animate( progress, time, start );
            }
        });

    }

}