let steps = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        steps += 1
        basic.showNumber(steps)
    } else {
        music.play(music.createSoundExpression(
        WaveShape.Noise,
        2859,
        2364,
        255,
        22,
        1000,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . # # .
            . . . . .
            . # # # .
            . . # . .
            `)
        basic.pause(1000)
        basic.showIcon(IconNames.StickFigure)
        basic.pause(5000)
        basic.clearScreen()
        steps = 0
    }
})
