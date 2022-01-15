import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader/index';


function TeacherList(){
  const [isFiltersVisible, setIsFilterVisible] = useState(false);

  function handleToggleFiltersVisible(){
    setIsFilterVisible(!isFiltersVisible);
  }
  return (
    <View style={styles.container}>
      <PageHeader
        title="Mestres Disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff"/>
          </BorderlessButton>
        )}>
        {isFiltersVisible && (
          <View style={styles.seacrhForm}>
            <Text style={styles.label}>
              Matéria
            </Text>
          <TextInput style={styles.input}
          placeholderTextColor="c1bcc"
             placeholder="Qual a matéria?"/>
        <View style={styles.inputGroup}>
          <View style={styles.inputBlock}>
            <Text style={styles.label}>
              Dia da semana
            </Text>
              <TextInput style={styles.input}
              placeholderTextColor="c1bcc"
                  placeholder="Qual o dia ?"/>
          </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>
                Horário
            </Text>
              <TextInput style={styles.input}
              placeholderTextColor="c1bcc"
                  placeholder="Qual o horário?" />
            </View>
          </View>
          <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText} >Filtar</Text>
          </RectButton>
        </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal:16,
          paddingBottom:16
        }}>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </ScrollView>
    </View>
  )
}
export default TeacherList;