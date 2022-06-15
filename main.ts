basic.forever(function () {
    for (let index = 0; index < 20; index++) {
        music.playMelody("C5 - - - - - - C ", 120)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(1000)
        music.playMelody("C5 - - - - - - C ", 120)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
})
