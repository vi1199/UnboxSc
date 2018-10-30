import React,{ Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
} from 'react-native';
import { getFeeds } from '../utils/Constants';
import Items from '../components/Items';

export default class FeedScreen extends Component {
    constructor() {
        super();
        this.state= {
            feeds: [],
            isLoading: true
        }
    }
    static navigationOptions = {
        title: 'ScoopWhoop - UnboxSocial',
        headerTitleStyle: {
            fontWeight: '200',
            fontFamily: 'Jua'
        }
      };
    componentDidMount(){
        this.getFeed()
    }
    getFeed() {
        getFeeds().then(items=> this.setState({feeds: items, isLoading: false}))
        .catch(()=> this.setState({isLoading: false}))
    }
    handleRefresh = ()=> {
        this.setState({isLoading: true}, ()=> this.getFeed())
    }
    renderSeperator= ()=> {
        return(
            <View style= {{height: 2, backgroundColor: 'grey'}}>
            </View>
        )
    }
    render() {
        return(
            <View style= {styles.container}>
                <FlatList
                    data= {this.state.feeds}
                    renderItem= {({item})=> <Items feed= {item}/>}
                    keyExtractor= {item=> item.link}
                    refreshing= {this.state.isLoading}
                    onRefresh= {()=>this.handleRefresh()}
                />
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})