import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Icon, Card } from 'react-native-elements'
import MenuButton from "./MenuButton"

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    }
  }

  componentDidMount() {
    axios.post('https://agile-everglades-79741.herokuapp.com/getNotifs', { refs: 'cs223-hQZ' })
      .then(res => this.setState({ datas: res.data }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} >
          <MenuButton navigation={props.navigation} />
          <Text style={styles.title}>SECU-ALERT</Text>
        </View>

        <FlatList
          data={datas}
          keyExtractor={(item, index) => item.deviceID.toString()}
          renderItem={({ item, index }) => {
            <Card title={'ALERT N° : ' + item.REFERENCE} titleStyle={{ fontSize: 30, color: 'white', marginHorizontal: 40 }} containerStyle={{ backgroundColor: '#373159' }}>
              <View style={styles.content_container}>
                <Icon type='material-community' name='map-marker-outline' color='#68c485' size={30} />
                <Text style={styles.content_text}>{item.ADRESS}</Text>
              </View>
              <View style={styles.content_container}>
                <Icon type='material-community' name='clipboard-text-outline' color='#68c485' size={30} />
                <Text style={styles.content_text}>{item.TYPE}</Text>
              </View>
              <View style={styles.content_container}>
                <Icon type='material-community' name='calendar-clock' color='#68c485' size={30} />
                <Text style={styles.content_text}>{item.DATE}</Text>
              </View>
            </Card>
          }
          }
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20232A',
    paddingTop: "6%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    color: "white",
    backgroundColor: "#353a44"
  },
  title: {
    marginRight: "30%",
    textAlign: "center",
    color: "white",
    fontSize: 30
  },
  text: {
    fontSize: 30,
    color: "white",
    paddingTop: "50%",
    textAlign: "center"
  },
  content_container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 15
  },
  content_text: {
    fontSize: 25,
    color: "white",
    marginHorizontal: 15,
  }
});
