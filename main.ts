controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log("Checking condition" + (game.runtime() - timestampLastShot) + "greather than" + "5000")
    if (game.runtime() - timestampLastShot >= 5000) {
        projectile = sprites.createProjectileFromSprite(img`
            . . f f f f . . . . f f f f . . 
            . f d d d d f . . f d d d d f . 
            . d d d d d d f f d d d d d d . 
            . f d d d d d d d d d d d d f . 
            . f d d d d d d d d d d d d f . 
            . d d d d d d f f d d d d d d . 
            . f d d d d f . . f d d d d f . 
            . . f f f f . . . . f f f f . . 
            `, mySprite, 50, 0)
        timestampLastShot = game.runtime()
        console.log("setting timestamp to " + timestampLastShot)
    }
})
let projectile: Sprite = null
let timestampLastShot = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    .................bbbb........bbbb
    .................b99bb......bb99c
    .................c999bb....bb999c
    .................c9b99bccccb99b9c
    .................c9bb99bccb99bb9c
    .................c93b99999999b39c
    .................c93399999999339c
    .................c99399999999399c
    .................c99999119999999c
    ...bbbbbb........c99ff91119ff999c
    .bb999999c.......c99ff11119ff999c
    .b99999999c......c99911111119999c
    b9999111999c.....c9911fff1111999c
    b9991111199c.....cb9911fff11c999c
    b99111dd119c.....cb9c111111cc999c
    c9911dbbddbc....ccb99cc33bb99999c
    c9911bbbdbbccccbb99999c33b999999c
    c9991bb9999999999999999bb9999999c
    c999b999999999999999999911119999c
    .c999999999999999999999111111999c
    .cc99999999999999999991111111999c
    ..c99999999999999999991111111199c
    ..c99999999999999999911111111199c
    ..c9999999999999999991111111119bc
    ..c9999999999999999991111111119f.
    ..c999999999999999999111111111ff.
    ..c99999999999999999911111111bf..
    ..c9999991111119999999111111bf...
    ..c99999111111119999991111bbbf...
    ..c9999bcccccccccc9999bfffbbf....
    ..c9999c.fbbf.....c999f..fbbf....
    .c9999cc.fbbf.....c999f..fbbf....
    .c999cc..fbf.......c99f..fbbf....
    .c99cc..fbbf.......c99f..fbbf....
    .c99c...fbbf.......c99f..fbbf....
    .c99c...fbbbf......c99f..fbbf....
    .c9bc....ffff......c99f..fbbbf...
    .c999c.............c999f..fbbf...
    .c999c.............cc99f..ffff...
    ..cccc..............cfff.........
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
timestampLastShot = 0
console.log("Timestamp set to " + timestampLastShot)
console.log("time since start (ms is)" + game.runtime())
