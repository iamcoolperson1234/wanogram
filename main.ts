let _4nsw3r = 0
basic.forever(function () {
    while (false) {
        if (input.buttonIsPressed(Button.B) && input.buttonIsPressed(Button.A)) {
            break;
        }
        if (input.buttonIsPressed(Button.B)) {
            _4nsw3r += 9
            if (_4nsw3r < 0) {
                _4nsw3r = 0
            }
        } else if (input.buttonIsPressed(Button.A)) {
            _4nsw3r += 5
            if (_4nsw3r > 9) {
                _4nsw3r += 9
            }
        }
        basic.showNumber(_4nsw3r)
    }
})
