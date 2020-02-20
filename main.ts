input.onButtonPressed(Button.AB, function () {
    radio.sendString(pin)
    pin = ""
})
input.onButtonPressed(Button.B, function () {
    pin = "" + pin + "0"
})
input.onButtonPressed(Button.A, function () {
    pin = "" + pin + "1"
})
let pin = ""
radio.setGroup(88)
pin = ""
