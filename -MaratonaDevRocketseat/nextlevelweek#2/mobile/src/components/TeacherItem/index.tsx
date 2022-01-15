import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import styles from './styles';

function TeacherItem (){
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
        style={styles.avatar}
          source={{ uri:'https://github.com/eduardotecnologo.png'}}/>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Eduardo Alexandre</Text>
            <Text style={styles.subject}>Química Analítica</Text>
          </View>
      </View>

      <Text style={styles.bio}>
        Sislog Operator at MRS Logística, Software Engineer na empresa Eazy Digital
        {'\n'}
        Apaixonado por programação e viciado em café, entusiasta Filosofia Hacker
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço / Hora { ' ' }
            <Text style={styles.priceValue}>
            R$60,00
          </Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>
            Entrar em Contato
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}
export default TeacherItem;