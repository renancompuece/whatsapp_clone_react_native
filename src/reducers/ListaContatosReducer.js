const INITIAL_STATE = {}
import {LISTA_CONTATO_USUARIO} from '../actions/types.js';

export default (state = INITIAL_STATE, action) => {

  console.log('action lista contatos: ' + action)
  switch(action.type){

      case(LISTA_CONTATO_USUARIO):
      {
        return action.payload;
      }

      default:
          return state;
    }
}
