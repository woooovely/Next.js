import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Page = () => {
    const route = useRouter();

    return (
        <Layout>
            <h1>{route.query.title}</h1>
            <p>This is the blog post content.</p>
        </Layout>
    )
};

export default Page;