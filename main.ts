basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . # # . .
            # . . # .
            # . . # .
            # . . # .
            . # # . .
            `)
    }
})
