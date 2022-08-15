import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/MyLayout';

const PostLink = props => (
    <li style={{
        listStyle: 'none'
    }}>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a style={{
                textDecoration: 'none',
                color: 'skyblue'
            }}>{props.id}</a>
        </Link>
    </li>
)

export default function Blog() {
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="Hello Next.js" />
            <PostLink id="My First Blog" />
            <PostLink id="My Second Blog" />
        </ul>
    </Layout>
}
