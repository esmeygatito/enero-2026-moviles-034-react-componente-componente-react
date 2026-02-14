
import { StyleSheet, Text, View, Button } from 'react-native';
 
export default function Alumno(props){

return(
<View style={styles.container}> 

    
   <Text>{props.nombre}</Text>
   <Text>{props.matricula}</Text>
</View>
)
}

const styles = StyleSheet.create({
  container: {
    //flex: 0,    
    backgroundColor: '#8fcd66',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid black',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10,
    padding: 10,
    width: 300,
    height: 100,
    
  },
});