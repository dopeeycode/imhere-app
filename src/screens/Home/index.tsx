import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import Participant from "../../components/Participant";
import { styles } from "./styles";

export interface ParticipantsProps {
  name: string
}

export default function Home() {
  const [participants, setParticipant] = useState<ParticipantsProps[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleAddNewParticipant() {
    const participantAlreadyRegistered = 
      participants.some(
        (participant) => participant.name === participantName
      )

    if (participantAlreadyRegistered) {
      return Alert.alert('Error', 'this participant is already registered')
    }

    if (participantName === '') {
      return Alert.alert('Error', 'the name is empty')
    }


    setParticipant(prevState => [...prevState, {
      name: participantName
    }])
    setParticipantName('')
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Aviso', `Deseja remover ${name} da lista ?`, [
      {
        text: 'Sim',
        onPress: () => setParticipant((prevState) => prevState.filter((participant) => participant.name !== name))
      },
      { 
        text: 'Não'
      }
    ])
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
          onChangeText={setParticipantName}
          value={participantName}
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddNewParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      
      
      <FlatList 
        data={participants}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <Participant 
            name={item.name} 
            onRemove={handleRemoveParticipant} 
            key={item.name} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.textParticipantEmpty}>
            Ninguém chegou no evento ainda ? Adicione participantes a sua 
            lista de presença
          </Text>
        )}
      />

      <Text style={{ textAlign: 'center' }}>Ninguem chegou</Text>
    </View>
  )
}