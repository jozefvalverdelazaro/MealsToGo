
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Text>search</Text>
      </View>
      <View style={styles.listSection}>
        <Text>list</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight
  },
  searchBar: {
    backgroundColor: 'green',
    padding: 14,
    justifyContent: 'center'
  },
  listSection:{
    backgroundColor:'blue',
    flex: 1,
    paddingTop:10
  }
});
