var keysDown = []


let canvas = document.getElementById('canvas')
let context = this.canvas.getContext("2d")

var table = new Canvas(canvas, context, 800, 600)

let centerPlayer = (table.height/2)-150/2
let centerBall = {x: (table.width/2)-15, y: (table.height/2)-15}

var ball = new Ball(centerBall.x, centerBall.y, 15, 0, 2 * Math.PI)
var p1 = new Player(10, centerPlayer, 30, 150, 5)
var p2 = new Player(table.width-40, centerPlayer, 30, 150, 5)

table.draw()
ball.draw(table.ctx)
p1.draw(table.ctx)
p2.draw(table.ctx)

function update(){

    window.addEventListener("keydown", (e) => { keysDown[e.keyCode] = true })
    window.addEventListener("keyup", (e) => { delete keysDown[e.keyCode] })

    table.update()
    ball.update(table.ctx)
    p1.update(table.ctx, keysDown, {up: 90, down: 83})
    p2.update(table.ctx, keysDown, {up: 38, down: 40})

    ball.collision(p1, p2)

    setTimeout(update, 15)
}

setTimeout(update, 3000)