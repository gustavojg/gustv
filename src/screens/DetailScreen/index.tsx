import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useChannel} from '../../context/ChannelContext';
import {RootStackParamList} from '../../navigation/AppNavigator.types';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ImageKeys, images} from '../../constants/images';
import Loader from '../../components/Loader';
import {styles} from './styles';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Detail'
>;

type ProgrammeDetailsProps = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

const DetailScreen: React.FC<ProgrammeDetailsProps> = ({route}) => {
  const {fetchProgramme, programmeInfo, programmeLoading, programmeError} =
    useChannel();

  const {itemId} = route.params;

  useEffect(() => {
    fetchProgramme(itemId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (programmeLoading) {
    return <Loader />;
  }
  if (programmeError) {
    return (
      <View style={styles.container}>
        <Text>Error: {programmeError}</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={images.vikingsImg}
        resizeMode="cover"
        style={styles.imageBackground}>
        <LinearGradient
          colors={[
            'rgba(0,0,0,1)',
            'transparent',
            'transparent',
            'rgba(0,0,0,1)',
          ]}
          locations={[0, 0.4, 0.9, 1]}
          style={styles.linearGradient}
        />
      </ImageBackground>
      <View style={styles.contentContainer}>
        <View style={styles.textsContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={
                images[(programmeInfo?.channelId || 'noPhoto') as ImageKeys]
              }
              style={styles.logo}
            />
          </View>
          <View>
            <Text style={styles.channelName}>
              {programmeInfo?.channelTitle}
            </Text>
            <Text style={styles.programmeTitle}>{programmeInfo?.title}</Text>
            <View style={styles.tagsContainer}>
              <Text style={styles.tag}>{programmeInfo?.meta?.year}</Text>
              {programmeInfo?.meta?.genres.map((el: string, index: number) => (
                <Text key={`${el}-${index}`} style={styles.tag}>
                  {el}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <Text style={styles.description}>{programmeInfo?.description}</Text>
        <Text style={styles.cast}>
          Cast: Wagner Moura, Boyd Holbruk, Pedro Pascal
        </Text>
        <Text style={styles.creators}>
          Creators: Chris Brancato, Carlo Bernard, Doug Miro
        </Text>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
