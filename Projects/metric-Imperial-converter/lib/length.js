module.exports = function() {

    this.meterTofeet = function(m) {
        return (m * 3.2808).toFixed(2);
    }

    this.feetToMeter = function(fy) {
        return ft / 3.2808;
    }

    this.inchToCm = function(inch) {
        return inch / 0.39370;
    }

    this.cmToInch = function(cm) {
        return cm * 0.39370;
    }

    this.mmToInch = function(mm) {
        return mm * 0.039370;
    }

    this.inchToMm = function(inch) {
        return inch / 0.039370;
    }

    this.inchToFeet = function(inch) {
        return inch * 0.083333;
    }

    this.feetToInch = function(ft) {
        return ft * 12.000;
    }

}