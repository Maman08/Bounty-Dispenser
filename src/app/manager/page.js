 "use client"
// import { useState } from 'react'
// import { BarChart, Calendar, Github, Search, Wallet } from 'lucide-react'
// import {  useActiveAccount,useReadContract } from "thirdweb/react";

// // Mock data for GitHub issues
// const mockIssues = [
//   { id: 1, title: "Enhance UI color scheme", isBounty: true, status: "Open", amount: 150, assignee: null, dueDate: "2023-06-30" },
//   { id: 2, title: "Implement responsive design", isBounty: true, status: "Closed", amount: 200, assignee: "alice", dueDate: "2023-06-15" },
//   { id: 3, title: "Update API documentation", isBounty: false, status: "Open", amount: 0, assignee: null, dueDate: null },
//   { id: 4, title: "Optimize image loading", isBounty: true, status: "Open", amount: 175, assignee: null, dueDate: "2023-07-10" },
//   { id: 5, title: "Fix accessibility issues", isBounty: true, status: "Closed", amount: 125, assignee: "bob", dueDate: "2023-06-20" },
// ]

// // Mock data for awarded users
// const awardedUsers = [
//   { id: 1, name: "Alice Chen", github: "alicechen", amount: 200, avatar: "/placeholder.svg?height=32&width=32" },
//   { id: 2, name: "Bob Smith", github: "bobsmith", amount: 125, avatar: "/placeholder.svg?height=32&width=32" },
//   { id: 3, name: "Carol Davis", github: "caroldavis", amount: 175, avatar: "/placeholder.svg?height=32&width=32" },
// ]

// function Avatar({ src, alt }) {
//   return (
//     <img className="w-16 h-16 rounded-full border-2 border-purple-500" src={src} alt={alt} />
//   )
// }

// function Select({ options, value, onChange }) {
//   return (
//     <select className="bg-gray-700 text-gray-200 border-gray-600" value={value} onChange={e => onChange(e.target.value)}>
//       {options.map(option => (
//         <option key={option.value} value={option.value}>{option.label}</option>
//       ))}
//     </select>
//   )
// }

// function Card({ children, className }) {
//   return (
//     <div className={`p-4 rounded-lg shadow-lg bg-gray-800 border-purple-500 ${className}`}>
//       {children}
//     </div>
//   )
// }

// const ManagerDashboard = () => {
//   const account = useActiveAccount();
//   const [issues, setIssues] = useState(mockIssues)
//   const [filterBounty, setFilterBounty] = useState("all")
//   const [filterStatus, setFilterStatus] = useState("all")
//   const [searchTerm, setSearchTerm] = useState("")

//   const filteredIssues = issues.filter(issue => 
//     (filterBounty === "all" || (filterBounty === "bounty" && issue.isBounty) || (filterBounty === "non-bounty" && !issue.isBounty)) &&
//     (filterStatus === "all" || filterStatus === issue.status.toLowerCase()) &&
//     (issue.title.toLowerCase().includes(searchTerm.toLowerCase()) || (issue.assignee && issue.assignee.toLowerCase().includes(searchTerm.toLowerCase())))
//   )

//   const totalAvailable = 1500
//   const totalDisbursed = awardedUsers.reduce((sum, user) => sum + user.amount, 0)

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800 p-6 shadow-lg">
//         <div className="flex flex-col items-center mb-6">
//           <Avatar src="/placeholder.svg?height=96&width=96" alt="Maintainer" />
//           <h2 className="text-xl font-bold text-gray-100">Jane Doe</h2>
//           <p className="text-sm text-gray-400">Open Source Visionary</p>
//         </div>
//         <div className="mb-6 space-y-2">
//           <div className="flex items-center">
//             <Github className="w-4 h-4 mr-2 text-purple-400" />
//             <span className="text-sm text-gray-300">janedoe</span>
//           </div>
//           <div className="flex items-center">
//             <Wallet className="w-4 h-4 mr-2 text-purple-400" />
//             <span className="text-sm text-gray-300 truncate">0x1234...5678</span>
//           </div>
//           <div className="flex items-center">
//             <Calendar className="w-4 h-4 mr-2 text-purple-400" />
//             <span className="text-sm text-gray-300">Joined May 2020</span>
//           </div>
//         </div>
//         <div className="border-t border-gray-700 pt-6">
//           <h3 className="font-semibold mb-2 text-gray-200">About</h3>
//           <p className="text-sm text-gray-400 leading-relaxed">
//             Passionate about creating inclusive and innovative open source solutions.
//           </p>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-8 overflow-auto">
//         <h1 className="text-3xl font-bold mb-8 text-gray-100">Maintainer's Dashboard</h1>

