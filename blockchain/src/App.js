import React,{Component} from 'react';
import './App.css';
import BlockChain from './BlockChain';
import { connect } from 'react-redux';
import { onDataEntry, onResetData, onBlockChainChange }  from './action';



const mapStateToProps=state=>{
    return {
             data:state.MineDataEntry.data,
             chains:state.UpdateBlockChain.chains,
           }
  }

  const mapDispatchToProps=dispatch=>{

    return{
           mineData:(event)=>dispatch(onDataEntry(event.target.value)),
           reSetData:()=>dispatch(onResetData()),
           updateChain:(block)=>dispatch(onBlockChainChange(block)),

          }
  }

class App extends Component{

  constructor(props){
    super(props);
    this.BlockChain=new BlockChain();
    this.status=true;
  }

  mineBlock=(newBlock)=>{
    if(this.props.data.length>0){
          newBlock.previousHash=this.BlockChain.GetLatestBlock().hash;
          newBlock.Mine(this.BlockChain.difficulty);
          this.status=false;
          this.BlockChain.chain.push(newBlock);
          this.props.updateChain(newBlock);
          this.props.reSetData();

    }else{
      console.log("error")
    }
 
    
  }

  render(){

    return (
    <div className="App">
      <header className="App-header">
       <BlockChain mineData={this.props.mineData} data={this.props.data} mineBlock={this.mineBlock} chains={this.props.chains} status={this.status}/>
      </header>
    </div>
  );

  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
