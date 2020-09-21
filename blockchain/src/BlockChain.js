import Block from './Block';
import React,{ Component } from 'react';
import './BlockChain.css';

class BlockChain extends Component{

	constructor(props){
		super(props);
		this.chain=[this.GenesisBlock()];
		this.difficulty=5;
	}

	GenesisBlock(){

		return new Block(0,"12/06/1923","Genesis Block","0");
	}

	GetLatestBlock(){
		return this.chain[this.chain.length-1];
	}
	
	render(){
		  const result=this.props.chains.filter(block=>block.data!=="Genesis Block").map(eachBlock=>{

		  	if(this.props.status){

		  		return(
                       <p key="1">Mining in Progress.....</p>
		  			  )
		  	}else{

		  		return(
		  		<form  key={eachBlock.hash}>
                  <div>
                    <label>Data:<span>{eachBlock.data}</span></label><br/>
                    <label>Previous Hash:<span>{eachBlock.previousHash}</span></label><br/>
                    <label>Hash:<span>{eachBlock.hash}</span></label><br/>
                    <label>Nonce:<span>{eachBlock.nonce}</span></label>
                    <hr/>
                  </div>
                  </form>
		  		  )

		  	}
		  	
		  })




		return(
             <div>
	            <h1>Block Chain</h1>

			      <div className="genesisBlock">
				        <p>Genesis Block</p>
				        <label>Data:<span > {this.chain[0].data}</span></label><br/>
				        <label><span className="glable">Previous Hash</span>:<span > {this.chain[0].previousHash}</span></label><br/>
				        <label>Hash:<span > {this.chain[0].hash}</span></label><br/>
				        <label>Nonce:<span > {this.chain[0].nonce}</span></label>
				        <hr/>
			      </div>
                   
			      <h1>Other Blocks</h1>
			      <label>Enter Data <input required  type="text" onChange={this.props.mineData} value={this.props.data} /></label><br/>
			       { result }
			      <button onClick={()=>this.props.mineBlock(new Block(1,"12/06/1923",this.props.data))}>Mine Block</button>
		       </div>
			)
	}



}

export default BlockChain;