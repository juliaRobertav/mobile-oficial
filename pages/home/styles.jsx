import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
    
        // backgroundImage: 'assets/LoginPage.jpg',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',

        borderWidth: 1
       
    },
    title:{
        fontSize: 40,
        fontWeight:'bold',
        color: "#fff",
        textAlign:'center',
    },
    caixas:{
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    btnP:{
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        width:120,
        height:60,
        backgroundColor:'#0D2149',
        
        alignItems:'center',
        justifyContent:'center',
    },
    btnE:{
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        width:120,
        height:60,
        backgroundColor:'#0D2149',
        
        alignItems:'center',
        justifyContent:'center',
    },
    btnC:{
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        width:120,
        height:60,
        backgroundColor:'#0D2149',
        
        alignItems:'center',
        justifyContent:'center',
    },
    btnEm:{
        marginTop:20,
        borderRadius:10,
        width:120,
        height:60,
        backgroundColor:'#0D2149',
        
        alignItems:'center',
        justifyContent:'center',
    },
    btns:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginTop: 350,
        gap: 30,
       
    },
    btns2:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        gap: 30,
    },
    miniContainer:{

        height: 700
    }
})

export default styles