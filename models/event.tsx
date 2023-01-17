export type EVENT_TYPE = {
  date_time: string;
  title: string;
  link: string;
  person: string;
  groups: string;
  sub_categories: string;
  categories: string;
  score: number;
  year: number;
  month: number;
}

export type PERSON_TYPE = {
  person: string;
  total_event: number;
  category: string;
}