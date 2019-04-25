import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
       <Card>
            <CardSection>
                <View>
                    <Image source={{ uri: props.album.thumbnail_image }} />
                </View>
                <Text>{props.album.title}</Text>
            </CardSection>
       </Card>
    );
};

export default AlbumDetail;
