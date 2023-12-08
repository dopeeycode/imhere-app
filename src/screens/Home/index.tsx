import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Participant from "../../components/Participant";
import { styles } from "./styles";

export default function Home() {

  function handleOnPress() {
    alert('Apertou')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleOnPress}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      
      <Participant />
      <Participant />
      <Participant />
    </View>
  )
}