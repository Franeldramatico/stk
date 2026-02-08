import { Album, FutureEvent, MemberCard } from './types';

// Placeholder mapping to simulate the requested images
// Using picsum but assigning them specific IDs to keep consistency
export const IMAGES = {
  logo: "https://picsum.photos/id/452/300/300", // Simulating SKZ logo
  changbin1: "https://picsum.photos/id/1005/400/600",
  changbin2: "https://picsum.photos/id/1012/400/600", 
  changbin3: "https://picsum.photos/id/1025/400/600",
  felix1: "https://picsum.photos/id/338/400/600",
  felix2: "https://picsum.photos/id/349/400/600",
  felix3: "https://picsum.photos/id/355/400/600",
  han1: "https://picsum.photos/id/399/400/600",
  hyunjin1: "https://picsum.photos/id/433/400/600",
  album1: "https://picsum.photos/id/145/200/200",
  album2: "https://picsum.photos/id/158/200/200",
  album3: "https://picsum.photos/id/164/200/200",
  album4: "https://picsum.photos/id/177/200/200",
};

// We keep the type definition but the array is now unused in the sticker layout
// Keeping it empty or minimal to prevent errors if imported elsewhere
export const MEMBER_MOMENTS: MemberCard[] = [];

export const PLAYLIST_ALBUMS: Album[] = [
  { id: '1', title: '5-STAR', subtitle: 'Canción para abrazarte fuerte', cover: IMAGES.album1 },
  { id: '2', title: 'ROCK-STAR', subtitle: 'Canción para bailar en la sala', cover: IMAGES.album2 },
  { id: '3', title: 'NOEASY', subtitle: 'Canción para días difíciles', cover: IMAGES.album3 },
  { id: '4', title: 'I am YOU', subtitle: 'Canción que me recuerda a tu sonrisa', cover: IMAGES.album4 },
];

export const FUTURE_EVENTS: FutureEvent[] = [
  {
    id: 'e1',
    title: 'Nuestra próxima cita especial',
    date: '2026-02-14T20:00:00',
    description: 'Noche contigo, playlist SKZ de fondo y abrazos largos.'
  },
  {
    id: 'e2',
    title: 'Tarde de cobijas y música',
    date: '2026-03-01T17:00:00',
    description: 'Películas, snacks y tus risas llenando la habitación.'
  },
  {
    id: 'e3',
    title: 'Meta de este año',
    date: '2026-12-31T23:59:59',
    description: 'Llegar al final del año mirándonos y diciendo: lo logramos juntos.'
  }
];

export const LETTER_CONTENT = `
Querida Aranxita,

Desde que llegaste a mi vida, todo tiene un color diferente, como un escenario iluminado por mil lightsticks. Eres mi "Case 143", mi misterio favorito y mi respuesta a todo.

A veces la vida es ruidosa como "God's Menu", pero tú siempre eres mi "Sunshine", mi lugar seguro. Quiero coleccionar momentos contigo como si fueran photocards edición limitada.

Gracias por ser mi STAY, por quedarte, por ser tú. Eres mi universo SKZ.

Con amor,
Panesito.
`;