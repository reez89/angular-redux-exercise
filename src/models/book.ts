export interface Book  {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
}
