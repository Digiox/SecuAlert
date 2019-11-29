import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Card } from 'react-native-elements';

export default DetailedNotif = (props) => {
  const { datas } = props;

  return (

    <View style={styles.container}>
      <Card title={'ALERT N° : ' + datas.REFERENCE} titleStyle={{ fontSize: 30, color: 'white', marginHorizontal: 40 }} containerStyle={{ backgroundColor: '#373159' }}>
        <View style={styles.content_container}>
          <Icon type='material-community' name='map-marker-outline' color='#68c485' size={30} />
          <Text style={styles.content_text}>{datas.ADRESS}</Text>
        </View>
        <View style={styles.content_container}>
          <Icon type='material-community' name='clipboard-text-outline' color='#68c485' size={30} />
          <Text style={styles.content_text}>{datas.TYPE}</Text>
        </View>
        <View style={styles.content_container}>
          <Icon type='material-community' name='calendar-clock' color='#68c485' size={30} />
          <Text style={styles.content_text}>{datas.DATE}</Text>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
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