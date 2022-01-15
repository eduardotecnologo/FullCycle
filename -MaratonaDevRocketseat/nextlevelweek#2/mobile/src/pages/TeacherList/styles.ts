import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#f1f1f1',
  },
  teacherList:{
    marginTop: -17
  },
  seacrhForm:{
    marginBottom:13
  },
  label:{
    color:'#fff',
    fontFamily:'Poppins_400Regular'
  },
  input:{
    height:54,
    backgroundColor:'#fff',
    borderRadius:8,
    justifyContent:'center',
    paddingHorizontal:15,
    marginTop:4,
    marginBottom:15
  },
  inputGroup:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  inputBlock:{
    width:'48%'
  },
  submitButton:{
    backgroundColor: '#04d362',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText:{
    color: '#fff',
    fontFamily: 'Archivo_400Bold',
    fontSize: 20
  }
});
export default styles;