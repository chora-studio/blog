import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const docsDirectory = path.join(process.cwd(), 'docs')

export async function getDoc(id: string) {
  const fullPath = path.join(docsDirectory, `${id}.md`)

  // read file contents
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // parse file contents
  const { content, data } = matter(fileContents)

  // convert markdown to html
  const processedContent = await remark().use(html).process(content)

  // return id, content, and data
  return {
    id,
    content: processedContent.toString(),
    ...data,
  } as any
}
