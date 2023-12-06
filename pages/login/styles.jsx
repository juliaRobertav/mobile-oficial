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
       
    },
    caixa:{
        width:300,
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:25,
        marginTop:20,
    },
    email:{
        width:300,
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:25,
        marginTop:84,
    },
    title:{
        fontSize: 40,
        fontWeight:'bold',
        textAlign:'center',
        color:'#fff',

    },
    btnIn:{
        marginTop:20,
        borderRadius:10,
        width:100,
        height:50,
        backgroundColor:'#0D2149',
        alignItems:'center',
        justifyContent:'center',
       
    },
    btnUp:{
        marginTop:20,
        borderRadius:10,
        width:100,
        height:50,
        backgroundColor:'#0D2149',
        alignItems:'center',
        justifyContent:'center',
        
    },
    btns:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginTop:10,

        gap:40,
        
    }
})

export default styles