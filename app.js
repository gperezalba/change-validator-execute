const manageNodesABI = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"nodes","outputs":[{"name":"index","type":"uint256"},{"name":"payedPrice","type":"uint256"},{"name":"isValidator","type":"bool"},{"name":"isHolder","type":"bool"},{"name":"fromDay","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"purchaseNode","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_node","type":"address"},{"name":"day","type":"uint256"}],"name":"modifyFromDay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNodesValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_node","type":"address"}],"name":"getPayedPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_oldValidator","type":"address"}],"name":"changeValidatorsExecute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_node","type":"address"}],"name":"getNodeIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_node","type":"address"},{"name":"day","type":"uint256"}],"name":"isRewarded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"blockSecond","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"pendingValidatorChange","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"purchaseNodePrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nodesValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"sellCommission","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sellNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"nodesArray","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"purchaseCommission","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"globalIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sellNodePrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNodes","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newValidatorSetAddress","type":"address"}],"name":"setValidatorSetAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentNodePrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_node","type":"address"}],"name":"isValidator","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_node","type":"address"}],"name":"getFromDay","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_oldValidator","type":"address"},{"name":"_newValidator","type":"address"}],"name":"changeValidatorsPending","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"initialValidators","type":"address[]"},{"name":"payed","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"buyer","type":"address"},{"indexed":false,"name":"price","type":"uint256"},{"indexed":false,"name":"fromDay","type":"uint256"}],"name":"PurchaseNode","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"seller","type":"address"},{"indexed":false,"name":"price","type":"uint256"}],"name":"SellNode","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"uint256"},{"indexed":false,"name":"","type":"uint256"}],"name":"CurrentNodeValue","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"","type":"address"},{"indexed":true,"name":"","type":"address"}],"name":"PendingValidatorChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"","type":"address"},{"indexed":true,"name":"","type":"address"}],"name":"ExecutedValidatorChange","type":"event"}];
const manageNodesADDRESS = "0x0000000000000000000000000000000000000012";

const ernesto = "0xa5d278ECE9a24eb4FDC075A442b8847891cFA0B6";
const ernestoOld = "0x20580de9c6ed939c6d43e06b4e050014971b9ee0";
const ali = "0x94B889B58396986CB93CD129ea99C7f3A0FaAbDd";
const aliOld = "0x8854522fbf6ff0ce35951ea9679feeac7a4bb02d";
const venepi = "0x75F7863a48e33959130011981A1F602043BC4902";
const venepiOld = "0x87f4afcd7be74ae20183c358ed0ae7b419068123";
const iriana = "0x8c522178Cd6D80203C5Bce8faAa988bD7133eda2";
const irianaOld = "0xe895b3912adb2dcab6ca1552795f92743d8373dd";
const guille = "0xf6bD003d07eBA2027C34fACE6af863Fd3f8B5a14";
const guilleOld = "0x515234B2122a1fB51fCbE360d2379e35135B980a";

const App = {
    web3: null,
    account: null,
	contract: null,

    start: async function(web3) {
        this.web3 = web3;

        try {
			this.contract = new this.web3.eth.Contract(manageNodesABI, manageNodesADDRESS);

            const accounts = await this.web3.eth.getAccounts();
            this.account = accounts[0];

        } catch (error) {
            console.error("Could not connect to contract or chain.");
        }
	},

	execute: async function() {
		let oldValidator = this.getOld();
		console.log(oldValidator)
		let calldata = this.contract.methods.changeValidatorsExecute(oldValidator).encodeABI();
		console.log(calldata);
		//await this.contract.methods.changeValidatorsExecute(oldValidator).send({value: 1000000000000000000, from: this.account, gas: 100000});
	},

	getOld: function() {
		let old;

		if (this.account == ernesto) {
			old = ernestoOld;
		} else if (this.account == ali) {
			old = aliOld;
		} else if (this.account == venepi) {
			old = venepiOld;
		} else if (this.account == iriana) {
			old = irianaOld;
		} else if (this.account == guille) {
			old = guilleOld;
		}

		return old;
	}

}    

window.App = App;

window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
            var accounts= await web3.eth.getAccounts();
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
    console.log(web3.version);
	App.start(window.web3);
});