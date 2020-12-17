import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

// Lecture 5
export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  const [courseGoals, setCourseGoals] = useState([]); 

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals, {id:  Math.random().toString(), value: enteredGoal}
    ]);
    console.log(enteredGoal);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}  
          />
        <Button title="ADD text" onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor = {(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => (
          <View style={styles.list}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  list: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
});

// // Lecture 4
// export default function App() {
//   const [enteredGoal, setEnteredGoal] = useState('');

//   const [courseGoals, setCourseGoals] = useState([]); 

//   const goalInputHandler = (enteredText) => {
//     setEnteredGoal(enteredText);
//   };

//   const addGoalHandler = () => {
//     setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
//     console.log(enteredGoal);
//   }

//   return (
//     <View style={styles.screen}>
//       <View style={styles.inputContainer}>
//         <TextInput 
//           placeholder="Course Goal" 
//           style={styles.input} 
//           onChangeText={goalInputHandler}
//           value={enteredGoal}  
//           />
//         <Button title="ADD text" onPress={addGoalHandler} />
//       </View>
//       <ScrollView>
//         {courseGoals.map((goal) => <View key={goal} style={styles.list}><Text>{goal}</Text></View>)}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     padding: 50
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   input: {
//     width: '80%',
//     borderColor: 'black',
//     borderWidth: 1,
//     padding: 10
//   },
//   list: {
//     padding: 10,
//     marginVertical: 10,
//     backgroundColor: '#ccc',
//     borderColor: 'black',
//     borderWidth: 1,
//   }
// });

// // Lecture 3
// export default function App() {
//   const [enteredGoal, setEnteredGoal] = useState('');

//   const [courseGoals, setCourseGoals] = useState([]); 

//   const goalInputHandler = (enteredText) => {
//     setEnteredGoal(enteredText);
//   };

//   const addGoalHandler = () => {
//     setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
//     console.log(enteredGoal);
//   }

//   return (
//     <View style={styles.screen}>
//       <View style={styles.inputContainer}>
//         <TextInput 
//           placeholder="Course Goal" 
//           style={styles.input} 
//           onChangeText={goalInputHandler}
//           value={enteredGoal}  
//           />
//         <Button title="ADD text" onPress={addGoalHandler} />
//       </View>
//       <View>
//         {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     padding: 50
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   input: {
//     width: '80%',
//     borderColor: 'black',
//     borderWidth: 1,
//     padding: 10
//   }
// });

// Lecture 2
// export default function App() {
//   return (
//     <View style={{padding: 30}}>
//       <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
//         <TextInput placeholder='Course Goal' style={{width: '80%', borderColor: '#000', borderWidth: 1, padding: 10,}} />
//         <Button title='App' />
//       </View>
//       <View>
//       </View>
//     </View>
//   );
// }

//Lecture 1
// export default function App() {
//   const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
//   return (
//     <View style={styles.container}>
//       <Text>{ outputText }</Text>
//       <Button title='Change Text' onPress = {() => setOutputText('This is awesome!')} />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
