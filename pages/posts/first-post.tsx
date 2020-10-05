import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost(): React.ReactElement {
  return (
    <Layout home={false}>
      <Head>
        <title>First Post</title>
      </Head>
      <div>
        <h1>First Post</h1>
      </div>
    </Layout>
  );
}
