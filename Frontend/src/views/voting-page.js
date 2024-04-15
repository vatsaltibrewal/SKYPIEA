import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './voting-page.css';

import abi from "./contractJson/election.json"
import { ethers } from 'ethers'

const VOTINGPAGE = (props) => {
  
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");

  useEffect(() => {
    const loadReports = async () => {
        const contractAddress = "0x61a5AdE5e66AD3ED620eeD984201899B58e83b04";
        const contractABI = abi.abi;
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                contractAddress,
                contractABI,
                signer
            );
            setAccount(account);
            setState({ provider, signer, contract });
        } else {
            console.log('Please install MetaMask or similar extension to use Ethereum features');
        }
    };
    loadReports();
  }, []);

  const [report, setreport] = useState([]);
  const { contract } = state;
  useEffect(() => {
    const reportsMessage = async () => {
      const memos = await contract.viewCount();
      setreport(memos);
    };
    contract && reportsMessage();
  }, [contract]);
  console.log(report);


  async function vote(){
    const Description = document.querySelector("#id").value;
    console.log(Description, contract);
    const transaction = await contract.Vote(Description);
    await transaction.wait();
    console.log(transaction);
  }
  

  return (
    <div className="votingpage-container">
      <Helmet>
        <title>VOTING-PAGE</title>
        <meta
          property="og:title"
          content="VOTING-PAGE"
        />
      </Helmet>
      <form className="votingpage-form">
        <h1 className="votingpage-text">VOTE HERE............</h1>
        
        <button type="button" className="votingpage-button button" onClick={vote}>
          Vote
        </button>
        
        <input
          type="number"
          required="true"
          placeholder="ID Of Candidate"
          className="votingpage-textinput1 input"
          id="id"
          name="id"
        />
      </form>
      <img alt="image" src="/group%202415.svg" className="votingpage-image" />
      <h1 className="votingpage-text1">DECENTRALIZED VOTING SYSTEM</h1>

      <h1 className="votingpage-text2">LIVE VOTING</h1>
      
      {/* Table */}
      <div className="votingpage-table-container">
        <table className="votingpage-table" id = "VotingTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {report.map((memo) => (
              <tr key={Math.random()}>
                <td>{memo.idCount.toString()}</td>
                
                <td>{memo.name}</td>
                <td>{memo.wallet}</td>
                <td>{memo.count.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VOTINGPAGE;
