export class Post {
  slug: string;
  categories: [number];
  title: {
      rendered: string;
  };
  content: {
      rendered: string;
  };
  acf: {
    header: {
      header_image?, header_video?: {
        type: string;
        subtype: string;
        url: string;
        title: string;
      };
    };
    wia?, henri?: {
      title: string;
      sizes: {
        medium: string;
      }
    };
    intro: string;
  };
}
