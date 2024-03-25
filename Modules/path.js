const path = require('path')

const joinPath = path.join('./Documents', 'images', 'flower.png')
console.log(joinPath)

const baseName = path.basename('Documents/images/flower.png')
console.log('base name', baseName)

const dirName = path.dirname('Documents/images/flower.png')
console.log('dir name', dirName)

const parsePath = path.parse('Documents/images/flower.png')
console.log('parse', parsePath)