export interface MemberCard {
  id: string;
  name: string;
  image: string;
  borderColor: string;
  title: string;
  description?: string;
  span?: string; // for masonry layout sizing
}

export interface Album {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
}

export interface FutureEvent {
  id: string;
  title: string;
  date: string; // ISO string
  description: string;
}
