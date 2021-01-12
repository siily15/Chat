//let gameBoard = {
//    'human': [
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--']
//    ],
//    'machine': [
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'],
//        ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--']
//    ],
//
//}
//
//for (let len = 4; len > 0; len--) {
//    for (let i = 1; i <= 5 - len; i++) {
//        initShip(len, 'human')
//        initShip(len, 'machine')
//    }
//}
//
//function isAllowed(d, l, x, y, p) {
//    let result = true
//
//    for (let i = 0; i < l; i++) {
//        switch (d) {
//            case 0:
//                if (gameBoard[p][x][y + i] != '--') {
//                    result = false
//                }
//                break
//            case 1:
//                if (gameBoard[p][x + i][y] != '--') {
//                    result = false
//                }
//                break
//        }
//    }
//
//    return result
//}
//
//function initShip(length, player) {
//
//    let direction = Math.floor(Math.random() * 2)
//
//
//    let x, y
//
//    switch (direction) {
//
//        case 0: // vertical
//
//            do {
//                x = Math.floor(Math.random() * 10)
//                y = Math.floor(Math.random() * (11 - length))
//            } while (!isAllowed(direction, length, x, y, player))
//
//            for (let i = 0; i < length; i++) {
//                gameBoard[player][x][y + i] = 's' + length
//                initShip(x, y + i, player)
//            }
//
//            break
//
//        case 1: // horizontal
//
//            do {
//                x = Math.floor(Math.random() * (11 - length))
//                y = Math.floor(Math.random() * 10)
//            } while (!isAllowed(direction, length, x, y, player))
//
//            for (let i = 0; i < length; i++) {
//                gameBoard[player][x + i][y] = 's' + length
//                initShip(x + i, y, player)
//            }
//
//            break
//    }
//}
//
//module.exports = {
//    gameBoard
//}
//
