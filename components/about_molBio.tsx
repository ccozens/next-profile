import { getPostBySlug } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import Post from "interfaces/post";
import defineAllPosts from '../pages/about';

type Props = {
    allPosts: Post[]
}
const AboutMolBio = ( { allPosts }: Props ) => {
  const molBio = allPosts[0];
    
  return (
       
      <section>
        <h2> { molBio.title } </h2>
        <div> { molBio.content } </div>
      </section>
    )
};

export default AboutMolBio;

  type Params = {
    params: {
      slug: string
    }
  }

  export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
      'title',
      'slug',
      'content',
    ])
    const content = await markdownToHtml(post.content || '')
  
    return {
      props: {
        post: {
          ...post,
          content,
        },
      },
    }
  }

  /*
  <AboutMolBio post={{
                    slug: "",
                    title: "",
                    content: ""
                }} />
                */