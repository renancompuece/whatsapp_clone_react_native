import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';
import {modificaEmail, modificaSenha, modificaNome, cadastraUsuario} from '../actions/AutenticacaoActions';


class formCadastro extends Component {

        _cadastraUsuario()
        {
          const {nome,email,senha, navigation} = this.props;

          this.props.cadastraUsuario({nome,email,senha, navigation});
        }

        renderBtnCadastro()
        {
           if(this.props.loading_cadastro)
           {
             return(
                <ActivityIndicator size="large"/>
             );
           }

           return(
             <Button
                style={{fontSize: 20}}
                color='#115e54'
                title='Cadastrar'
                onPress={() => this._cadastraUsuario()}/>
           );

        }

        render()
        {

          return( <ImageBackground source={require('../imgs/bg.png')} style={{flex:1, width:null}}>
              <View style={{flex:1, padding: 10}}>

                <View style={{flex:4, justifyContent: 'center'}}>
                  <TextInput
                      value={this.props.nome}
                      style={{fontSize: 20, borderColor: 'black', borderWidth: 1}}
                      placeholder='Nome'
                      placeholderTextColor='#fff'
                      underlineColor='black'
                      onChangeText = {(texto) => this.props.modificaNome(texto)}/>

                  <TextInput
                      value={this.props.email}
                      style={{fontSize: 20, borderColor: 'black', borderWidth: 1}}
                      placeholder='E-mail'
                      placeholderTextColor='#fff'
                      onChangeText = {(texto) => this.props.modificaEmail(texto)}/>

                  <TextInput
                      value={this.props.senha}
                      secureTextEntry
                      style={{fontSize: 20,  borderColor: 'black', borderWidth: 1}}
                      placeholder='Senha'
                      placeholderTextColor='#fff'onChangeText ={(texto) => this.props.modificaSenha(texto)}/>
                  <Text style={{color:'#ff0000', fontSize: 18}}>{this.props.erroCadastro}</Text>
                </View>

                <View style={{flex:1}}>
                  {this.renderBtnCadastro()}
                </View>
              </View>
            </ImageBackground>

          );
        }
}



const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroCadastro: state.AutenticacaoReducer.erroCadastro,
    loading_cadastro: state.AutenticacaoReducer.loading_cadastro
  }
)

export default connect(mapStateToProps, {modificaEmail,modificaSenha, modificaNome, cadastraUsuario})(formCadastro)
