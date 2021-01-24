// import canvas from "./index"
// console.log('canvas: ', canvas);
// class Board {
//     constructor() {
//       this.x = 0
//       this.y = 0
//       this.width = canvas.width
//       this.height = canvas.height
//       this.img = new Image()
//       this.img.src =
//         'https://miro.medium.com/max/2968/1*FyRhNtrlLqdt3Gl0jMzGDQ.png'
//       this.img.onload = () => {
//         this.draw()
//       }
//     }
//     draw() {
//       ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
//     }
//   }
  
//   class Flash {
//     constructor() {
//       this.width = 100
//       this.height = 100
//       this.y = 0 // canvas.height - this.height
//       this.x = 10
//       this.vx = 0
//       this.vy = 0
//       this.animate = 0
//       this.position = 0
//       this.jumpStrenght = 18
//       this.hp = 3
//       this.img = new Image()
//       this.img.src =
//         'https://i.postimg.cc/4xJz19BJ/db987eb-c7bb80d1-b7e7-414d-864d-14309f27ee11.png'
//       this.img.onload = () => {
//         this.draw()
//       }
//     }
//     draw() {
//       if (this.y > canvas.height - this.height) {
//         this.y = canvas.height - this.height
//       } else {
//         this.vy++
//       }
//       ctx.drawImage(
//         // imagen de fuente
//         this.img,
//         // posición de x en la imagen (fuente, sx)
//         (this.animate * 256) / 4,
//         // posición de y en la imagen (fuente, sy)
//         (this.position * 256) / 4,
//         // ancho desde la posición de x (sw)
//         256 / 4,
//         // alto desde la posición de y (sw)
//         256 / 4,
//         // posición de x en canvas (destino, dx)
//         this.x,
//         // posición de y en canvas (destino, dy)
//         this.y,
//         // ancho desde la posición de x en canvas (dw)
//         this.width,
//         // alto desde la posición de y en canvas (dh)
//         this.height
//       )
//     }
//     isTouching(obstacle) {
//       // algo está tratando de ocupar el mismo espacio en canvas que flash
//       return (
//         this.x < obstacle.x + obstacle.width &&
//         this.x + this.width > obstacle.x &&
//         this.y < obstacle.y + obstacle.height &&
//         this.y + this.height > obstacle.y
//       )
//     }
//     moveLeft() {
//       this.vx -= 3
//       this.position = 1
//     }
//     moveRight() {
//       this.vx += 3
//       this.position = 2
//     }
//     jump() {
//       this.vy = -this.jumpStrenght * 2
//     }
//   }
  
//   class Ice {
//     constructor(y) {
//       this.x = canvas.width
//       this.y = y
//       this.width = 50
//       this.height = 50
//       this.img = new Image()
//       this.img.src = 'http://pixelartmaker.com/art/d6e55b4f17d7d6a.png'
//     }
//     draw() {
//       this.x--
//       ctx.drawImage(
//         this.img,
//          this.x,
//           this.y, 
//           this.width,
//            this.height)
//     }
//   }
export default Board;



class  {
    constructor() {
      this.width = 50
      this.height = 40
      this.y = canvas.height - this.height
      this.x = 40
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
    // isTouching(obstacle) {
    //   // algo está tratando de ocupar el mismo espacio en canvas que flash
    //   return (
    //     this.x < obstacle.x + obstacle.width &&
    //     this.x + this.width > obstacle.x &&
    //     this.y < obstacle.y + obstacle.height &&
    //     this.y + this.height > obstacle.y
    //   )
    // }
    // moveLeft() {
    //   this.vx -= 3
    //   this.position = 1
    // }
    // moveRight() {
    //   this.vx += 3
    //   this.position = 2
    // }
    // jump() {
    //   this.vy = -this.jumpStrenght * 2
    // }
  }
const flash = new XWing()
  function flashAnimation() {
    if (frames % 5 === 0) {
      if (flash.animate === 3) {
        flash.animate = 0
      } else {
        flash.animate++
      }
    }
  }