/* eslint-disable camelcase */
export interface Item {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  content: string;
  comments: Item[];
  comments_count: number;
  type: string;
  url: string;
  domain: string;
  deleted: boolean;
}
