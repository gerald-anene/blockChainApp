import { 
	MINE_DATA,
	RESET_DATA,
	UPDATE_BLOCK_CHAIN
 } from './constant';

export const onDataEntry=(data)=>({
	type:MINE_DATA,
	payload:data
})

export const onResetData=()=>({
	type:RESET_DATA,
	payload:''
})

export const onBlockChainChange=(block)=>({
	type:UPDATE_BLOCK_CHAIN,
	payload:block
})