//         {/* Stats cards */}
//         <div className="grid grid-cols-3 gap-6 mb-8">
//           <Card>
//             <div className="flex justify-between pb-2">
//               <span className="text-sm text-gray-300">Available to Disburse</span>
//               <Wallet className="w-4 h-4 text-purple-400" />
//             </div>
//             <div className="text-2xl text-gray-100">${totalAvailable.toFixed(2)}</div>
//             <p className="text-xs text-gray-400 mt-1">Last updated: Today</p>
//           </Card>
//           <Card>
//             <div className="flex justify-between pb-2">
//               <span className="text-sm text-gray-300">Total Disbursed</span>
//               <BarChart className="w-4 h-4 text-purple-400" />
//             </div>
//             <div className="text-2xl text-gray-100">${totalDisbursed.toFixed(2)}</div>
//             <p className="text-xs text-gray-400 mt-1">Across {awardedUsers.length} contributors</p>
//           </Card>
//           <Card>
//             <div className="flex justify-between pb-2">
//               <span className="text-sm text-gray-300">Open Bounties</span>
//               <Github className="w-4 h-4 text-purple-400" />
//             </div>
//             <div className="text-2xl text-gray-100">{issues.filter(issue => issue.isBounty && issue.status === "Open").length}</div>
//             <p className="text-xs text-gray-400 mt-1">Ready for contributors</p>
//           </Card>
//         </div>

//         {/* Awarded users */}
//         <Card className="mb-8">
//           <div>
//             <span className="text-gray-100">Top Contributors</span>
//             <span className="text-gray-400">Recognizing our most active bounty hunters</span>
//           </div>
//           <div className="flex space-x-6">
//             {awardedUsers.map(user => (
//               <div key={user.id} className="flex flex-col items-center">
//                 <Avatar src={user.avatar} alt={user.name} />
//                 <span className="text-sm text-gray-200">{user.name}</span>
//                 <span className="text-xs text-purple-400">${user.amount}</span>
//                 <a href={`https://github.com/${user.github}`} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-purple-400 mt-1">
//                   @{user.github}
//                 </a>
//               </div>
//             ))}
//           </div>
//         </Card>

//         {/* Issues table */}
//         <Card>
//           <div>
//             <span className="text-gray-100">Project Issues</span>
//             <span className="text-gray-400">Manage and track project issues and bounties</span>
//           </div>
//           <div className="mb-4">
//             <div className="mb-4">
//               <label htmlFor="filter-bounty" className="text-gray-300">Bounty Status</label>
//               <Select 
//                 options={[{ value: "all", label: "All" }, { value: "bounty", label: "Bounty" }, { value: "non-bounty", label: "Non-Bounty" }]} 
//                 value={filterBounty} 
//                 onChange={setFilterBounty} 
//               />
//             </div>
//             <div>
//               <label htmlFor="filter-status" className="text-gray-300">Status</label>
//               <Select 
//                 options={[{ value: "all", label: "All" }, { value: "open", label: "Open" }, { value: "closed", label: "Closed" }]} 
//                 value={filterStatus} 
//                 onChange={setFilterStatus} 
//               />
//             </div>
//             <div className="relative">
//               <input 
//                 type="text" 
//                 placeholder="Search issues..." 
//                 className="bg-gray-700 text-gray-200 border-gray-600 w-full p-2 rounded-lg" 
//                 value={searchTerm} 
//                 onChange={e => setSearchTerm(e.target.value)} 
//               />
//               <Search className="absolute right-3 top-3 text-gray-400" />
//             </div>
//           </div>
//           <table className="table-auto w-full text-left text-gray-300">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Assignee</th>
//                 <th>Status</th>
//                 <th>Amount</th>
//                 <th>Due Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredIssues.map(issue => (
//                 <tr key={issue.id}>
//                   <td>{issue.title}</td>
//                   <td>{issue.assignee || "Unassigned"}</td>
//                   <td>{issue.status}</td>
//                   <td>${issue.amount}</td>
//                   <td>{issue.dueDate || "N/A"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </Card>
//       </div>
//     </div>
//   )
// }
// export default ManagerDashboard;










import React, { useState, useEffect } from 'react';
import { BarChart, Calendar, Github, Search, Wallet } from 'lucide-react';
import { useActiveAccount, useReadContract, useSendTransaction } from "thirdweb/react";
import { contractABI } from '../constants/contract';
import { defineChain, getContract, prepareContractCall } from "thirdweb";
import { ethers } from 'ethers';
import { client } from '../client';
import Manager from "../../../Manager.jpg"
const contract = getContract({
  client,
  chain: defineChain(84532),
  address: "0x96111652DB352b814697e79A846E8CD9C8e11196",
  abi: contractABI,
});

