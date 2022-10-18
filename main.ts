let start = 0
let valeur = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    valeur = input.runningTime() - start
    basic.showNumber(valeur / 1000)
})
basic.forever(function () {
	
})
