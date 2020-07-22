export interface Comment {
  author: String;
  content: String;
}

export interface PrimaryComment {
  comment: Comment;
  replies: Comment[];
}

export interface Creation {
  creator: String;
  title: String;
  description: String;
  youtube_id: String;
  category: String;
  comments: PrimaryComment[];
}
