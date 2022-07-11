import React, {useState} from "react";

import { 
  StatusBar,
  StyleSheet, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  Platform, 
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';

import Task from './components/Task';

// TODO: center ONLY the Placeholder, but not the actual text tipp: textAlign: 'center',

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [Item, setItem] = useState();

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  const handleAddTask = () => {
      Keyboard.dismiss()
      setTaskItems([...taskItems, task])
      setTask(null)
  }

  const [time, setTime] = useState();
  const [timeItems, setTimeItems] = useState([]);
  
  const completeTime = (index) => {
    let itemsCopy = [...timeItems];
    itemsCopy.splice(index, 1);
    setTimeItems(itemsCopy);
  }

  const handleAddTime = () => {
      Keyboard.dismiss()
      setTimeItems([...timeItems, time])
      setTime(null)
  }




  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is were the tasks gonna go */}
          <ScrollView>
            {
              taskItems.map((taskItem, index) => {
                return (  
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>

                    <Task text={taskItem}/> 
                    {/* <Task text={taskItem} time={time} />  */}
                  </TouchableOpacity>
                )
              }) 
            }
          </ScrollView>

        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding": "height"}
        style={styles.writeTaskWrapper}
      >
      <TextInput 
        style={styles.input} 
        placeholder={'Write a task'}
        placeholderTextColor="#BB86FC"
        onChangeText={text => setTask(text)}
        value={task}
        ></TextInput>
      <TouchableOpacity onPress={() => {
        handleAddTask()
        handleAddTime()
      }}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ebeced',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6200EE',
  },
  items: {},
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 10,
    width: 250,
    // width: 185,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#BB86FC',
    borderWidth: 1,
    color: '#6200EE',
  },
  timeInput: {
    // textAlign: 'center',
    paddingVertical: 10,
    width: 70,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#BB86FC',
    borderWidth: 1,
    color: '#6200EE',
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#BB86FC',
    borderWidth: 1,
  },
  addText: {
    color: '#BB86FC'
  },
});
