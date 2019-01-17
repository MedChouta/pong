class Player{
    constructor(x, y, width, height, speed){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = speed
    }

    draw(ctx){
        ctx.fillStyle = "white"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    move(keys, direction){
        for(let key in keys){
            var value = Number(key)
            if(value == direction.up)
                this.y -= this.speed
            else if (value == direction.down)
                this.y += this.speed
        }

        if(this.y < 0)
            this.y = 0
        
        if(this.y > 600-this.height)
            this.y = 600-this.height
    }
    
    update(ctx, keys, direction){
        this.draw(ctx)
        this.move(keys, direction)
    }
}