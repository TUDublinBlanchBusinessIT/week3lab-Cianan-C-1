import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import Logo from "./components/Logo";

export default function App(){
  const [fullname, setFullname] = useState("Cianán Carey");
  const [fname, setFname] = useState("Cianán");
  const [lname, setLname] = useState("Carey");
  const [dob, setDob] = useState("19 November 2004");
  
  function buttonClicked() {
    //Alert.alert("Hello {fname} {lname}, your date of birth is {dob}"); //This works on a mobile phone
    alert("Hello " + fname + lname + ". Your Date of Birth is " + dob); // this works on the web version - try uncommenting one or the other lines as necessary
}
  
  return(
    <View> 
      <Logo/>
      <Text>Hello, World {fullname}</Text>
      <TextInput placeholder="enter your name" onChangeText={(value)=>setFullname(value)}></TextInput>
      <TextInput placeholder="Enter your firstname" onChangeText={setFname}/>
      <TextInput placeholder="Enter your lastname" onChangeText={setLname}/>
      <TextInput placeholder="Enter your date of birth" onChangeText={setDob}/>
      <Button title="SUBMIT" onPress={buttonClicked}/>
      <Text>Hello {fname} {lname}. You were born on {dob}</Text>
      
    </View>
  )
};


