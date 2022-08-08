import { useRouter } from 'next/router'
import Layout from '../components/MyLayout.js'

const Content = (props) => (
    <>
      <h1>{props.title}</h1> 
      <p>This is the blog post content.</p>
    </>
  )

export default (props) => (
  <Layout>
    <Content />
  </Layout>

)

