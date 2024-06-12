import { MDXDetailProps } from "@/components/MDXDetail";

export interface PostMetaData {
  tags: Array<string>;
  isFeature: true;
  minutesRead: number;
  date: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

interface PostDetailPageProps {
  postDetailCompliedData: MDXDetailProps;
}

const PostDetailPage = ({ postDetailCompliedData }: PostDetailPageProps) => {};

export default PostDetailPage;
