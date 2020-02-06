import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Item,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  view: {
    margin: 15,
    padding: 15,
  },
  heading: {
    fontSize: 20,
  },
  inputBox: {
    marginTop: 10,
    height: 40,
    backgroundColor: 'azure',
    fontSize: 16,
    width: 270,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  button: {
    marginTop: 5,
    width: 100,
  },
  taskList: {
    marginTop: 15,
  },
  listView: {
    marginTop: 5,
  },
  listHeading: {
    fontSize: 18,
  },
  listItem: {
    fontSize: 16,
  },
});

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    const obj = {
      id: JSON.stringify(new Date()),
      task: text,
    };

    setTodos(prevState => {
      return prevState.concat(obj);
    });
    setText('');
  };

  console.log('tasks : ', todos);

  return (
    <>
      <View style={styles.view}>
        <Text style={styles.heading}>Todo App : </Text>
        <TextInput
          placeholder="Add Your Task Here!"
          defaultValue={text}
          style={styles.inputBox}
          onChangeText={changeText => setText(changeText)}
        />
        <View style={styles.button}>
          <Button onPress={handleSubmit} title="Add Task" />
        </View>
        <View style={styles.taskList}>
          {todos.length === 0 ? null : (
            <Text style={styles.listHeading}>Tasks List :</Text>
          )}
          <FlatList
            style={styles.listView}
            data={todos}
            renderItem={({item}) => (
              <Text style={styles.listItem}>{item.task}</Text>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default App;
