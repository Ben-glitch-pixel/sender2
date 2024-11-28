radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showString("A")
    }
    if (receivedNumber == 2) {
        basic.showString("B")
    }
    if (receivedNumber == 3) {
        basic.showString("C")
    }
    if (receivedNumber == 4) {
        basic.showString("D")
    }
    if (receivedNumber == 5) {
        basic.showString("E", 0)
    }
    if (receivedNumber == 6) {
        basic.showString("F", 0)
    }
    if (receivedNumber == 7) {
        basic.showString("G", 0)
    }
    if (receivedNumber == 8) {
        basic.showString("H", 0)
    }
    if (receivedNumber == 9) {
        basic.showString("I", 0)
    }
    if (receivedNumber == 10) {
        basic.showString("J", 0)
    }
    if (receivedNumber == 11) {
        basic.showString("K")
    }
    if (receivedNumber == 12) {
        basic.showString("L", 0)
    }
    if (receivedNumber == 13) {
        basic.showString("M", 0)
    }
    if (receivedNumber == 14) {
        basic.showString("N", 0)
    }
    if (receivedNumber == 15) {
        basic.showString("O", 0)
    }
    if (receivedNumber == 16) {
        basic.showString("P", 0)
    }
    if (receivedNumber == 17) {
        basic.showString("Q", 0)
    }
    if (receivedNumber == 18) {
        basic.showString("R", 0)
    }
    if (receivedNumber == 19) {
        basic.showString("S", 0)
    }
    if (receivedNumber == 20) {
        basic.showString("T", 0)
    }
    if (receivedNumber == 21) {
        basic.showString("U", 0)
    }
    if (receivedNumber == 22) {
        basic.showString("V", 0)
    }
    if (receivedNumber == 23) {
        basic.showString("W", 0)
    }
    if (receivedNumber == 24) {
        basic.showString("X", 0)
    }
    if (receivedNumber == 25) {
        basic.showString("Y", 0)
    }
    if (receivedNumber == 26) {
        basic.showString("Z", 0)
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    led.plotBrightness(x, y, 255)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (msgmode == 0) {
        msgmode = 1
    } else {
        msgmode = 0
        basic.clearScreen()
        y = 0
        x = 0
        basic.turnRgbLedOff()
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    x += 1
})
let msgmode = 0
let x = 0
let y = 0
y = 0
x = 0
basic.forever(function () {
    if (led.point(3, 1)) {
        basic.pause(5000)
    }
    if (x == 5) {
        x = 0
        y += 1
    }
    if (led.point(2, 1)) {
    	
    }
    radio.setGroup(25)
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == false && led.point(3, 0) == false && led.point(4, 0) == false && led.point(0, 1) == false && led.point(1, 1) == true && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(1)
        basic.setLedColor(0x00ff00)
        basic.showString("A")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == false && led.point(3, 0) == false && led.point(4, 0) == false && led.point(0, 1) == true && led.point(1, 1) == false && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(2)
        basic.setLedColor(0x00ff00)
        basic.showString("B")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == false && led.point(3, 0) == false && led.point(4, 0) == false && led.point(0, 1) == true && led.point(1, 1) == true && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(3)
        basic.setLedColor(0x00ff00)
        basic.showString("C")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == false && led.point(3, 0) == false && led.point(4, 0) == true && led.point(0, 1) == false && led.point(1, 1) == false && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(4)
        basic.setLedColor(0x00ff00)
        basic.showString("D")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == false && led.point(3, 0) == false && led.point(4, 0) == true && led.point(0, 1) == false && led.point(1, 1) == true && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(5)
        basic.setLedColor(0x00ff00)
        basic.showString("E")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == false && led.point(3, 0) == false && led.point(4, 0) == true && led.point(0, 1) == true && led.point(1, 1) == false && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(6)
        basic.setLedColor(0x00ff00)
        basic.showString("F")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == false && led.point(3, 0) == false && led.point(4, 0) == true && led.point(0, 1) == true && led.point(1, 1) == true && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(7)
        basic.setLedColor(0x00ff00)
        basic.showString("G")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == false && led.point(3, 0) == true && led.point(4, 0) == false && led.point(0, 1) == false && led.point(1, 1) == false && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(8)
        basic.setLedColor(0x00ff00)
        basic.showString("H")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == false && led.point(3, 0) == true && led.point(4, 0) == false && led.point(0, 1) == false && led.point(1, 1) == false && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(9)
        basic.setLedColor(0x00ff00)
        basic.showString("I")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == false && led.point(3, 0) == true && led.point(4, 0) == false && led.point(0, 1) == false && led.point(1, 1) == true && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(10)
        basic.setLedColor(0x00ff00)
        basic.showString("J")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == false && led.point(3, 0) == true && led.point(4, 0) == false && led.point(0, 1) == true && led.point(1, 1) == true && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(11)
        basic.setLedColor(0x00ff00)
        basic.showString("K")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == false && led.point(3, 0) == true && led.point(4, 0) == true && led.point(0, 1) == false && led.point(1, 1) == false && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(12)
        basic.setLedColor(0x00ff00)
        basic.showString("L")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == false && led.point(3, 0) == true && led.point(4, 0) == true && led.point(0, 1) == false && led.point(1, 1) == true && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(13)
        basic.setLedColor(0x00ff00)
        basic.showString("M")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == false && led.point(3, 0) == true && led.point(4, 0) == true && led.point(0, 1) == true && led.point(1, 1) == false && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(14)
        basic.setLedColor(0x00ff00)
        basic.showString("N")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == false && led.point(3, 0) == true && led.point(4, 0) == true && led.point(0, 1) == true && led.point(1, 1) == true && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(15)
        basic.setLedColor(0x00ff00)
        basic.showString("O")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == true && led.point(3, 0) == false && led.point(4, 0) == false && led.point(0, 1) == false && led.point(1, 1) == false && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(16)
        basic.setLedColor(0x00ff00)
        basic.showString("P")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == true && led.point(3, 0) == false && led.point(4, 0) == false && led.point(0, 1) == false && led.point(1, 1) == true && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(17)
        basic.setLedColor(0x00ff00)
        basic.showString("Q")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == true && led.point(3, 0) == false && led.point(4, 0) == false && led.point(0, 1) == true && led.point(1, 1) == false && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(18)
        basic.setLedColor(0x00ff00)
        basic.showString("R")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == true && led.point(3, 0) == false && led.point(4, 0) == false && led.point(0, 1) == true && led.point(1, 1) == true && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(19)
        basic.setLedColor(0x00ff00)
        basic.showString("S")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == true && led.point(3, 0) == false && led.point(4, 0) == true && led.point(0, 1) == false && led.point(1, 1) == false && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(20)
        basic.setLedColor(0x00ff00)
        basic.showString("T")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == true && led.point(3, 0) == false && led.point(4, 0) == true && led.point(0, 1) == false && led.point(1, 1) == true && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(21)
        basic.setLedColor(0x00ff00)
        basic.showString("U")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == true && led.point(3, 0) == false && led.point(4, 0) == true && led.point(0, 1) == true && led.point(1, 1) == false && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(22)
        basic.setLedColor(0x00ff00)
        basic.showString("V")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == true && led.point(3, 0) == false && led.point(4, 0) == true && led.point(0, 1) == true && led.point(1, 1) == true && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(23)
        basic.setLedColor(0x00ff00)
        basic.showString("W")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == true && led.point(3, 0) == true && led.point(4, 0) == false && led.point(0, 1) == false && led.point(1, 1) == false && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(24)
        basic.setLedColor(0x00ff00)
        basic.showString("X")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == true && led.point(3, 0) == true && led.point(4, 0) == false && led.point(0, 1) == false && led.point(1, 1) == true && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(25)
        basic.setLedColor(0x00ff00)
        basic.showString("Y")
        basic.pause(5000)
    }
    if (led.point(0, 0) == true && led.point(1, 0) == false && led.point(2, 0) == true && led.point(3, 0) == true && led.point(4, 0) == false && led.point(0, 1) == true && led.point(1, 1) == false && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(26)
        basic.setLedColor(0x00ff00)
        basic.showString("Z")
        basic.pause(5000)
    }
})
