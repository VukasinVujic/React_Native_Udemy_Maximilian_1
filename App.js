import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function YourApp() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      // { key: Math.random().toString(), value: enteredGoal },
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput courseGoals={courseGoals} onAddGoal={addGoalHandler} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

//   <View style={{padding:50, flexDirection: 'row' , width: '80%', height: 300,
//   justifyContent:"space-around", alignItems:"stretch"}}

//   >

//     <View style={{
//       backgroundColor: 'red',
//       flex: 3,
//       justifyContent: 'space-around',
//       alignItems: 'center',
//     }}>
//       <Text>1</Text>
//     </View>
//     <View style={{
//       backgroundColor: 'blue',
//       flex: 2,
//       justifyContent: 'center',
//       alignItems: 'center'
//     }}>
//       <Text>2</Text>
//     </View>
//     <View style={{
//       backgroundColor: 'green',
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center'
//     }}>
//       <Text>3</Text>
//     </View>
//   </View>
