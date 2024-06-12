export interface PostMetaData {
  slug: string;
  title: string;
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
