class Ball{
    constructor(x, y, radius, sAngle, eAngle, speedX=5, speedY=5){
        this.x = x
        this.y = y        
        this.radius = radius
        this.sAngle = sAngle
        this.eAngle = eAngle
        this.speedX = speedX
        this.speedY = speedY
    }

    draw(ctx){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle)
        ctx.fillStyle = "white"
        ctx.fill()
    }

    move(){
        this.x += this.speedX
        this.y += this.speedY
    
        if(ball.y < 0)
            ball.speedY = 5
        else if (ball.y > table.height)
            ball.speedY = -5
    }

    collision(P1, P2){
        if(this.x == P1.x+P1.width+this.radius && this.y >= P1.y && this.y <= P1.y+P1.height){
            if(ball.speedY == 5)
                ball.speedY = 5
            else
                ball.speedY = -5
            ball.speedX = 5
        }
        else if(this.x == P2.x-this.radius && this.y >= P2.y && this.y <= P2.y+P2.height){
            if(ball.speedY == 5)
                ball.speedY = 5
            else
                ball.speedY = -5
            ball.speedX = -5
        }
    }


    update(ctx){
        this.move()
        this.draw(ctx)
    }
}