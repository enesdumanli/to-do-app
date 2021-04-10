import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {

    const [items, setItems] = useState([{ title: 'homework', description: 'i need to do homework' },
    { title: 'shopping', description: 'i need to go shopping' },
    { title: 'cleaning', description: 'i need to clean my room on Sunday' }]);

    const beginningItems = [{ title: 'homework', description: 'i need to do homework' },
    { title: 'shopping', description: 'i need to go shopping' },
    { title: 'cleaning', description: 'i need to clean my room on Sunday' }];

    const [isRefreshing, setIsRefreshing] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    const newTask = { title: newTaskTitle, description: newTaskDescription };

    const refreshHandler = () => {
        setIsRefreshing(true);
        setItems(beginningItems);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={
                    <View>
                        <View style={styles.inputContainer}>
                            <Text style={{ fontWeight: 'bold' }}>New task title</Text>
                            <TextInput
                                style={{ borderWidth: 1 }}
                                value={newTaskTitle}
                                onChangeText={setNewTaskTitle}
                            />
                            <Text style={{ fontWeight: 'bold' }}>New task description</Text>
                            <TextInput
                                style={{ borderWidth: 1 }}
                                value={newTaskDescription}
                                onChangeText={setNewTaskDescription}
                            /></View>
                        <TouchableOpacity onPress={() => setItems([...items, newTask])} style={styles.addButton}>
                            <Text style={{ color: 'white', fontFamily: 'sans-serif' }}>Add New Task!</Text>
                        </TouchableOpacity>
                    </View>
                }
                data={items}
                keyExtractor={item => item.title}
                renderItem={({ item }) =>
                    <View style={styles.div}>
                        <TouchableOpacity onPress={() => navigation.navigate('Details', { detail: item.description })}>
                            <Text style={styles.text}>{item.title}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setItems(items.filter(moment => moment.title !== item.title))}>
                            <Text style={styles.delButton}>x</Text>
                        </TouchableOpacity>
                    </View>
                }
                ListFooterComponent={<Text style={styles.footer}>Click on tasks for more information!</Text>}
                refreshing={isRefreshing}
                onRefresh={refreshHandler}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    div: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#e0dcd1',
        borderBottomWidth: 2,
        borderBottomColor: 'white'
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    text: {
        marginVertical: 10,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    headerText: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    delButton: {
        color: 'red',
        marginVertical: 5,
        fontSize: 18,
        marginRight: 20
    },
    addButton: {
        alignItems: 'center',
        backgroundColor: '#342f36',
        padding: 20,

    },
    inputContainer: {
        padding: 10
    },
    footer: {
        fontSize: 18,
        marginLeft: 30,
        marginTop: 5,
    },

});

export default Home;