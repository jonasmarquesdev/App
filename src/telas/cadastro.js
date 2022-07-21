import { useNavigation } from "@react-navigation/native";
import React, { useState, Component } from "react";
import { useForm, Controller } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"; 
import * as yup from "yup";
const ValidaCao_dados = require('./back-end/inputsErros/utilidades');
import{ValidacaoSenha} from "./back-end/inputsErros/utilidades";
import{InputError}from "./back-end/inputsErros/index";



import { StyleSheet,  Text, TextInput,  View,  KeyboardAvoidingView,  TouchableOpacity,  Animated,  ScrollView, } from "react-native";

const schema = yup.object({
  nome: yup.string().required(),

  email: yup.string().email("Email Invalido").required(),

  senha: yup.string().matches(ValidacaoSenha).required(),

  dataNascimento: yup.string().required(),

  cpf:yup.number().required(),

  cep:yup.number().required(),

  logradouro:yup.string().required(),

  cidade:yup.string().required(),

  estado:yup.string().required(),

});



// import { TextInputMask } from "react-native-masked-text";
// import CheckBox from '@react-native-community/checkbox';

export default function Cadastro() {
  const {  control,  handleSubmit,  formState: { errors }, } = useForm({   resolver: yupResolver(schema), });


  function debugAcessar(valores) {
      console.log(valores)
  }


  // const navigation = useNavigation()

  // const [nome, setNome] = useState(null);
  
  // const validacaoS=(zezenha)=>{
  //    const expressao="^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?!.[ ,´`^]).{8,16}$"
  // }
  
  // const [email, setEmail] = useState(null);
  // const [dataNAscimento, setDataNascimento] = useState(null);
  // const [cpf, setCpf] = useState(null);
  // const [cep, setCep] = useState(null);
  // const [logradouro, setLogradouro] = useState(null);
  // const [cidade, setCidade] = useState(null);
  // const [estado, setEstado] = useState(null);
  // const [isSelected, setSelected] = useState(false);
  // const [erroNome, setErrorNome] = useState(null);
  // const [erroSenha, setErrorSenha] = useState(null);
  // const [errorEmail, setErrorEmail] = useState(null)
  // const [erroDataNAscimento, setErrorDataNascimento] = useState(null);
  // const [erroCpf, setErrorCpf] = useState(null);
  // const [erroCep, setErroCep] = useState(null);
  // const [erroLogradouro, setErrorLogradouro] = useState(null);
  // const [erroCidade, setErrorCidade] = useState(null);
  // const [erroEstado, setErrorEstado] = useState(null);

  function testando() {
    if (nome === "" || email === "" || senha === "") {
      alert("campo está enviado vázio");
      return;
    }
  }

  const validada = () => {
    if (testando()) {
      console.log("salvou");
    }
  
  };

  function validacaoNome(){
    console.log('está pegando')
  }

  

  return (
    <View style={estilo.Corpo}>
      <ScrollView style={estilo.Bloco}>
        <View style={estilo.Bloco}>
          <Text style={estilo.informacao}>Informações básicas</Text>

          <Controller
            control={control}
            name="nome"
            render={({ field: {validacaoNome , onBlur, value } }) => (
              <TextInput
                style={estilo.inputs}
                onChangeText={ (nomeValidado) =>{
                    validacaoNome(nomeValidado)
                }}
                onBlur={onBlur}
                value={value}
                placeholder="DIgite seu Nome Completo"
              />
            )}
              
          />
              {/* {errors?.name?.type && <InputError/>} */}

              {errors?.nome?.type && <InputError type={errors.nome.type} field="nome" />}

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={estilo.inputs}
                placeholder="Digite seu melhor Email"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          {errors?.email?.type && <InputError type={errors.email.type} field="email" />}

          <Controller
            control={control}
            rules={{
              pattern:"^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?!.[ ,´`^]).{8,16}$"
            }}
            name="senha"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={estilo.inputs}
                placeholder="Digite Uma senha"
                autoCorrect={false}
            
                returnKeyType="done"
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
               
                secureTextEntry={true} //vai deixar o campo de senha com as estrelinhas
              />
            )}
          />
            {errors?.senha?.type && <InputError type={errors.senha.type} field="senha" />}

          <Text style={estilo.informacao}>Informações Pessoais</Text>
          <Controller
            control={control}
            name="dataNascimento"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={estilo.inputs}
                placeholder="Data de nascimento"
                autoCorrect={false}
                returnKeyType="done"
                type="date"
                secureTextEntry={true}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
           {errors?.dataNascimento?.type && <InputError type={errors.dataNascimento.type} field="dataNascimento" />}

          <Controller
            control={control}
            name="cpf"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={estilo.inputs}
                placeholder="CPF"
                autoCorrect={false}
              
                returnKeyType="done"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
             {errors?.cpf?.type && <InputError type={errors.cpf.type} field="cpf" />}


          <Text style={estilo.informacao}>Endereço</Text>

          <Controller
            control={control}
            name="cep"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={estilo.inputs}
                placeholder="CEP"
                autoCorrect={false}
             
                returnKeyType="done"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
            {errors?.cep?.type && <InputError type={errors.cep.type} field="cep" />}


          <Controller
            control={control}
            name="logradouro"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={estilo.inputs}
                placeholder="Lougroudouro"
                autoCorrect={false}
           
                returnKeyType="done"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
            {errors?.logradouro?.type && <InputError type={errors.logradouro.type} field="logradouro" />}

          <Controller
            control={control}
            name="cidade"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={estilo.inputs}
                placeholder="Cidade"
                autoCorrect={false}
             
                returnKeyType="done"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
              {errors?.cidade?.type && <InputError type={errors.cidade.type} field="cidade" />}
          <Controller
            control={control}
            name="estado"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={estilo.inputs}
                placeholder="Estado"
                autoCorrect={false}
             
                returnKeyType="done"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
             {errors?.estado?.type && <InputError type={errors.estado.type} field="estado" />}

          {/* <CheckBox
            title="Esse Aplicativo foi desenvolvido por estudantes de Analise em desenvolvimento de sistemas para a criação de um projeto de tcc,   Seus dados Não Serão Usados Para fins Lucrativos ou Maliciosos Conforme Todos os termos do site deseja Aceitar ? "
            checkdIcon="check"
            uncheckedIcon="square-o"
            checkedColor="green"
            uncheckedColor="red"
            checkd={isSelected}
            onPress={() => setSelected(!isSelected)}
          /> */}

          <View style={estilo.btns}>
            <TouchableOpacity style={estilo.btnRegistrar}>
              <Text style={estilo.textRegistrar}>Limpar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              title="salvar"
              onPress={handleSubmit(debugAcessar,schema)}
              style={estilo.btnRegistrarb}
            >
              <Text style={estilo.textRegistrar}>Cadastrar </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={estilo.btnVoltar}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={estilo.textVoltar}>Já tem uma conta?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const estilo = StyleSheet.create({
  Corpo: {
    flex: 1,
    backgroundColor: "black",
    width: "100%",
  },

  Bloco: {
    marginLeft: 26,
    marginTop: 60,
    width: "100%",
  },
  Termo: {
    color: "white",
    marginTop: 15,
    marginRight: 14,
  },
  inputs: {
    backgroundColor: "white",
    marginTop: "4%",
    width: "80%",
  },
  informacao: {
    color: "white",
    marginTop: 7,
  },
  btns: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnRegistrar: {
    marginTop: 15,
    marginLeft: 50,
    justifyContent: "center",
    backgroundColor: "green",
    flexDirection: "row",
    borderRadius: 7,
  },
  btnRegistrarb: {
    marginTop: 15,
    marginLeft: 12,
    backgroundColor: "green",
    height: 45,
    borderRadius: 7,
  },
  textRegistrar: {
    color: "#fff",
    padding: 10,
    height: 45,
  },
  btnVoltar: {
    marginTop: 15,
    width: "35%",
    backgroundColor: "#000000",
  },
  textVoltar: {
    color: "#fff",
    padding: 10,
    height: 45,
  },
  labelError:{
    alignSelf:"flex-start",
    color:"red",
    marginBottom:8,
  }
});
