import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Container, Content } from 'native-base';
import CardComponent from '../CardComponent';

const customData = require('../../data.json');
const feedArray = customData['feed'];

class HomeTab extends Component{

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                {
                  feedArray.map((attribute) => {
                    return <CardComponent 
                        key={attribute.id} 
                        name={attribute.user.name} 
                        caption={attribute.caption} 
                        image={attribute.media.uuid} 
                        thumbnail={attribute.user.profilePhoto} 
                        liked={attribute.isLiked} 
                        bookmarked={attribute.isBookmarked} 
                        username={attribute.user.username}
                        title={attribute.title} />
                  })
                }
                </Content>
            </Container>
        );
    }
}

export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});