import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#298c39',
    justifyContent:'center',
    padding:40
  },
  banner:{
    width:'100%',
    // marginTop: 20,
    resizeMode: 'contain'
  },
  title:{
    fontFamily:'Poppins_400Regular',
    color:'#fff',
    fontSize:20,
    lineHeight:30,
    marginTop:80
  },
  titleBold:{
    fontFamily:'Poppins_600SemiBold'
  },
  buttonsContainer:{
    flexDirection:'row',
    marginTop: 40,
    justifyContent: 'space-between'
  },
  button:{
    height:115,
    width:'48%',
    backgroundColor:'#333',
    borderRadius:8,
    padding:24,
    justifyContent: 'space-between'
  },
  buttonPrimary:{
    backgroundColor: '#6842C2',
  },
  buttonSecondary:{
    backgroundColor: '#04d361',
  },
  buttonText:{
    fontFamily:'Archivo_700Bold',
    color:'#fff',
    fontSize:16,
  },
  totalConnections:{
    fontFamily:'Poppins_400Regular',
    color: '#d4c2ff',
    fontSize:12,
    lineHeight:20,
    marginTop:15,
    // marginBottom: 30,
    maxWidth:140,

  }
});
export default styles;