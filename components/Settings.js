import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DATA from "./datas/systems"
function Item ({title}) {
     return (
     <View style={styles.itemView}>
         <Text style={styles.itemText}> 
             {title}
         </Text>
     </View>)
 }

export default class Settings extends Component {

    
    render() {
        console.log(DATA);
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.titleSystem}>My connected systems</Text>
                    <FlatList data={DATA} keyExtractor={item => item.id} renderItem={({item}) => <Item title={item.name} />
                    } />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#20232A",
        paddingTop: "6%"
    },
    itemView: {
        flex: 1
    },
    itemText: {
        color: "white",
        textAlign: "center",
        fontSize: 20
    },
    titleSystem: {
        textAlign: "center",
        fontSize: 30,
        color: "white"
    }
  });