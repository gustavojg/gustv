import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Channel, ChannelsData } from '../models/ChannelModel';
import { fetchChannels } from '../services/channelService';

interface ChannelContextProps {
  channels: Channel[];
  isLoading: boolean;
  error: string | null;
}

interface ChannelProviderProps {
  children: ReactNode;
}

export const ChannelContext = createContext<ChannelContextProps>({
  channels: [],
  isLoading: false,
  error: null,
});

export const ChannelProvider: React.FC<ChannelProviderProps> = ({ children }) => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadChannels = async () => {
      try {
        const data: ChannelsData = await fetchChannels();
        setChannels(data.channels);
      } catch (err) {
        setError('Error fetching channels');
      } finally {
        setIsLoading(false);
      }
    };

    loadChannels();
  }, []);

  return (
    <ChannelContext.Provider value={{ channels, isLoading, error }}>
      {children}
    </ChannelContext.Provider>
  );
};
