import PostHeader from "./post-header";
import classes from './post-content.module.css';
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // formats code in the nice way
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";


function PostContent(props) {
    const { post } = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenders = {
        // image(image) {  //react markdown will call this method and if it finds image in the in Markdown content.  
        //     return(
        //         <Image 
        //         src={`/images/posts/${post.slug}/${image.src}`} 
        //         alt={image.alt} 
        //         width={600} 
        //         height={300}/>
        //     );
        // },

        paragraph(paragraph) {
            const { node } = paragraph;

            if (node.children[0].type === 'image') {
                const image = node.children[0];

                return (
                    <div>
                    <Image className={classes.image} 
                    src={`/images/posts/${post.slug}/${image.url}`} 
                    alt={image.alt} 
                    width={600} 
                    height={300}
                    />
                    </div>
                );
            }

            return (
                <p>{paragraph.children}</p>
            )
        },

        code(code) {
            const { language, value } = code;
            return (
                <SyntaxHighlighter
                style={atomDark} 
                language={language} 
                children={value} 
                /> 
            )
        }
    };

    return(
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown renderes={customRenders}>{post.content}</ReactMarkdown>
        </article>

    )
}

export default PostContent;