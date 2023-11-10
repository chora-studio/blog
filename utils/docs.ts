import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'docs')

export function getAllDocs() {
  const fileNames = fs.readdirSync(docsDirectory)
  return fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(docsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const { content, data} = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      content,
      ...data,
    }
  }) as any[]
}
