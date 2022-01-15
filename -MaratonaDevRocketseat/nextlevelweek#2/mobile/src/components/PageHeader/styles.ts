import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    padding:25,
    backgroundColor: '#04BF58',
  },
  topBar:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  logo:{
    marginTop:0,
    width:70,
    height:90
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  title:{
    fontFamily: 'Archivo_700Bold',
    color:'#fff',
    fontSize:24,
    lineHeight:32,
    maxWidth:160,
    marginVertical:0,
  }
});
export default styles;