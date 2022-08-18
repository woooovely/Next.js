import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/MyLayout';

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js' },
        { id: 'deploy-nextjs', title: 'Deploy Next.js' }
    ]
};

const PostLink = ({ post }) => (
    <li>
        <Link href="/p/[id]" as={`/p/${post.id}`}>
            <a>{post.id}</a>
        </Link>
        <style jsx>
                {`
                  li {
                    list-style: none;
                    margin: 5px 0;
                  }

                  a {
                    text-decoration: none;
                    color: blue;
                    font-family: 'Arial';
                  }

                  a:hover {
                    opacity: 0.6;
                  }
                `}
            </style>
    </li>
)

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                {getPosts().map(post => (
                    <PostLink key={post.id} post={post} />
                ))}
            </ul>
        </Layout>
    )
}

