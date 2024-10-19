"use client"

// import React, { useState } from 'react';
// import { BarChart, Calendar, Github, Search, Wallet } from 'lucide-react';

// // Mock UI components
// const Avatar = ({ children, className }) => <div className={`rounded-full ${className}`}>{children}</div>;
// const AvatarImage = ({ src, alt }) => <img src={src} alt={alt} className="rounded-full" />;
// const AvatarFallback = ({ children }) => <div className="flex items-center justify-center">{children}</div>;

// const Button = ({ children, className }) => <button className={`px-4 py-2 bg-purple-500 text-white rounded ${className}`}>{children}</button>;

// const Card = ({ children, className }) => <div className={`border rounded-lg p-4 ${className}`}>{children}</div>;
// const CardHeader = ({ children }) => <div className="mb-2">{children}</div>;
// const CardContent = ({ children }) => <div className="mt-4">{children}</div>;
// const CardTitle = ({ children }) => <h3 className="text-lg font-bold">{children}</h3>;
// const CardDescription = ({ children }) => <p className="text-sm text-gray-400">{children}</p>;

// const Input = ({ placeholder, className }) => <input type="text" placeholder={placeholder} className={`border rounded px-2 py-1 ${className}`} />;

// const Label = ({ htmlFor, children }) => <label htmlFor={htmlFor} className="block text-sm font-medium">{children}</label>;

// const Select = ({ value, onValueChange, children }) => (
//   <select value={value} onChange={(e) => onValueChange(e.target.value)} className="border rounded bg-gray-700 text-gray-200">
//     {children}
//   </select>
// );

// const SelectTrigger = ({ id, children, className }) => (
//   <div id={id} className={`cursor-pointer ${className}`}>
//     {children}
//   </div>
// );
// const SelectValue = ({ placeholder }) => <option value="">{placeholder}</option>;
// const SelectContent = ({ children }) => <>{children}</>;
// const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;

// const Tabs = ({ defaultValue, children }) => <div>{children}</div>;
// const TabsList = ({ children }) => <div className="flex">{children}</div>;
// const TabsTrigger = ({ value, children }) => <button className="flex-1">{children}</button>;
// const TabsContent = ({ value, children }) => <div>{children}</div>;

// const Table = ({ children }) => <table className="min-w-full border">{children}</table>;
// const TableHead = ({ children }) => <thead className="bg-gray-700">{children}</thead>;
// const TableBody = ({ children }) => <tbody>{children}</tbody>;
// const TableRow = ({ children }) => <tr className="border-b">{children}</tr>;
// const TableCell = ({ children }) => <td className="py-2 px-4">{children}</td>;

// const Badge = ({ children, className }) => <span className={`px-2 py-1 rounded-full ${className}`}>{children}</span>;

// const mockIssues = [
//   { id: 1, title: "Enhance UI color scheme", isBounty: true, status: "Open", amount: 150, assignee: null, dueDate: "2023-06-30" },
//   { id: 2, title: "Implement responsive design", isBounty: true, status: "Closed", amount: 200, assignee: "alice", dueDate: "2023-06-15" },
//   { id: 3, title: "Update API documentation", isBounty: false, status: "Open", amount: 0, assignee: null, dueDate: null },
//   { id: 4, title: "Optimize image loading", isBounty: true, status: "Open", amount: 175, assignee: null, dueDate: "2023-07-10" },
//   { id: 5, title: "Fix accessibility issues", isBounty: true, status: "Closed", amount: 125, assignee: "bob", dueDate: "2023-06-20" },
// ];

// const awardedUsers = [
//   { id: 1, name: "Alice Chen", github: "alicechen", amount: 200, avatar: "/placeholder.svg?height=32&width=32" },
//   { id: 2, name: "Bob Smith", github: "bobsmith", amount: 125, avatar: "/placeholder.svg?height=32&width=32" },
//   { id: 3, name: "Carol Davis", github: "caroldavis", amount: 175, avatar: "/placeholder.svg?height=32&width=32" },
// ];

// export default function Dashboard() {
//   const [issues, setIssues] = useState(mockIssues);
//   const [filterBounty, setFilterBounty] = useState("all");
//   const [filterStatus, setFilterStatus] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredIssues = issues.filter(issue =>
//     (filterBounty === "all" || (filterBounty === "bounty" && issue.isBounty) || (filterBounty === "non-bounty" && !issue.isBounty)) &&
//       (filterStatus === "all" || filterStatus.toLowerCase() === issue.status.toLowerCase()) &&
//       (issue.title.toLowerCase().includes(searchTerm.toLowerCase()) || (issue.assignee && issue.assignee.toLowerCase().includes(searchTerm.toLowerCase())))
//   );

