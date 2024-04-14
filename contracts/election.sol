// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract election{
    mapping (address => uint) votes;
    mapping (address => string) name;
    mapping (address => bool) registered;

    struct candidate{
        string name;
        address wallet;
        uint idCount;
        uint count;
    }

    uint idCount = 0;

    candidate [] candidates;

    function viewCount() public view returns(candidate [] memory){
        return candidates;
    }

    function asVoter(string memory _name) public returns(bool){
        if(registered[msg.sender] == true){
            return false;
        }
        else{
            votes[msg.sender] = 1;
            name[msg.sender] = _name;
            registered[msg.sender] = true;
            return true;
        }
    }

    function asCandidate(string memory _name) public returns (bool) {
        if(registered[msg.sender]==true){
            return false;
        }
        else{
            name[msg.sender] = _name;
            votes[msg.sender] = 1;
            candidates.push(candidate(_name,msg.sender,idCount,0));
            idCount += 1;
            registered[msg.sender] = true;
            return true;
        }
    }

    function Vote(uint _id) public {
        require(votes[msg.sender]>0);
        candidates[_id].count += 1;
        votes[msg.sender] = 0;
    }

}