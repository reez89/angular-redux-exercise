export interface Book  {
  kind: string;
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