//   const totalAvailable = 1500; // Mock total available amount
//   const totalDisbursed = awardedUsers.reduce((sum, user) => sum + user.amount, 0);

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800 p-6 shadow-lg">
//         <div className="flex flex-col items-center mb-6">
//           <Avatar className="w-24 h-24 mb-4 border-4 border-purple-500">
//             <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Maintainer" />
//             <AvatarFallback>JD</AvatarFallback>
//           </Avatar>
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
//             Passionate about creating inclusive and innovative open source solutions. Dedicated to fostering a collaborative developer community and driving technological advancements.
//           </p>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-8 overflow-auto">
//         <h1 className="text-3xl font-bold mb-8 text-gray-100">Maintainer's Dashboard</h1>

//         {/* Stats cards */}
//         <div className="grid grid-cols-3 gap-6 mb-8">
//           <Card className="bg-gray-800 border-purple-500 border">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium text-gray-300">Available to Disburse</CardTitle>
//               <Wallet className="w-4 h-4 text-purple-400" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold text-gray-100">${totalAvailable.toFixed(2)}</div>
//               <p className="text-xs text-gray-400 mt-1">Last updated: Today</p>
//             </CardContent>
//           </Card>
//           <Card className="bg-gray-800 border-purple-500 border">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium text-gray-300">Total Disbursed</CardTitle>
//               <Wallet className="w-4 h-4 text-purple-400" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold text-gray-100">${totalDisbursed.toFixed(2)}</div>
//               <p className="text-xs text-gray-400 mt-1">Last updated: Today</p>
//             </CardContent>
//           </Card>
//           <Card className="bg-gray-800 border-purple-500 border">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium text-gray-300">Total Issues</CardTitle>
//               <Search className="w-4 h-4 text-purple-400" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold text-gray-100">{issues.length}</div>
//               <p className="text-xs text-gray-400 mt-1">Last updated: Today</p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Filters */}
//         <div className="flex space-x-4 mb-6">
//           <Select value={filterBounty} onValueChange={setFilterBounty}>
//             <SelectTrigger>
//               <SelectValue placeholder="Filter by Bounty" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All</SelectItem>
//               <SelectItem value="bounty">Bounties</SelectItem>
//               <SelectItem value="non-bounty">Non-Bounties</SelectItem>
//             </SelectContent>
//           </Select>

//           <Select value={filterStatus} onValueChange={setFilterStatus}>
//             <SelectTrigger>
//               <SelectValue placeholder="Filter by Status" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All</SelectItem>
//               <SelectItem value="open">Open</SelectItem>
//               <SelectItem value="closed">Closed</SelectItem>
//             </SelectContent>
//           </Select>

//           <Input
//             placeholder="Search Issues or Assignees..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="flex-1"
//           />
//         </div>

//         {/* Issues Table */}
//         <Table>
//           <TableHead>
//             <tr>
//               <TableCell>Title</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Assignee</TableCell>
//               <TableCell>Amount</TableCell>
//               <TableCell>Due Date</TableCell>
//             </tr>
//           </TableHead>
//           <TableBody>
//             {filteredIssues.map(issue => (
//               <TableRow key={issue.id}>
//                 <TableCell className="font-medium text-purple-500">{issue.title}</TableCell>
//                 <TableCell>
//                   <Badge className={issue.status === "Open" ? "bg-green-500" : "bg-red-500"}>
//                     {issue.status}
//                   </Badge>
//                 </TableCell>
//                 <TableCell>{issue.assignee || "Unassigned"}</TableCell>
//                 <TableCell>${issue.amount || "N/A"}</TableCell>
//                 <TableCell>{issue.dueDate || "N/A"}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>

//         {/* Awarded Users Section */}
//         <h2 className="text-xl font-bold mt-10 mb-4 text-gray-100">Awarded Users</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {awardedUsers.map(user => (
//             <Card key={user.id} className="bg-gray-800 border-purple-500 border">
//               <CardHeader className="flex items-center">
//                 <Avatar className="w-12 h-12 mr-3">
//                   <AvatarImage src={user.avatar} alt={user.name} />
//                   <AvatarFallback>{user.name[0]}</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <h4 className="text-md font-semibold">{user.name}</h4>
//                   <p className="text-sm text-gray-400">@{user.github}</p>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-sm text-gray-100">Total Amount Disbursed: ${user.amount}</div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState } from 'react'
import { BarChart, Calendar, Github, Search, Wallet } from 'lucide-react'

// Mock data for GitHub issues
const mockIssues = [
  { id: 1, title: "Enhance UI color scheme", isBounty: true, status: "Open", amount: 150, assignee: null, dueDate: "2023-06-30" },
  { id: 2, title: "Implement responsive design", isBounty: true, status: "Closed", amount: 200, assignee: "alice", dueDate: "2023-06-15" },
  { id: 3, title: "Update API documentation", isBounty: false, status: "Open", amount: 0, assignee: null, dueDate: null },
  { id: 4, title: "Optimize image loading", isBounty: true, status: "Open", amount: 175, assignee: null, dueDate: "2023-07-10" },
  { id: 5, title: "Fix accessibility issues", isBounty: true, status: "Closed", amount: 125, assignee: "bob", dueDate: "2023-06-20" },
]

