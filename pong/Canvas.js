class Canvas{
    constructor(canvas, ctx, width, height){
        this.canvas = canvas
        this.ctx = ctx
        this.width = width
        this.height = height
     }

    draw(){
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(0, 0, this.width, this.height)        
    }

    update(){
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.draw()
     }
 }
