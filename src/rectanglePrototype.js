function Rectangle(width=1, height=1) {
    this.width = width;
    this.height = height;
    this.area = this.calcArea();
}

Rectangle.prototype.calcArea = function() {
    return this.width * this.height;
}

Rectangle.getName = function() {
    return this.name;
}

export { Rectangle };