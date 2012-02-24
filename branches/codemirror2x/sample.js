// Here you see some JavaScript code. Mess around with it to get
// acquainted with CodeMirror's features.

// Press enter inside the object and your new line will be suitably
// indented.
var keyBindings = {
  enter: "newline-and-indent",
  tab: "reindent-selection",
  ctrl_z: "undo",
  ctrl_y: "redo",
  ctrl_backspace: "undo-for-safari (which blocks ctrl-z)",
  ctrl_bracket: "highlight-brackets",
  ctrl_shift_bracket: "jump-to-matching-bracket"
};

// Press tab on the next line and the wrong indentation will be fixed.
      var regex = /foo|bar/i;

function example(x) {
  // Local variables get a different colour than global ones.
  var y = 44.4;
  return x + y - z;
}
