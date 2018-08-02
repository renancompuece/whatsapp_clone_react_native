import {
  MODIFICA_ADICIONA_CONTATO_EMAIL,
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO
} from '../actions/types';


const INITIAL_STATE = {
  adiciona_contato_email: '',
  cadastro_resultado_txt_erro: '',
  cadastro_contato_resultado: false

};

export default (state= INITIAL_STATE, action) => {

  switch (action.type) {
      case MODIFICA_ADICIONA_CONTATO_EMAIL:
          return {...state, adiciona_contato_email: action.payload}
      case ADICIONA_CONTATO_ERRO:
          return {...state, cadastro_resultado_txt_erro: action.payload}
      case ADICIONA_CONTATO_SUCESSO:
          return {...state, cadastro_contato_resultado: true}

      default:
        return state;

  }
}