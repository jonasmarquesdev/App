
import React from "react"
import { StyleSheet,  Text, View} from "react-native";


interface PropObjeto{
    field:string,
    type:string,
   
}


const errosMensagens={
    nome:{
        required:"Nome é um campo obrigatório."
        
    },
    email:{
       required:"Email é um campo obrigatório.",
       email:'esse email é inválido'
    },
    senha:{
        required:"Senha é um campo obrigatório."
    },
    dataNascimento:{
        required:"Data é um campo obrigatório."
    },
    cpf:{
        required:"CPF é um campo obrigatório."
    },
    cep:{
        required:"CEP é um campo obrigatório.",
        CustomError:'Não foi possivel encontrar o Cep'
    },
    logradouro:{
        required:"Logradouro é um campo obrigatório."
    },
    cidade:{
        required:"Cidade é um campo obrigatório."
    },
    estado:{
        required:"Estado é um campo obrigatório."
    },


    
}
    
export function InputError( { type, field }: PropObjeto){
 

      return <View>
                <Text style={estilo.text}> {errosMensagens[field][type] } </Text>

            </View>

 }


const estilo = StyleSheet.create({ 
    text: {
       color: "red"
    }
    })