import * as indx from "./index";
const ctx=window.canvas.getContext('2d')
let interval
let frames = 0
const stars = []
const shots = []


class Board {
    constructor() {
      this.x = 0
      this.y = 0
      this.width = window.canvas.width
      this.height = window.canvas.height
      this.img = new Image()
      this.img.src ='https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png'
      this.img.onload = () => {
        this.draw()
      }
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
  }
  
  class XWing {
    constructor() {
      this.width = 50
      this.height = 40
      this.y = window.canvas.height - this.height
      this.x = 40
      this.img = new Image()
      this.img.src =
        'https://previews.dropbox.com/p/thumb/ABAcg5Xl-d-RRZAdpMvTtjwcnlizHF1i2HCbYMUp2t4WAOx1Wx-KdqasI-YbUiZjL0E-baPppS0_nl9gBv4a3CdTkmJhPd9DcrC0e6Xm8enZWeDEPJef9qp6IA1vckW6xenoc5Qu6h1X8JLYXIWSELS0YQ4zIx5cTiAkfaFEmgmu3r4eC7lHNQbmLyXWWx23JQwPdlcHgiw7chlgSxo9efK1lZO9yRwPU6GVwPUn0DpSkrCuQShuE2ENMTx3AR0X_VuC4sPB08Eqvdf51tr80dNehFe8ob8HEL0VIzRCWUZ3vawQ4R-uPGjYV4L2VQBizUTWJNkOxb15Iu4ie24Q9Q3N9Qets7I_PUm6Kw-He-jpsw/p.png?fv_content=true&size_mode=5'
      this.img.onload = () => {
        this.draw()
      }
    }
    draw() {
      ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
    shot(){
      generateShot(this.x, this.y,"xwing")
      drawShot()
      }

    moveLeft(){
      if(this.x >=40){
        this.x -= 1
      }
    }
    moveRight(){
      if (this.x <=200){
        this.x += 1
      }
    }
    lastMove(){
      // if(moveStatus=="left"){
        if(this.x <125){
          this.x += 1
        // }
      }
      // else if(moveStatus=="right"){
        else if(this.x >125){
          this.x -= 1
        }
        else{

        }
      // }
    }
  }
const xWing = new XWing()
  function flashAnimation() {
    if (frames % 5 === 0) {
      if (xWing.animate === 3) {
        xWing.animate = 0
      } else {
        xWing.animate++
      }
    }
  }

  class TieFighter {
    constructor() {
      this.width = 80
      this.height = 40
      this.y =  this.height -15
      this.x = 25
      this.img = new Image()
      this.img.src =
      'https://previews.dropbox.com/p/thumb/ABAzThjXcVARB-N9_T9L2uxUQ2naJgvjaIwrvR8T7LYb-Pez0v-18COB5BdOpyGxSlhp3OolCbUIPH-iER4OjBkM00MSQAYnhvzFtGS5vkKiMvtQadcffU11Fyn6RCV-4JNio73uzT50O_wniNHNTvih4zOC6eT6vFxY-vgUN1P_ie202vCW4ZAun6gxlO-kdg0KWAwJ60iDRj2pQ36l5wPJ3LPzfgHznMcN6eo9XuZKLTGSj20fiZcxDTiuEd_uEYCRQzApATZ2yrUgxrQ4ud270AvNbc95U-HeF5iiRC19SJuFOdJ9Ypexf5yKlxrjo38ghwlGNdQfJqRFwled7fqjN0jFcqZf9LbPWDtjF95Scg/p.png?fv_content=true&size_mode=5'
      this.img.onload = () => {
        this.draw()
      }
    }
    draw() {
      ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
    shot(){
      generateShot(this.x+15, this.y+30, "tFight")
      drawShot()
      }
    moveRight(){
      if(this.x <=185){
        this.x += 1
      }
    }
    moveLeft(){
      if(this.x >=25){
        this.x -= 1
      }
    }
    lastMove(){
        if(this.x <=550){
          this.x += 1
        }
    }
  }
const tieFight = new TieFighter()
  function tieAnimation() {
    if (frames % 5 === 0) {
      if (tieFight.animate === 3) {
        tieFight.animate = 0
      } else {
        tieFight.animate++
      }
    }
  }
  
  class Star {
    constructor(y) {
      this.x = y
      this.y = -window.canvas.height 
      this.width = 3
      this.height = 3
      this.img = new Image()
      this.img.src = 'http://pixelartmaker.com/art/cffedf3d8504aa9.png'
    }
    draw() {
      this.y++
      ctx.drawImage(
        this.img,
         this.x,
          this.y, 
          this.width,
           this.height)
    }
  }
  

  function generateStars() {
    if (frames % 30 === 0) {
      const randomPosition = Math.floor(Math.random() * window.canvas.width)
      const star = new Star(randomPosition)
      stars.push(star)
    }
  }
  function drawStars() {
    stars.forEach(start => start.draw())
  }
  function clearCanvas() {
    ctx.clearRect(0, 0, window.canvas.width, window.canvas.height)
  }

  class Shot {
    constructor(x, y , listener) {
      this.x = x
      this.y = y
      this.width = 10
      this.height = 10
      this.img = new Image()
      this.img.src = 'https://res.cloudinary.com/mirukusheku/image/upload/v1495140035/Red_laser-ConvertImage_votu8o.png'
      this.whoShot=listener
    }
    draw() {
      if (this.whoShot==="xwing"){
      this.y--
      ctx.drawImage(
        this.img,
         this.x,
          this.y, 
          this.width,
           this.height)
          }
           else{
            this.y++
            ctx.drawImage(
              this.img,
               this.x,
                this.y, 
                this.width,
                 this.height)
           }
    }
  }

