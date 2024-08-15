export interface PostMetaData {
  slug: string;
  title: string;
  tags: Array<string>;
  isFeature: true;
  minutesRead: number;
  date: string;
  description: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface PostExtract {
  id: string;
  content: string;
  metadata: PostMetaData;
}
