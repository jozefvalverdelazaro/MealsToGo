import { StyleSheet, View , Text} from "react-native"

export default function SeachBar(){
    return (
        <View style={styles.searchBar}>
            <Text>search</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: 'green',
        flex: 0.1,
        justifyContent: 'center'
    }
})