 "use client";
import { client } from "../client";
import { defineChain, getContract } from "thirdweb";
import React, { useState, useMemo, useEffect } from 'react';
import { useReadContract } from "thirdweb/react";
import { contractABI } from "../constants/contract";

const contract = getContract({
  client,
  chain: defineChain(84532),
  address: "0x96111652DB352b814697e79A846E8CD9C8e11196",
  abi: contractABI,
});

const AllIssues = () => {
  const { data, isPending, error } = useReadContract({
    contract,
    method: "function getBounties() view returns ((uint256 id, string issueLink, uint256 amount, address creator, address rewardedTo, address[] assignedTo, bool isOpen, bool isCompleted, string rewardee_username)[])",
    params: []
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [issueTitles, setIssueTitles] = useState({});

  const bounties = useMemo(() => {
    if (!data) {
      console.log('No data available');
      return [];
    }

    try {
      const processedBounties = data.map((bounty) => ({
        id: Number(bounty.id),
        issueLink: bounty.issueLink,
        amount: Number(bounty.amount),
        creator: bounty.creator,
        rewardedTo: bounty.rewardedTo,
        assignedTo: bounty.assignedTo,
        isOpen: bounty.isOpen,
        isCompleted: bounty.isCompleted,
        deadline: bounty.deadline ? Number(bounty.deadline) : 0,
        rewardee_username: bounty.rewardee_username || ''
      }));
      console.log('Processed bounties:', processedBounties);
      return processedBounties;
    } catch (error) {
      console.error('Error processing bounties:', error);
      return [];
    }
  }, [data]);

  useEffect(() => {
    const fetchIssueTitles = async () => {
      const titles = {};
      for (const bounty of bounties) {
        if (bounty.issueLink) {
          try {
            const match = bounty.issueLink.match(/github\.com\/([^/]+)\/([^/]+)\/issues\/(\d+)/);

//            \/: Matches the literal / character in the URL.
// ([^/]+):

//     Matches one or more characters that are not /.
//     The parentheses () create a capturing group, meaning it will save the matched part for later use.
//     [^/] is a negated character class (matches anything except /).
//     The first capturing group will match the username or organization name.

// \/([^/]+): Matches another segment of the URL (the repository name) and saves it in the second capturing group.




   
            if (match) {
              const [, owner, repo, issue_number] = match;
              const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues/${issue_number}`);
              if (response.ok) {
                const issueData = await response.json();
                titles[bounty.id] = issueData.title;
              } else {
           
                titles[bounty.id] = null;
              }
            } else {
              titles[bounty.id] = null;
            }
          } catch (error) {
            console.error(`Error fetching issue title for ${bounty.issueLink}:`, error);
            titles[bounty.id] = null;
          }
        } else {
          titles[bounty.id] = null;
        }
      }
      setIssueTitles(titles);
    };

    if (bounties.length > 0) {
      fetchIssueTitles();
    }
  }, [bounties]);

  const filteredBounties = useMemo(() => {
    return bounties.filter(bounty => 
      ((issueTitles[bounty.id] && issueTitles[bounty.id].toLowerCase().includes(searchTerm.toLowerCase())) ||
       bounty.issueLink.toLowerCase().includes(searchTerm.toLowerCase()) ||
       bounty.rewardee_username.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === 'All' || 
       (statusFilter === 'Open' && bounty.isOpen) ||
       (statusFilter === 'Completed' && bounty.isCompleted) ||
       (statusFilter === 'In Progress' && !bounty.isCompleted && !bounty.isOpen))
    );
  }, [bounties, issueTitles, searchTerm, statusFilter]);

  const sortedBounties = useMemo(() => {
    let sortableBounties = [...filteredBounties];
    if (sortConfig.key !== null) {
      sortableBounties.sort((a, b) => {
        if (sortConfig.key === 'issueTitle') {
          const titleA = issueTitles[a.id] || a.issueLink || '';
          const titleB = issueTitles[b.id] || b.issueLink || '';
          return sortConfig.direction === 'ascending' 
            ? titleA.localeCompare(titleB)
            : titleB.localeCompare(titleA);
        }
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableBounties;
  }, [filteredBounties, sortConfig, issueTitles]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getStatusColor = (bounty) => {
    if (bounty.isCompleted) return '#10B981'; 
    if (bounty.isOpen) return '#3B82F6'; 
    return '#FBBF24'; 
  };

  const getStatus = (bounty) => {
    if (bounty.isCompleted) return 'Completed';
    if (bounty.isOpen) return 'Open';
    return 'In Progress';
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 flex items-center justify-center">
        <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 max-w-md w-full">
          <h3 className="text-red-500 font-bold mb-2">Error Loading Bounties</h3>
          <p>{error.message}</p>
        </div>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 flex items-center justify-center">
        <div className="animate-pulse">Loading bounties...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="bg-gray-800 border border-purple-500 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">All Bounties</h2>
        
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search bounties..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500"
          />
          
          <select
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500"
          >
            <option value="All">All Status</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th 
                  onClick={() => handleSort('id')}
                  className="px-6 py-3 text-left cursor-pointer hover:text-purple-400"
                >
                  ID
                </th>
                <th 
                  onClick={() => handleSort('issueTitle')}
                  className="px-6 py-3 text-left cursor-pointer hover:text-purple-400"
                >
                  Issue
                </th>
                <th className="px-6 py-3 text-left">Status</th>
                <th 
                  onClick={() => handleSort('amount')}
                  className="px-6 py-3 text-left cursor-pointer hover:text-purple-400"
                >
                  Amount (ETH)
                </th>
                <th className="px-6 py-3 text-left">Assignee</th>
              </tr>
            </thead>
            <tbody>
              {sortedBounties.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-gray-400">
                    No bounties found
                  </td>
                </tr>
              ) : (
                sortedBounties.map((bounty) => (
                  <tr key={bounty.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                    <td className="px-6 py-4">{bounty.id}</td>
                    <td className="px-6 py-4">
                      <a 
                        href={bounty.issueLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 hover:underline"
                      >
                        {issueTitles[bounty.id] || bounty.issueLink}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="px-3 py-1 rounded-full text-sm"
                        style={{ backgroundColor: getStatusColor(bounty) }}
                      >
                        {getStatus(bounty)}
                      </span>
                    </td>
                    <td className="px-6 py-4">{(bounty.amount / 1000000000000)}</td>
                    <td className="px-6 py-4">
                      {bounty.rewardee_username || 'Unassigned'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllIssues;
