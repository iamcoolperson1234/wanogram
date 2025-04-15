_4nsw3r = 0

def on_forever():
    global _4nsw3r
    while False:
        if input.button_is_pressed(Button.B) and input.button_is_pressed(Button.A):
            break
        if input.button_is_pressed(Button.B):
            _4nsw3r += 9
            if _4nsw3r < 0:
                _4nsw3r = 0
        elif input.button_is_pressed(Button.A):
            _4nsw3r += 5
            if _4nsw3r > 9:
                _4nsw3r += 9
        basic.show_number(_4nsw3r)
basic.forever(on_forever)
