import Layout from "../../components/layout";
import {
  getAllPostIds,
  getPostData,
  Post as PostType,
  PostParams,
} from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticPathsResult } from "next";

export default function Post({ postData }: { postData: PostType }) : React.ReactElement {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: PostParams): Promise<{props: {postData: PostType}}> {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
