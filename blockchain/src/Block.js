import sha256 from 'crypto-js/sha256';

class Block{

	constructor(index,timestamp,data,previousHash=''){
      this.index=index;
      this.timestamp=timestamp;
      this.data=data;
      this.previousHash=previousHash;
      this.hash=this.CalculateHash();
      this.nonce=0;
      this.mining=true;
	}

	CalculateHash(){
		return sha256(this.index+this.timestamp+this.previousHash+this.nonce+JSON.stringify(this.data)).toString();
	}

	Mine(difficulty){
		while(this.hash.substring(0,difficulty)!==Array(difficulty+1).join("0")){
            this.nonce++;
            this.hash=this.CalculateHash();
		}
		this.mining=false;
	}
}

export default Block;