import React from "react";
import {connect} from "react-redux";
import {FlatList, ActivityIndicator} from "react-native";
import {List, ListItem, Text, View, Container, Header, Title, Button, Left, Right, Body, Icon} from "native-base";
let xml2js = require('react-native-xml2js');

// import Icon from 'react-native-vector-icons/Ionicons'

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: []
        }
    }

    componentDidMount() {
        let rssUrl = 'http://www.etxebide.euskadi.eus/r01htSearchResultWAR/r01hPresentationRSS.jsp?r01kLang=es&r01kQry=tC%3Aeuskadi%3BtF%3Aprensa_comunicacion%3BtT%3Anota_prensa%2Cnoticia%3Bm%3AdocumentLanguage.EQ.es%3Bo%3AcommDate.DESC%3BcA%3Ar01epd012baeed6ad51ec320e2a01d3c6a22dbde7%3Bp%3AInter%3Bpp%3Ar01NavBarBlockSize.10%2Cr01PageSize.5&r01kPageContents=/x39-contgen/es/&r01kRssTitle=&r01kRss=1&page={{page}}';
        let page = 1;

        rssUrl = rssUrl.replace('{{page}}', page);

        return fetch(rssUrl,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/rss+xml',
                    'Content-Type': 'application/rss+xml;iso-8859-1;iso-8859-1'
                },
                mode: 'no-cors'
            })
            .then(response => response.text())
            .then((response) => {
                xml2js.parseString(response, function (err, result) {
                    this.setState({
                        isLoading: false,
                        dataSource: result.rss.channel[0].item
                    }, function () {
                        // State set ready
                        // do something with new state
                    });
                }.bind(this));
            })
            .catch((error) => {
                console.error(error);
            });
    }

    goToDetail = (item) => {
        this.props.navigation.navigate("NewsPieceDetail", {newsPiece: item})
    };

    _renderItem = ({item}) => {
        return (
            <ListItem style={{justifyContent: "space-between"}} onPress={this.goToDetail}>
                <Text>{item.title}</Text>
                <Text note>{item.pubDate}</Text>
            </ListItem>
        );
    };

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 200}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="ios-menu"/>
                        </Button>
                    </Left>
                    <Body style={{flex: 3}}>
                    <Title>Noticias</Title>
                    </Body>
                    <Right />
                </Header>
                <FlatList data={this.state.dataSource} keyExtractor={item => item.title} renderItem={this._renderItem} />
            </Container>
        );
    }
}
const mapStateToProps = state => {
    return {
        // ...redux state to props here
    };
};

export default connect(mapStateToProps)(News);
