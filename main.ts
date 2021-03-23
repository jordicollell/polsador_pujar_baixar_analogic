let llum = 0
led.setBrightness(0)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        llum += 1
        led.setBrightness(llum)
        basic.pause(25)
        if (llum > 255) {
            llum = 255
        }
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        llum += -1
        led.setBrightness(llum)
        basic.pause(25)
        if (llum <= 0) {
            llum = 0
        }
    }
})
