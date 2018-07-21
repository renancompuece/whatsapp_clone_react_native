 import React from 'react';
import {
  View ,
  Text,
  Button,
  TextInput,
  TouchableHighlight,
  ImageBackground } from 'react-native';
import {StackNavigator} from 'react-navigation';
import {connect} from 'react-redux';
import {modificaEmail, modificaSenha} from '../actions/AutenticacaoActions';

  const formLogin = props => {

    console.log(props);
    return(

        <ImageBackground style={{flex:1, width: null}}  source={require('../imgs/bg.png')}>

            <View style={{flex:1, padding: 10}}>

              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 25, color: '#fff'}}>WhatsApp Clone</Text>
              </View>

              <View style={{flex:2}}>
                <TextInput value={props.email} style={{fontSize: 20, height: 40}} placeholder='E-mail' placeholderTextColor='#fff' onChangeText ={(texto) => props.modificaEmail(texto)}/>
                <TextInput value={props.senha} secureTextEntry style={{fontSize: 20, height: 40}} placeholder='Senha'  placeholderTextColor='#fff' onChangeText= {texto => props.modificaSenha(texto)}/>
                <TouchableHighlight onPress={() => props.navigation.navigate('FormCadastro')}>
                <Text style={{fontSize: 20, color: '#fff'}}> Ainda não tem acesso? Cadastre-se</Text>
                </TouchableHighlight>
              </View>

              <View style={{flex: 2}}>
                <Button color='#115e54' title='Acessar'/>
              </View>
            </View>

          </ImageBackground>
  );
}

  const mapStateToProps = state => (
      {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
      }
  );

  export default connect(mapStateToProps,{modificaEmail, modificaSenha})(formLogin);