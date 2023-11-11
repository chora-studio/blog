import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'docs')

export const getDocs = () => {
  const fileNames = fs.readdirSync(docsDirectory)
  return fileNames.map((fileName) => {
    // set id and full path
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(docsDirectory, fileName)

    // read file contents
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // parse file contents
    const { data } = matter(fileContents)

    // return id and data
    return {
      id,
      ...data,
    }
  }) as any[]
}
