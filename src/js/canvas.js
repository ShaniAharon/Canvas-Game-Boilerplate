import platform from '../img/platform.png'
import platformSmallTall from '../img/platformSmallTall.png'
import hills from '../img/hills.png'
import background from '../img/background.png'

import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'


const gCanvas = document.querySelector('.my-canvas')
const gCtx = gCanvas.getContext('2d')

gCanvas.width = 1024//innerWidth - 5
gCanvas.height = 576//innerHeight - 10

const gravity = 1.5

class Player {
  constructor() {
    this.speed = 10
    this.pos = {
      x: 100,
      y: 100,
    }
    this.velocity = {
      x: 0,
      y: 0,
    }
    this.width = 66
    this.height = 150
    this.image = createImage(spriteStandRight)
    this.frames = 0
    this.sprites = {
      stand: {
        right: createImage(spriteStandRight),
        left: createImage(spriteStandLeft),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: createImage(spriteRunRight),
        left: createImage(spriteRunLeft),
        cropWidth: 341,
        width: 127.875
      }
    }
    this.currSprite = this.sprites.stand.right
    this.currCropWidth = 177
  }
  draw() {
    // gCtx.fillStyle = 'red'
    // gCtx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    // 4 parametrs for crop the image
    gCtx.drawImage(this.currSprite,
      this.currCropWidth * this.frames, // x pos
      0, // y pos
      this.currCropWidth, // width: ;
      400, // height
      this.pos.x, this.pos.y, this.width, this.height)

  }
  update() {
    this.frames++
    if (this.frames > 59 && (this.currSprite === this.sprites.stand.right || this.currSprite === this.sprites.stand.left)) this.frames = 0
    else if (this.frames > 29 && (this.currSprite === this.sprites.run.right || this.currSprite === this.sprites.run.left)) this.frames = 0
    this.draw()
    this.pos.y += this.velocity.y
    this.pos.x += this.velocity.x

    if (this.pos.y + this.height + this.velocity.y <= gCanvas.height)
      this.velocity.y += gravity
    // else this.velocity.y = 0
  }
}

class Platform {
  constructor({ x, y, image }) {
    this.pos = {
      x,
      y,
    }

    this.image = image
    this.width = image.width
    this.height = image.height
  }

  draw() {
    gCtx.fillStyle = 'blue'
    // gCtx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    gCtx.drawImage(this.image, this.pos.x, this.pos.y)
  }
}

class GenericObject {
  constructor({ x, y, image }) {
    this.pos = {
      x,
      y,
    }

    this.image = image
    this.width = image.width
    this.height = image.height
  }

  draw() {
    gCtx.fillStyle = 'blue'
    // gCtx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    gCtx.drawImage(this.image, this.pos.x, this.pos.y)
  }
}

function createImage(imageSrc) {
  const image = new Image()
  image.src = imageSrc
  return image
}

let platfromimage = createImage(platform)
let platfromSmallTallImage = createImage(platformSmallTall)

let player = new Player()
let platforms = []
let genericObjects = []

let lastKey
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
}

let scrollOffset = 0

function init() {
  platfromimage = createImage(platform)

  player = new Player()
  platforms = [new Platform({ x: platfromimage.width * 4 + 300 - 2 + platfromimage.width - 290, y: 270, image: platfromSmallTallImage }), new Platform({ x: platfromimage.width * 2 + 100, y: 470, image: platfromimage }), new Platform({ x: platfromimage.width * 3 + 300, y: 470, image: platfromimage }), new Platform({ x: platfromimage.width * 4 + 300 - 2, y: 470, image: platfromimage }), new Platform({ x: platfromimage.width * 5 + 700 - 2, y: 470, image: platfromimage }), new Platform({ x: 0, y: 470, image: platfromimage }), new Platform({ x: platfromimage.width - 3, y: 470, image: platfromimage })]
  genericObjects = [new GenericObject({ x: 0, y: 0, image: createImage(background) }), new GenericObject({ x: 0, y: 0, image: createImage(hills) })]

  scrollOffset = 0
}
function animate() {
  requestAnimationFrame(animate)
  gCtx.fillStyle = 'white'
  gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height)
  genericObjects.forEach(genericObject => {
    genericObject.draw()
  })
  platforms.forEach((platform) => {
    platform.draw()
  })
  player.update()
  if (keys.right.pressed && player.pos.x < 400) {
    player.velocity.x = player.speed
  } else if ((keys.left.pressed && player.pos.x > 100) || (keys.left.pressed && scrollOffset === 0 && player.pos.x > 0)) {
    player.velocity.x = -player.speed
  } else {
    player.velocity.x = 0

    if (keys.right.pressed) {
      scrollOffset += player.speed
      platforms.forEach((platform) => {
        platform.pos.x -= player.speed
      })
      genericObjects.forEach(genericObject => {
        genericObject.pos.x -= player.speed * 0.66
      })
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed
      platforms.forEach((platform) => {
        platform.pos.x += 5
      })
      genericObjects.forEach(genericObject => {
        genericObject.pos.x += player.speed * 0.66
      })
    }
  }
  //platform collision detaction
  platforms.forEach((platform) => {
    if (
      player.pos.y + player.height <= platform.pos.y &&
      player.pos.y + player.height + player.velocity.y >= platform.pos.y &&
      player.pos.x + player.width >= platform.pos.x &&
      player.pos.x + player.width >= platform.pos.x &&
      player.pos.x <= platform.pos.x + platform.width
    )
      player.velocity.y = 0
  })

  // sprite switching
  if (keys.right.pressed && lastKey === 'right' && player.currSprite !== player.sprites.run.right) {
    player.frames = 1
    player.currSprite = player.sprites.run.right
    player.currCropWidth = player.sprites.run.cropWidth
    player.width = player.sprites.run.width
  } else if (keys.left.pressed && lastKey === 'left' && player.currSprite !== player.sprites.run.left) {
    player.currSprite = player.sprites.run.left
    player.currCropWidth = player.sprites.run.cropWidth
    player.width = player.sprites.run.width
  } else if (!keys.left.pressed && lastKey === 'left' && player.currSprite !== player.sprites.stand.left) {
    player.currSprite = player.sprites.stand.left
    player.currCropWidth = player.sprites.stand.cropWidth
    player.width = player.sprites.stand.width
  } else if (!keys.right.pressed && lastKey === 'right' && player.currSprite !== player.sprites.stand.right) {
    player.currSprite = player.sprites.stand.right
    player.currCropWidth = player.sprites.stand.cropWidth
    player.width = player.sprites.stand.width
  }

  // win condition
  if (scrollOffset > platfromimage.width * 5 + 300 - 2) console.log('you win');
  //lose condition
  if (player.pos.y > gCanvas.height) {
    init()
  }
}

init()
animate()

addEventListener('keydown', ({ key }) => {
  console.log('key down', key)
  switch (key) {
    case 'a':
      console.log('left')
      keys.left.pressed = true
      lastKey = 'left'
      break
    case 's':
      console.log('down')
      break
    case 'd':
      console.log('right')
      keys.right.pressed = true
      lastKey = 'right'
      break
    case 'w':
      console.log('up')
      player.velocity.y -= 25
      break
  }
})
addEventListener('keyup', ({ key }) => {
  console.log('key up', key)
  switch (key) {
    case 'a':
      console.log('left')
      keys.left.pressed = false
      break
    case 's':
      console.log('down')
      break
    case 'd':
      console.log('right')
      keys.right.pressed = false

      break
    case 'w':
      console.log('up')
      break
  }
})
