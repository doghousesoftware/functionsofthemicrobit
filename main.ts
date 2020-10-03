let Compass = 0
let temp = 0
input.onButtonPressed(Button.A, function () {
    if (Compass <= 45) {
        basic.showString("N")
    } else if (Compass <= 135) {
        basic.showString("E")
    } else if (Compass <= 225) {
        basic.showString("S")
    } else if (Compass <= 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (temp >= 70) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    Compass = input.compassHeading()
    temp = input.temperature() * 9 / 5 + 32
})
