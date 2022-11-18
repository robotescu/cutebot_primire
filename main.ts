radio.onReceivedString(function (receivedString) {
    if (receivedString == "Fata") {
        cuteBot.motors(70, 70)
    } else if (receivedString == "Spate") {
        cuteBot.motors(-70, -70)
    } else if (receivedString == "Stanga") {
        cuteBot.motors(30, 50)
    } else if (receivedString == "Dreapta") {
        cuteBot.motors(50, 30)
    } else if (receivedString == "Stop") {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    }
    basic.pause(500)
    cuteBot.stopcar()
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
})
basic.showIcon(IconNames.Tortoise)
let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
radio.setGroup(2)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
strip.showColor(neopixel.colors(NeoPixelColors.Violet))
basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 10) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
