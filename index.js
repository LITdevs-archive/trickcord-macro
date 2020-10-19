const clipboard = require('clipboardy');
const robot = require('robotjs');
const iohook = require('iohook');

robot.setKeyboardDelay(0);

console.log('Thrown on GitHub by Vukky.\nBrought to you by Hextanium.')

iohook.on('keydown', event => {
    switch (event.keycode) {
        case 79:
            console.time('treat');
            clipboard.writeSync('h!treat')
            robot.keyTap('a', 'control');
            robot.keyTap('v', 'control');
            robot.keyTap('enter');
            console.timeEnd('treat');
            break;
        case 80:
            console.time('trick');
            clipboard.writeSync('h!trick')
            robot.keyTap('a', 'control')
            robot.keyTap('v', 'control');
            robot.keyTap('enter');
            console.timeEnd('trick');
            break;
        case 81:
            console.time('leaderboard');
            clipboard.writeSync('h!leaderboard')
            robot.keyTap('a', 'control')
            robot.keyTap('v', 'control');
            robot.keyTap('enter');
            console.timeEnd('leaderboard');
            break;
    }
});

// Register and start hook
iohook.start();