function Avatar({ Manager, alt }) {
  return (
    <img className="w-16 h-16 rounded-full border-2 border-purple-500" src={Manager} alt={alt} />
  )
}

function Select({ options, value, onChange }) {
  return (
    <select className="bg-gray-700 text-gray-200 border-gray-600" value={value} onChange={e => onChange(e.target.value)}>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}

function Card({ children, className }) {
  return (
    <div className={`p-4 rounded-lg shadow-lg bg-gray-800 border-purple-500 ${className}`}>
      {children}
    </div>
  )
}

const ManagerDashboard = () => {
  const account = useActiveAccount();
  const [filterBounty, setFilterBounty] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const { mutate: sendTransaction } = useSendTransaction();

  // Fetch bounties by maintainer
  const { data: bountiesData, isPending: isBountiesPending } = useReadContract({
    contract, 
    method: "function getBountiesByMaintainer(address _maintainer) view returns ((uint256 id, string issueLink, uint256 amount, address creator, address rewardedTo, address[] assignedTo, bool isOpen, bool isCompleted, string rewardee_username)[])",
    params: [account?.address]
  });

  // Fetch maintainer funds
  const { data: fundsData, isPending: isFundsPending } = useReadContract({
    contract, 
    method: "function maintainers(address) view returns (uint256 totalFunds, uint256 blockedFounds, uint256 availableFunds)",
    params: [account?.address]
  });

  // Fetch maintainer bounties count
  const { data: bountyCountData, isPending: isBountyCountPending } = useReadContract({
    contract, 
    method: "function maintainerBounties(address, uint256) view returns (uint256)",
    params: [account?.address, 0] // Assuming 0 is a valid index, adjust if needed
  });

  const [bounties, setBounties] = useState([]);
  const [funds, setFunds] = useState({ totalFunds: 0, blockedFunds: 0, availableFunds: 0 });
  const [bountyCount, setBountyCount] = useState(0);

  useEffect(() => {
    console.log('Account:', account);
    
    if (bountiesData && !isBountiesPending) {
      console.log('Bounties Data:', bountiesData);
      setBounties(bountiesData);
    }
    if (fundsData && !isFundsPending) {
      console.log('Funds Data:', fundsData);
      setFunds({
        totalFunds: Number(fundsData[0].toString())/1000000000000,  
        blockedFunds: Number(fundsData[1].toString())/1000000000000, 
        availableFunds: Number(fundsData[2].toString())/1000000000000 
      });
      console.log("totalFunds", funds.totalFunds);
    }
    if (bountyCountData && !isBountyCountPending) {
      console.log('Bounty Count Data:', bountyCountData);
      setBountyCount(bountyCountData);
    }

    console.log('Is Bounties Pending:', isBountiesPending);
    console.log('Is Funds Pending:', isFundsPending);
    console.log('Is Bounty Count Pending:', isBountyCountPending);

  }, [account, bountiesData, fundsData, bountyCountData, isBountiesPending, isFundsPending, isBountyCountPending]);

  useEffect(() => {
    console.log('Updated Bounties:', bounties);
    console.log('Updated Funds:', funds);
    console.log('Updated Bounty Count:', bountyCount);
  }, [bounties, funds, bountyCount]);

  const filteredBounties = bounties.filter(bounty => 
    (filterBounty === "all" || (filterBounty === "bounty" && bounty.isOpen) || (filterBounty === "non-bounty" && !bounty.isOpen)) &&
    (filterStatus === "all" || (filterStatus === "open" && bounty.isOpen) || (filterStatus === "closed" && !bounty.isOpen)) &&
    (bounty.issueLink.toLowerCase().includes(searchTerm.toLowerCase()) || bounty.rewardee_username.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  console.log('Filtered Bounties:', filteredBounties);

  // const handleDepositFunds = () => {
  //   if (!depositAmount || isNaN(depositAmount) || parseFloat(depositAmount) <= 0) {
  //     alert("Please enter a valid deposit amount.");
  //     return;
  //   }

  //   const transaction = prepareContractCall({
  //     contract,
  //     method: "function depositFunds() payable",
  //     params: [],
  //     value: parseFloat(depositAmount) * 1e18 // Convert ETH to Wei
  //   });
    
  //   sendTransaction(transaction)
  //     .then(() => {
  //       alert("Deposit transaction sent successfully!");
  //       setDepositAmount("");
  //     })
  //     .catch((error) => {
  //       console.error("Deposit failed:", error);
  //       alert("Deposit failed. Please try again.");
  //     });
  // }

  const handleDepositFunds = async () => {
    // Input validation
    if (!depositAmount || isNaN(depositAmount) || parseFloat(depositAmount) <= 0) {
      alert("Please enter a valid deposit amount.");
      return;
    }
  
    try {
      // Convert ETH to Wei (1 ETH = 10^18 Wei)
      const valueInWei = parseFloat(depositAmount) * 1e18;
      
      const transaction = prepareContractCall({
        contract,
        method: "function depositFunds() payable",
        params: [],
        value: valueInWei
      });
      
      const tx = await sendTransaction(transaction);
      alert("Deposit transaction sent successfully,wait for wallet to pop up!");
      setDepositAmount("");
      
      // Optionally wait for transaction confirmation
       await tx.wait();
      alert("Deposit confirmed!");
      
    } catch (error) {
      console.error("Deposit failed:", error);
    }
  }
  

  if (!account) {
    console.log('No account connected');
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Maintainer's Dashboard</h1>
          <p className="mb-8">Please connect your wallet to access the dashboard.</p>
          {/* Add your wallet connect button here */}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6 shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <Avatar src={Manager} alt="Maintainer" />
          <h2 className="text-xl font-bold text-gray-100">Maintainer</h2>
          <p className="text-sm text-gray-400">Open Source Visionary</p>
        </div>
        <div className="mb-6 space-y-2">
          <div className="flex items-center">
            <Github className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm text-gray-300">Maman08</span>
          </div>
          <div className="flex items-center">
            <Wallet className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm text-gray-300 truncate">{account.address}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm text-gray-300">Joined: N/A</span>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <h3 className="font-semibold mb-2 text-gray-200">About</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Passionate about creating inclusive and innovative open source solutions.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-100">Maintainer's Dashboard</h1>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="flex justify-between pb-2">
              <span className="text-sm text-gray-300">Available Funds</span>
              <Wallet className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl text-gray-100">ETH{funds.availableFunds.toString()}</div>
            <p className="text-xs text-gray-400 mt-1">Last updated: Now</p>
          </Card>
          <Card>
            <div className="flex justify-between pb-2">
              <span className="text-sm text-gray-300">Total Funds</span>
              <BarChart className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl text-gray-100">ETH{funds.totalFunds.toString()}</div>
            <p className="text-xs text-gray-400 mt-1">Blocked: ETH{funds.blockedFunds.toString()}</p>
          </Card>
          <Card>
            <div className="flex justify-between pb-2">
              <span className="text-sm text-gray-300">Open Bounties</span>
              <Github className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl text-gray-100">{bounties.filter(bounty => bounty.isOpen).length}</div>
          </Card>
          <Card>
            <div className="flex justify-between pb-2">
              <span className="text-sm text-gray-300">Deposit Funds</span>
              <Wallet className="w-4 h-4 text-purple-400" />
            </div>
            <input
              type="number"
              placeholder="Amount in ETH"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              className="w-full p-2 mb-2 bg-gray-700 text-gray-200 border border-gray-600 rounded"
            />
            <button 
              onClick={handleDepositFunds}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Deposit Funds
            </button>
          </Card>
        </div>

        {/* Bounties table */}
        <Card>
          <div>
            <span className="text-gray-100">Project Bounties</span>
            <span className="text-gray-400">Manage and track your bounties</span>
          </div>
          <div className="mb-4">
            <div className="mb-4">
              <label htmlFor="filter-bounty" className="text-gray-300">Bounty Status</label>
              <Select 
                options={[{ value: "all", label: "All" }, { value: "bounty", label: "Open" }, { value: "non-bounty", label: "Closed" }]} 
                value={filterBounty} 
                onChange={setFilterBounty} 
              />
            </div>
            <div>
              <label htmlFor="filter-status" className="text-gray-300">Completion Status</label>
              <Select 
                options={[{ value: "all", label: "All" }, { value: "open", label: "Incomplete" }, { value: "closed", label: "Completed" }]} 
                value={filterStatus} 
                onChange={setFilterStatus} 
              />
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search bounties..." 
                className="bg-gray-700 text-gray-200 border-gray-600 w-full p-2 rounded-lg" 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)} 
              />
              <Search className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>
          <table className="table-auto w-full text-left text-gray-300">
            <thead>
              <tr>
                <th>Issue Link</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Rewarded To</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {filteredBounties.map(bounty => (
                <tr key={bounty.id}>
                  <td>{bounty.issueLink}</td>
                  <td>ETH{Number(bounty.amount.toString())/1000000000000}</td>
                  <td>{bounty.isOpen ? 'Open' : 'Closed'}</td>
                  <td>{bounty.rewardee_username || 'Not Assigned'}</td>
                  <td>{bounty.isCompleted ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default ManagerDashboard;



