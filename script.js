//your JS code here. If required.
    function focusNextInput(currentInput) {
        const nextInput = currentInput.nextElementSibling;
        if (nextInput && currentInput.value.length === 1) {
        nextInput.focus();
        }
    }

    function focusPrevInput(currentInput) {
        const prevInput = currentInput.previousElementSibling;
        if (prevInput && currentInput.value.length === 0 && event.key === 'Backspace') {
        prevInput.focus();
        }
    }