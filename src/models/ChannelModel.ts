export interface Schedule {
    title: string;
    id: string;
    start: string;
    end: string;
  }
  
  export interface Channel {
    id: string;
    title: string;
    images: {
      logo: string;
    };
    schedules: Schedule[];
  }
  
  export interface ChannelsData {
    channels: Channel[];
  }

  export interface Images {
    logo: string;
  }
  