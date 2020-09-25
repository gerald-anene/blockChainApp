import Block from './Block';
import React,{ Component } from 'react';
import './BlockChain.css';
import   image   from './Blockchain.jpg';

class BlockChain extends Component{

	constructor(props){
		super(props);
		this.chain=[this.GenesisBlock()];
		this.difficulty=2;
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
                  <div className='mineblocks'>
                    <label>Data:<span className='blocks'>{eachBlock.data}</span></label><br/>
                    <label>Previous Hash:<span className='blocks'>{eachBlock.previousHash}</span></label><br/>
                    <label>Hash:<span className='blocks'>{eachBlock.hash}</span></label><br/>
                    <label>Nonce:<span className='blocks'>{eachBlock.nonce}</span></label>
                  </div>
                
		  		  )

		  	}
		  	
		  })




		return(
			<form key={1}>
             <div className="all-blocks">
	            <h1 style={{color:"blue"}}>Block Chain</h1>
	            <img className='thick-brown-border chain-image' src={ image } alt="Block chain image" />
	            <h2 className='genesis-header'>Genesis Block</h2>

			      <div className="genesisBlock">
				        <label>Data:<span className='blocks'> {this.chain[0].data}</span></label><br/>
				        <label>Previous Hash:<span className='blocks' > {this.chain[0].previousHash}</span></label><br/>
				        <label>Hash:<span className='blocks'> {this.chain[0].hash}</span></label><br/>
				        <label>Nonce:<span className='blocks' > {this.chain[0].nonce}</span></label>
			      </div>
                   <div>
			      <h1 id='other-blocks-heading'>Other Blocks</h1>
			       { result }
			      <section>
			        <div id="search-section">
				      <label>Enter Data <input id='text-field' required  type="text" onChange={this.props.mineData} value={this.props.data} /></label>
				      <button onClick={()=>this.props.mineBlock(new Block(1,"12/06/1923",this.props.data))}>Mine Block</button>
				     </div>
			      </section>
			      </div>
			     
		       </div>
		       </form>
			)
	}



}

export default BlockChain;