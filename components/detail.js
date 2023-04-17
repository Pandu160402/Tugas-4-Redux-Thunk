import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import Counter from './ReduxThunk/view';
import {Provider} from 'react-redux';
import store from './ReduxThunk/store';

const Detail = ({ navigation }) => {
  return (
    <Provider store={store}>
      <View style = { styles.container_1 }>
        <View style = { styles.header_1 }>
            <View style = { styles.top }>
              <TouchableOpacity
                style = { styles.button }
                onPress={ () => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="white" />
              </TouchableOpacity>
              <Text style = { styles.heading }>Hiling.id</Text>
              <FontAwesome5 name="user" size={24} color="white" />
            </View>
            <Text style = { styles.heading2 }>Hasil Pencarian Penerbangan</Text>
            <Text style = { styles.heading2 }>January 14, 2023</Text>
        </View>
        <ScrollView>
          <Counter/>
        </ScrollView>
        <Text style = {styles.copyright_1}>Copyright Pandu Wahyudi - 1201400010</Text>
      </View>
    </Provider>
  );
}

export default Detail;