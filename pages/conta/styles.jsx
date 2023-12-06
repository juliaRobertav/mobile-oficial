import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        width: '100%',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        borderWidth: 1,
        
    },
    title:{
        fontSize:40,
        color:'white',
        padding:9,
        marginTop: 20,
    },
    inputs:{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection:'column',
   

    },
    cliente:{
        width:'40%',
        marginRight:'10%',
        borderWidth:1,
        borderRadius: 5,
        padding:9,
        fontSize:20,
        marginTop:140,
    },
    saldo:{
        width:'40%',
        borderWidth:1,
        borderRadius: 5,
        marginRight: '10%',
        // marginLeft:  4,
        padding:9,
        fontSize:20,
        marginTop:10,
    },
    agencia:{
        width:'40%',
        marginRight:'10%',
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:20,
        marginTop:10,
    },

    renda:{
        width:'40%',
        borderWidth:1,
        borderRadius: 5,
        marginRight: '10%',
        // marginLeft: 21,
        padding:9,
        fontSize:20,
        marginTop:10,
    },
   
    mov:{
        width:'40%',
        marginRight: '10%',
        borderWidth:1,
        borderRadius: 5,
        padding:9,
        fontSize:20,
        marginTop:10,
    },
  
    limite:{
        width:'40%',
        marginRight:'10%',
        borderWidth:1,
        borderRadius: 5,
        padding:9,
        fontSize:20,
        marginTop:10,
    },
    conta:{
        width:'40%',
        marginRight:'10%',
        borderWidth:1,
        borderRadius: 5,
        padding:9,
        fontSize:20,
        marginTop:10,
    },
    btnProximo:{
        marginTop:12,
        // marginRight:'25%',
        // borderWidth:1,
        borderRadius:10,
        width:'20%',
        height:50,
        backgroundColor:'#0D2149',
        color:'#fff',
        alignItems:'center',
        justifyContent:'center', 
    },

   
})

export default styles