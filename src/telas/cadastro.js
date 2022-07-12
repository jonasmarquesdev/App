import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";

export default function Cadastro() {
  const navigation = useNavigation()

  const [nome, setNome] = useState(null);
  const [senha, setSenha] = useState(null);
  const [email, setEmail] = useState(null);
  const [dataNAscimento, setDataNascimento] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [cep, setCep] = useState(null);
  const [logradouro, setLogradouro] = useState(null);
  const [cidade, setCidade] = useState(null);
  const [estado, setEstado] = useState(null);
  const [isSelected, setSelected] = useState(false);
  const [ErroNome, setErroNome] = useState(null);
  const [ErroSenha, setErroSenha] = useState(null);
  const [ErroEmail, setErroEmail] = useState(null);
  const [ErroDataNAscimento, setErroDataNascimento] = useState(null);
  const [ErroCpf, setErooCpf] = useState(null);
  const [ErroCep, setErroCep] = useState(null);
  const [ErroLogradouro, setErroLogradouro] = useState(null);
  const [ErroCidade, setErroCidade] = useState(null);
  const [ErroEstado, setErroEstado] = useState(null);

  const validar = () => {
    if (email == null) {
      setErroEmail("preencha seu email, ele está vázio");
      return false;
    }
  };

  const salvar = () => {
    if (validar()) {
      console.log("salvou");
    }
  };

  return (
    <View style={estilo.Corpo}>
      <ScrollView style={estilo.Bloco}>
        <View style={estilo.Bloco}>
          <Text style={estilo.informacao}>Informações básicas</Text>
          <TextInput
            style={estilo.inputs}
            placeholder="Digite seu Nome Completo"
            autoCorrect={false}
            errorMessage={ErroNome}
            returnKeyType="done"
            onChangeText={(value) => {
              setNome(value);
            }}
          />
          <TextInput
            style={estilo.inputs}
            placeholder="Digite seu melhor Email"
            autoCorrect={false}
            errorMessage={ErroEmail}
            returnKeyType="done"
            onChangeText={(value) => {
              setEmail(value);
            }}
          />
          <TextInput
            style={estilo.inputs}
            placeholder="Digite Uma senha"
            autoCorrect={false}
            errorMessage={ErroSenha}
            returnKeyType="done"
            onChangeText={(value) => {
              setSenha(value);
            }}
          />

          <Text style={estilo.informacao}>Informações Pessoais</Text>
          <TextInput
            style={estilo.inputs}
            placeholder="Data de nascimento"
            autoCorrect={false}
            errorMessage={ErroDataNAscimento}
            returnKeyType="done"
            onChangeText={(value) => {
              setDataNascimento(value);
            }}
          />
          <TextInput
            style={estilo.inputs}
            placeholder="CPF"
            autoCorrect={false}
            errorMessage={ErroCpf}
            returnKeyType="done"
            onChangeText={(value) => {
              setCpf(value);
            }}
          />

          <Text style={estilo.informacao}>Endereço</Text>
          <TextInput
            style={estilo.inputs}
            placeholder="CEP"
            autoCorrect={false}
            errorMessage={ErroCep}
            returnKeyType="done"
            onChangeText={(value) => {
              setCep(value);
            }}
          />
          <TextInput
            style={estilo.inputs}
            placeholder="Lougroudouro"
            autoCorrect={false}
            errorMessage={ErroLogradouro}
            returnKeyType="done"
            onChangeText={(value) => {
              setLogradouro(value);
            }}
          />
          <TextInput
            style={estilo.inputs}
            placeholder="Cidade"
            autoCorrect={false}
            errorMessage={ErroCidade}
            returnKeyType="done"
            onChangeText={(value) => {
              setCidade(value);
            }}
          />
          <TextInput
            style={estilo.inputs}
            placeholder="Estado"
            autoCorrect={false}
            errorMessage={ErroEstado}
            returnKeyType="done"
            onChangeText={(value) => {
              setEstado(value);
            }}
          />

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
            <TouchableOpacity style={estilo.btnRegistrarb}>
              <Text style={estilo.textRegistrar}>Cadastrar </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={estilo.btnVoltar} onPress={ () => navigation.navigate('Home') } >
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
    backgroundColor: '#000000',
  },
  textVoltar: {
    color: "#fff",
    padding: 10,
    height: 45,
  },
});
