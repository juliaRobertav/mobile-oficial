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
    caixas:{ 
        alignItems:'center',
        justifyContent:'center',
        width: '130%',
        padding:2, //ESPAÇAMENTO ENTRE O TÍTULO E O PRIMEIRO INPUT 
        marginTop: 30,
     
    },

    caixanome:{
        width:'30%',
        marginRight:'33%',
        borderWidth:1,
        borderRadius: 5,
        padding:9,
        fontSize:20,
        marginTop:10,
    },
    caixanasc:{
        width:'25%',
        borderWidth:1,
        borderRadius: 5,
        marginRight: '6%',
        marginLeft:  4,
        padding:9,
        fontSize:20,
        marginTop:10,
    },
    caixacpf:{
        width:'30%',
        borderWidth:1,
        borderRadius: 5,
        marginLeft:20,
        padding:9,
        fontSize:20,
        marginTop:10,
    },
    caixasNC:{
        width:'100%',
        display:"flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row"

    },
    caixacep:{
        width:'20%',
        marginRight:'13%',
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:20,
        marginTop:10,
    },
    btnPesquisar:{
        backgroundColor:'#5a7bb0',
        width:'9px',
        marginRight:'25%',
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:15,
        marginTop:10,
        alignItems:'center'
    },
    caixalogra:{
        width:'44%',
        borderWidth:1,
        borderRadius: 5,
        marginRight: '1%',
        marginLeft:6,
        padding:9,
        
        fontSize:20,
        marginTop:10,
    },
    caixanum:{
        width:'13%',
        borderWidth:1,
        borderRadius: 5,
        marginRight: '4%',
        marginLeft: 21,
        padding:9,
        fontSize:20,
        marginTop:10,
    },
    caixasRN:{
        width:'100%',
        display:"flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    caixabairro:{
        width:'40%',
        marginRight: '24%',
        borderWidth:1,
        borderRadius: 5,
        padding:9,
        fontSize:20,
        marginTop:10,
    },
    caixacidade:{
        width:'45%',
        borderWidth:1,
        borderRadius: 5,
        // marginLeft: '1%',
        marginRight: '6%',
        padding:9,
        fontSize:20,
        marginTop:10,
    },
    caixauf:{
        width:'12%',
        borderWidth:1,
        borderRadius: 5,
        marginLeft: 5,
        padding:9,
        fontSize:20,
        marginTop:10,
    },
    caixasCE:{
        width:'100%',
        display:"flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    caixaemail:{
        width:'40%',
        marginRight:'24%',
        borderWidth:1,
        borderRadius: 5,
        padding:9,
        fontSize:20,
        marginTop:10,
    },
    caixasenha:{
        width:'40%',
        marginRight:'24%',
        borderWidth:1,
        borderRadius: 5,
        padding:9,
        fontSize:20,
        marginTop:10,
    },
    btnProximo:{
        marginTop:20,
        marginRight:'25%',
        borderWidth:1,
        borderRadius:10,
        width:'20%',
        height:40,
        backgroundColor:'#0D2149',
        color:'#fff',
        alignItems:'center',
        justifyContent:'center', 
    },

    botao1:{
        padding:1,
        width: "15%",
        marginLeft: 2,
    },

    foto:{
        backgroundColor: '#000',
        height:'150%',
        width: '20%',
        marginTop: 1 ,
        marginLeft:'10%',
      
    },

    contImg:{
        width:'100%',
        display:"flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        
        marginTop:100,
    }
})

export default styles