/* 
type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
*/

type Post = {
  slug: string;
  title: string;
  content: string;
};

export default Post;
