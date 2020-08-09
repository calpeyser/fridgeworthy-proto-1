export enum Category {
  JOYFUL = "Joyful",
  HORRIFYING = "Horrifying",
  FUNNY = "Funny",
  HEARTFELT = "Heartfelt",
  MISC = "Miscellaneous Awesomeness",
  EXCITING = "Exciting",
}

export namespace Category {
  export function values() {
    return [
      Category.JOYFUL,
      Category.HORRIFYING,
      Category.FUNNY,
      Category.HEARTFELT,
      Category.MISC,
      Category.EXCITING
    ]
  }
}

export interface Comment {
  author: String;
  content: String;
}

export interface PrimaryComment {
  comment: Comment;
  replies: Comment[];
}

export interface Creation {
  id : Number;
  creator_id: Number;
  title: String;
  description: String;
  youtube_id: String;
  category: Category;
  comments: PrimaryComment[];
}

export interface State {
  creations: Creation[];
}

export const initialState: State = {
  creations: []
}
