import { 
	    MINE_DATA,
	    RESET_DATA,
	    UPDATE_BLOCK_CHAIN
	    } from './constant';

import BlockChain from './BlockChain';

const initialInputState={
   data:''
}

const initialBlockChain={
	chains:[new BlockChain().GenesisBlock()]

}

export const MineDataEntry=(state=initialInputState,action='')=>{
	switch(action.type){
		case MINE_DATA:
		return Object.assign({},state,{data:action.payload});

		case RESET_DATA:
		return Object.assign({},state,{data:action.payload})

		default:
		return state;
	}
}

export const UpdateBlockChain=(state=initialBlockChain,action='')=>{
	switch(action.type){
		case UPDATE_BLOCK_CHAIN:
		return Object.assign({},state,{chains:[...state.chains,action.payload]});

		default:
		return state;

	}

}
