import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'pages/markdown') // to set path

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory) // synchronously read the contents of a given directory,  returning an array with all the file names or objects in the directory.
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '') // create slug from filename by removing extension
  const fullPath = join(postsDirectory, `${realSlug}.md`) // set full file path
  const fileContents = fs.readFileSync(fullPath, 'utf8') // reads all files in dir and pauses execution or rest of program until finished
  const { data, content } = matter(fileContents) // use graymatter to read and destructure markdown files

// set another type
  type Items = {
    [key: string]: string
  };

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
};

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
};