import React, { useState, useEffect } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

interface Project {
  id: number;
  name: string;
  description: string;
  contributions: number;
  matchedFunding: number;
}

const initialProjects: Project[] = [
    { id: 1, name: "Refugee Language Learning App", description: "A mobile app teaching local languages to refugees", contributions: 1000, matchedFunding: 2500 },
    { id: 2, name: "Refugee Housing Network", description: "Initiative to provide temporary housing for refugees", contributions: 750, matchedFunding: 1800 },
    { id: 3, name: "Refugee Job Skills Training", description: "Program offering vocational training for refugees", contributions: 1200, matchedFunding: 3000 },
    { id: 4, name: "Refugee Legal Aid Service", description: "Pro bono legal assistance for asylum seekers", contributions: 900, matchedFunding: 2200 },
    { id: 5, name: "Refugee Mental Health Support", description: "Telemedicine platform for refugee mental health care", contributions: 600, matchedFunding: 1500 },
  ];
  

const QuadraticFundingLeaderboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Project; direction: 'ascending' | 'descending' }>({ key: 'matchedFunding', direction: 'descending' });

  useEffect(() => {
    const sortedProjects = [...projects].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    setProjects(sortedProjects);
  }, [sortConfig]);

  const requestSort = (key: keyof Project) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="py-1 bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Quadratic Funding Leaderboard</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rank
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('contributions')}>
                  <div className="flex items-center">
                    Contributions
                    {sortConfig.key === 'contributions' && (
                      sortConfig.direction === 'ascending' ? <ArrowUpIcon className="h-4 w-4 ml-1" /> : <ArrowDownIcon className="h-4 w-4 ml-1" />
                    )}
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('matchedFunding')}>
                  <div className="flex items-center">
                    Matched Funding
                    {sortConfig.key === 'matchedFunding' && (
                      sortConfig.direction === 'ascending' ? <ArrowUpIcon className="h-4 w-4 ml-1" /> : <ArrowDownIcon className="h-4 w-4 ml-1" />
                    )}
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Funding
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project, index) => (
                <tr key={project.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{project.name}</div>
                    <div className="text-sm text-gray-500">{project.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${project.contributions.toLocaleString()} ETH</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${project.matchedFunding.toLocaleString()} ETH</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    ${(project.contributions + project.matchedFunding).toLocaleString()} ETH
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuadraticFundingLeaderboard;