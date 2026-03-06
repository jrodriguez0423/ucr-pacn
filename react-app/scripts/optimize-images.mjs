import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const rootDir = process.cwd()
const publicDir = path.join(rootDir, 'public')

const galleryImages = [
  'DSC06969.JPG',
  'DSC06979.JPG',
  'DSC08053.JPG',
  '_TJL0012.JPG',
  '_TJL8163.JPG',
  '_TJL8200.JPG',
  '_TJL8206.JPG',
  '_TJL8807.JPG',
  '_TJL8813.JPG',
]

const boardImages = [
  'Alyanna Karmela Dizon.jpg',
  'Angelo Tagoylo.JPG',
  'Bethany Cao.jpg',
  'Cadence Saniel.PNG',
  'Carl_Edpao_PACN37_Headshot.JPG',
  'Casey Frasco.jpg',
  'Frances Javate.jpeg',
  'Gaby Alejandro.jpg',
  'Hannah Almero.JPG',
  'Jacob Stoops.JPG',
  'Janae Batayola.JPG',
  'Jason Tenazas.JPG',
  'Jaycee Jabon Hipe.JPG',
  'Justin_Rodriguez.WEBP',
  'karena pascual.jpeg',
  'Kat Cenabre.jpg',
  'KlarisseAllyssaDayrit.JPEG',
  'Leila Betters.jpg',
  'Makaela Dato.jpeg',
  'Mira Ramos.JPG',
  'Nathan John Leopoldo.jpg',
  'Patricia Delfin.JPG',
  'Rhean Ashley Ramos.jpg',
  'Rianna Granados.jpg',
  'riley.jpeg',
  'Rylie Nash.jpg',
  'Sofie Gange.jpg',
  'Sophia Avenido.jpg',
  'Trisha Rivera.JPG',
  'Zion.jpg',
]

const heroImage = 'Someday 2.JPEG'

function toWebpName(fileName) {
  return `${path.parse(fileName).name}.webp`
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true })
}

async function optimizeImage({ sourcePath, outputPath, width, height, quality }) {
  const transformer = sharp(sourcePath, { failOn: 'none' }).rotate()
  const resized = height
    ? transformer.resize({ width, height, fit: 'cover', position: 'attention', withoutEnlargement: true })
    : transformer.resize({ width, withoutEnlargement: true })

  await resized.webp({ quality }).toFile(outputPath)
}

async function main() {
  const optimizedGalleryDir = path.join(publicDir, 'carousel-optimized')
  const optimizedBoardDir = path.join(publicDir, 'board-pics-optimized')
  const optimizedImagesDir = path.join(publicDir, 'images')

  await Promise.all([
    ensureDir(optimizedGalleryDir),
    ensureDir(optimizedBoardDir),
    ensureDir(optimizedImagesDir),
  ])

  await Promise.all(
    galleryImages.map((fileName) =>
      optimizeImage({
        sourcePath: path.join(publicDir, 'carousel', fileName),
        outputPath: path.join(optimizedGalleryDir, toWebpName(fileName)),
        width: 1400,
        quality: 68,
      }),
    ),
  )

  await Promise.all(
    boardImages.map((fileName) =>
      optimizeImage({
        sourcePath: path.join(publicDir, 'board-pics', fileName),
        outputPath: path.join(optimizedBoardDir, toWebpName(fileName)),
        width: 960,
        quality: 72,
      }),
    ),
  )

  await optimizeImage({
    sourcePath: path.join(publicDir, 'images', heroImage),
    outputPath: path.join(optimizedImagesDir, 'Someday-hero.webp'),
    width: 1920,
    quality: 74,
  })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
