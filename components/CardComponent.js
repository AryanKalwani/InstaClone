import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Icon } from 'native-base';


class CardComponent extends Component {
    render() {
        return (
            <Card>
                <CardItem style={{shadowColor: 'black', paddingTop: 7, paddingBottom: 7, paddingLeft: 7}}>
                    <Left>
                        <Thumbnail style={{height:40, width:40}} source={{uri: this.props.thumbnail}} />
                        <Body>
                            <Text style={{fontWeight: "bold", fontSize: 17, lineHeight: 20}}>{this.props.name}</Text>
                            <Text note style={{lineHeight: 16}}>{this.props.username}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem style={{paddingLeft:0, paddingRight:0, paddingTop:0, paddingBottom:0}}>
                    <Image source={{uri: this.props.image}} style={{ height: 250, flex: 1 }} />
                </CardItem>
                <CardItem style={{paddingLeft: 12, paddingBottom: 10, paddingTop: 10}}>
                    <Left>
                        {
                            this.props.liked === false
                              ? (<Icon name="ios-heart-outline" style={{ color: 'black', paddingRight: 10 }} />) 
                              : (<Icon name="ios-heart" style={{ color: 'black', paddingRight: 10 }} />)
                        }
                        <Icon name="ios-chatbubbles" style={{ color: 'black', paddingRight: 10}} />
                        <Icon name="ios-send" style={{ color: 'black'}} />
                    </Left>
                    <Right>{ 
                            this.props.bookmarked === false
                              ? (<Icon name="ios-bookmark" />) 
                              : (<Icon name="ios-bookmark" style={{ color: 'black' }} />)
                        }
                    </Right>
                </CardItem>
                <CardItem style={{paddingTop: 0, paddingBottom: 0}}>
                    <Text>47 Likes</Text>
                </CardItem>
                <CardItem style={{paddingTop: 5}}>
                    <Body>
                        <Text>
                            <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 16}}>{this.props.username} </Text>
                            {this.props.title}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default CardComponent;