// Mock data for awarded users
const awardedUsers = [
  { id: 1, name: "Alice Chen", github: "alicechen", amount: 200, avatar: "/placeholder.svg?height=32&width=32" },
  { id: 2, name: "Bob Smith", github: "bobsmith", amount: 125, avatar: "/placeholder.svg?height=32&width=32" },
  { id: 3, name: "Carol Davis", github: "caroldavis", amount: 175, avatar: "/placeholder.svg?height=32&width=32" },
]

function Avatar({ src, alt }) {
  return (
    <img className="w-16 h-16 rounded-full border-2 border-purple-500" src={src} alt={alt} />
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

const ContributorDashboard = () => {
  const [issues, setIssues] = useState(mockIssues)
  const [filterBounty, setFilterBounty] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredIssues = issues.filter(issue => 
    (filterBounty === "all" || (filterBounty === "bounty" && issue.isBounty) || (filterBounty === "non-bounty" && !issue.isBounty)) &&
    (filterStatus === "all" || filterStatus === issue.status.toLowerCase()) &&
    (issue.title.toLowerCase().includes(searchTerm.toLowerCase()) || (issue.assignee && issue.assignee.toLowerCase().includes(searchTerm.toLowerCase())))
  )

  const totalAvailable = 1500
  const totalDisbursed = awardedUsers.reduce((sum, user) => sum + user.amount, 0)

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6 shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <Avatar src="/placeholder.svg?height=96&width=96" alt="Maintainer" />
          <h2 className="text-xl font-bold text-gray-100">Jane Doe</h2>
          <p className="text-sm text-gray-400">Open Source Visionary</p>
        </div>
        <div className="mb-6 space-y-2">
          <div className="flex items-center">
            <Github className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm text-gray-300">janedoe</span>
          </div>
          <div className="flex items-center">
            <Wallet className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm text-gray-300 truncate">0x1234...5678</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm text-gray-300">Joined May 2020</span>
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
              <span className="text-sm text-gray-300">Available to Disburse</span>
              <Wallet className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl text-gray-100">${totalAvailable.toFixed(2)}</div>
            <p className="text-xs text-gray-400 mt-1">Last updated: Today</p>
          </Card>
          <Card>
            <div className="flex justify-between pb-2">
              <span className="text-sm text-gray-300">Total Disbursed</span>
              <BarChart className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl text-gray-100">${totalDisbursed.toFixed(2)}</div>
            <p className="text-xs text-gray-400 mt-1">Across {awardedUsers.length} contributors</p>
          </Card>
          <Card>
            <div className="flex justify-between pb-2">
              <span className="text-sm text-gray-300">Open Bounties</span>
              <Github className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl text-gray-100">{issues.filter(issue => issue.isBounty && issue.status === "Open").length}</div>
            <p className="text-xs text-gray-400 mt-1">Ready for contributors</p>
          </Card>
        </div>

        {/* Awarded users */}
        <Card className="mb-8">
          <div>
            <span className="text-gray-100">Top Contributors</span>
            <span className="text-gray-400">Recognizing our most active bounty hunters</span>
          </div>
          <div className="flex space-x-6">
            {awardedUsers.map(user => (
              <div key={user.id} className="flex flex-col items-center">
                <Avatar src={user.avatar} alt={user.name} />
                <span className="text-sm text-gray-200">{user.name}</span>
                <span className="text-xs text-purple-400">${user.amount}</span>
                <a href={`https://github.com/${user.github}`} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-purple-400 mt-1">
                  @{user.github}
                </a>
              </div>
            ))}
          </div>
        </Card>

        {/* Issues table */}
        <Card>
          <div>
            <span className="text-gray-100">Project Issues</span>
            <span className="text-gray-400">Manage and track project issues and bounties</span>
          </div>
          <div className="mb-4">
            <div className="mb-4">
              <label htmlFor="filter-bounty" className="text-gray-300">Bounty Status</label>
              <Select 
                options={[{ value: "all", label: "All" }, { value: "bounty", label: "Bounty" }, { value: "non-bounty", label: "Non-Bounty" }]} 
                value={filterBounty} 
                onChange={setFilterBounty} 
              />
            </div>
            <div>
              <label htmlFor="filter-status" className="text-gray-300">Status</label>
              <Select 
                options={[{ value: "all", label: "All" }, { value: "open", label: "Open" }, { value: "closed", label: "Closed" }]} 
                value={filterStatus} 
                onChange={setFilterStatus} 
              />
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search issues..." 
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
                <th>Title</th>
                <th>Assignee</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredIssues.map(issue => (
                <tr key={issue.id}>
                  <td>{issue.title}</td>
                  <td>{issue.assignee || "Unassigned"}</td>
                  <td>{issue.status}</td>
                  <td>${issue.amount}</td>
                  <td>{issue.dueDate || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
export default ContributorDashboard;