class Rectangle {
    constructor(height=1, width=1) {
        this._height = height;
        this._width = width;
    }

    // getter
    get area() {
        return this.calcArea();
    }

    // property getter
    get height() {
        return this._height;
    }

    get width() {
        return this._width;
    }

    // setters 
    set height(height) {
        this._height = height;
    }

    set width(width) {
        return this._width = width;
    }
    
    // method
    calcArea() {
        return this._height * this._width;
    }

    // static method
    static getName() {
        return this.name;
    }

}

export default Rectangle;