  function generateShot(x, y, who) {
    indx.shotAudio.play()
    if (frames % 30 === 0) {
      const xPosition = x + 20
      const shot = new Shot(xPosition, y, who)
      shots.push(shot)
    }
  }
  function drawShot() {
    shots.forEach(shot => shot.draw())
  }



  class DeathStart {
    constructor() {
      this.width = 60
      this.height = 70
      this.y = -90
      this.x = 120
      this.img = new Image()
      this.img.src =
        'https://www.pngkey.com/png/full/14-142561_death-star-pixel-art.png'
      this.img.onload = () => {
        this.draw()
      }
    }
    draw() {
      ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
    shot(){
      generateShot(this.x, this.y,"DeathStart")
      drawShot()
      }

    moveDown(){
      if(this.y < 5){
        this.y += 1;
      }
    }
    moveUp(){
      if(this.y < -90){
        this.y -= 1;
      }
    }
  }
const deathStart=new DeathStart()




  const board = new Board()
  let listenerxWing=false
  let listenertieFight=false
  let moveRightListener=false
  let moveLeftListener=false
  let listenerD =false
  let moveStatus = "left"
  let restoreCanvasListener= false


  const shooter=(whoShot)=>{
    if(whoShot ==="xwing"){
      listenerxWing = true
    }else if(whoShot==="tieFight"){
      listenertieFight = true
        }else if(whoShot==="DeathStart"){
          listenerD= true
        }
  }
  const shooterOf=()=>{
      listenerxWing = false
      listenertieFight = false
      setTimeout(moveNave(),5000)
  }
  const endShooterOf=()=>{
    listenerxWing = false
    listenertieFight = false
    listenerD=false
}

  const moveNave=()=>{
    if(moveStatus==="left"){
      moveRightListener = true
    }
    else if(moveStatus==="right"){
      moveLeftListener = true
    }
  }
  const stopNave=()=>{
    moveRightListener = false
    moveLeftListener = false
    if(moveStatus==="left"){
      moveStatus="right"
    }else{
      moveStatus="left"
    }
  }
  let lastMoveListener = false
  const lastMove=(data)=>{
    lastMoveListener=true
    let marker = data.marker;
    // console.log('marker: ', marker);
    const changeImageLose=()=>xWing.img.src="https://i.pinimg.com/originals/4c/a0/92/4ca092beb9b20f34fdd3f22e6686462f.png";
    const changeImageWin=()=>deathStart.img.src="https://i.pinimg.com/originals/4c/a0/92/4ca092beb9b20f34fdd3f22e6686462f.png";
    const finishGame=()=>indx.finish(data)
    const restoreStatusmove =()=>restoreCanvasListener=false
    const restoreCanvas=()=>{
      // restoreCanvasListener=true
      lastMoveListener=false
      moveStatus = "left"
      xWing.img.src='https://previews.dropbox.com/p/thumb/ABAcg5Xl-d-RRZAdpMvTtjwcnlizHF1i2HCbYMUp2t4WAOx1Wx-KdqasI-YbUiZjL0E-baPppS0_nl9gBv4a3CdTkmJhPd9DcrC0e6Xm8enZWeDEPJef9qp6IA1vckW6xenoc5Qu6h1X8JLYXIWSELS0YQ4zIx5cTiAkfaFEmgmu3r4eC7lHNQbmLyXWWx23JQwPdlcHgiw7chlgSxo9efK1lZO9yRwPU6GVwPUn0DpSkrCuQShuE2ENMTx3AR0X_VuC4sPB08Eqvdf51tr80dNehFe8ob8HEL0VIzRCWUZ3vawQ4R-uPGjYV4L2VQBizUTWJNkOxb15Iu4ie24Q9Q3N9Qets7I_PUm6Kw-He-jpsw/p.png?fv_content=true&size_mode=5';
      xWing.x=40
      tieFight.x=25
      deathStart.img.src='https://www.pngkey.com/png/full/14-142561_death-star-pixel-art.png';
      deathStart.y=-90
      endShooterOf()
      setTimeout(restoreStatusmove,2000)
    }
      if (marker >= 1000) {
        shooter("xwing")
        listenerxWing===true
        setTimeout(changeImageWin,3000)
        setTimeout(finishGame,6000)
        setTimeout(restoreCanvas,6100)
      }
      //Lose
      else {
        shooter("DeathStart")
        listenerD===true
        setTimeout(changeImageLose,3000)
        setTimeout(finishGame,6000)
        setTimeout(restoreCanvas,6100)
      }

    // indx.finish(data)
  }
 function update() {
   if(window.canvas.className==="showCanvas"){
      frames++
      clearCanvas()
      board.draw()
      flashAnimation()
      xWing.draw()
      tieFight.draw()
      deathStart.draw()
      tieAnimation()
      generateStars()
      drawStars()
      drawShot()
    
    if(listenerxWing===true){
      xWing.shot()
    }
    if(listenertieFight===true){
      tieFight.shot()
    }
    if(listenerD===true){
      deathStart.shot()
    }
    generateStars()
    drawStars()
    if(moveRightListener===true){
      xWing.moveRight()
      tieFight.moveRight()
    }
    if(moveLeftListener===true){
      xWing.moveLeft()
      tieFight.moveLeft()
     }
     if(lastMoveListener===true){
       deathStart.moveDown()
       tieFight.lastMove()
       xWing.lastMove()
     }
     //  if(restoreCanvasListener===true){
       //    deathStart.moveUp()
       //    tieFight.moveLeft()
       //    xWing.moveLeft()
       //  }
       drawShot()
      }

  }
  interval = setInterval(update, 1000 / 60)


  export  {update as update, xWing as xWing, tieFight as tieFight,shooter as shot, shooterOf as shotOf, stopNave as move, lastMove as lastMove }