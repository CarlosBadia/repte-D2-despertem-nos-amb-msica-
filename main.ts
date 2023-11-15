basic.forever(function () {
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("D B - B C C5 - C5 ", 200), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.stringPlayable("F A C5 B F C5 B A ", 120), music.PlaybackMode.UntilDone)
    }
})
