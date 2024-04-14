import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './voting-page.css';

const VOTINGPAGE = (props) => {
  // Sample data for the table
  const initialCandidates = [
    { id: 1, name: 'John Doe', votes: 100 },
    { id: 2, name: 'Jane Doe', votes: 150 },
  ];

  // State to manage candidates data
  const [candidates, setCandidates] = useState(initialCandidates);
  const [nameInput, setNameInput] = useState('');

  // Function to handle name input change
  const handleNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  // Function to add a new candidate
  const addCandidate = () => {
    const newCandidate = {
      id: candidates.length + 1,
      name: nameInput, // Use the name from the input field
      votes: 0,
    };
    setCandidates([...candidates, newCandidate]);
    setNameInput(''); // Clear the input after adding candidate
  };

  return (
    <div className="votingpage-container">
      <Helmet>
        <title>VOTING-PAGE - Character NFT template</title>
        <meta
          property="og:title"
          content="VOTING-PAGE - Character NFT template"
        />
      </Helmet>
      <form className="votingpage-form">
        <h1 className="votingpage-text">VOTE HERE............</h1>
        <input
          type="text"
          value={nameInput}
          onChange={handleNameInputChange} // Handle name input change
          required="true"
          placeholder="Name"
          className="votingpage-textinput input"
        />
        <button type="button" className="votingpage-button button">
          Vote
        </button>
        <button type="button" className="votingpage-button1 button" onClick={addCandidate}>
          Fetch Candidate
        </button>
        <input
          type="text"
          required="true"
          placeholder="ID Of Candidate"
          className="votingpage-textinput1 input"
        />
      </form>
      <img alt="image" src="/group%202415.svg" className="votingpage-image" />
      <h1 className="votingpage-text1">DECENTRALIZED VOTING SYSTEM</h1>
      
      {/* Table */}
      <div className="votingpage-table-container">
        <table className="votingpage-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map(candidate => (
              <tr key={candidate.id}>
                <td>{candidate.id}</td>
                <td>{candidate.name}</td>
                <td>{candidate.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VOTINGPAGE;
