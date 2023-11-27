export interface Programme {
    id: string;
    title: string;
    start: string;
    end: string;
    lastTimePosition: string;
    images: Images;
    channelId: string;
    channelTitle: string;
    channelImages: ChannelImages;
    meta: Meta;
    series: Series[];
    description: string;
  }
  
export interface Series {
    title: string;
    episodes: Episode[];
  }
  
export interface Episode {
    id: string;
    title: string;
  }
  
export interface Meta {
    year: string;
    genres: string[];
    cast: Cast[];
    creators: Cast[];
  }
  
export interface Cast {
    name: string;
    role: string;
  }
  
export interface ChannelImages {
    logo: string;
  }
  
export interface Images {
    icon: string;
  }