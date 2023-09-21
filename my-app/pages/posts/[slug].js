import PostContent from "@/components/posts/post-datail/post-content";
import { getPostData, getPostFiles } from "@/lib/posts-utils";


function PostDetailsPage(props) {

    return(
        <PostContent post={props.post}/>
    )
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props:{
        post: postData,
    },
    revalidate: 600
};

    export function getStaticPaths() {
        const postFileNames = getPostFiles
        
        const slug = postFileNames.map(fileName.repalce(/\.md$/, ''));

        return {
            paths: slug.map(slug => ({ params: {slug: slug} })),
            fallback: false
        };
}


export default PostDetailsPage;