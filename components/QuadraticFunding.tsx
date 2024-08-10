import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

interface Project {
  id: number;
  name: string;
  description: string;
  contributions: number;
}

const initialProjects: Project[] = [
    { id: 1, name: "Refugee Integration Program", description: "Helps refugees adapt to their new communities", contributions: 0 },
    { id: 2, name: "Refugee Children's Education Fund", description: "Provides educational resources for refugee children", contributions: 0 },
    { id: 3, name: "Refugee Entrepreneurship Initiative", description: "Supports refugees in starting their own businesses", contributions: 0 },
  ];

const QuadraticFunding: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const matchingPool = 10000; // $10,000 matching pool

  const handleContribute = (id: number, amount: number) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, contributions: Math.max(0, project.contributions + amount) } : project
    ));
    setTotalContributions(prev => Math.max(0, prev + amount));
  };

  const calculateMatchedFunding = (projectContributions: number) => {
    const sqrtSum = projects.reduce((sum, project) => sum + Math.sqrt(project.contributions), 0);
    return (Math.sqrt(projectContributions) / sqrtSum) * matchingPool;
  };

  return (
    <div className=" bg-gray-100 py-1 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <div className="p-6 bg-blue-200 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-2">You are eligible to claim Refugee MicroFinance 2024 July project</h2>
  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Claim</button>
</div>
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Quadratic Funding Projects</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {projects.map((project) => (
              <li key={project.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-medium text-indigo-600 truncate">{project.name}</h2>
                    <p className="mt-1 text-sm text-gray-500">{project.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleContribute(project.id, -1)}
                      className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <span className="text-lg font-medium text-gray-900">${project.contributions} ETH</span>
                    <button
                      onClick={() => handleContribute(project.id, 1)}
                      className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">
                    Matched funding: ${calculateMatchedFunding(project.contributions).toFixed(2)} ETH
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 text-right">
          <p className="text-lg font-medium text-gray-900">Total Contributions: ${totalContributions} ETH</p>
          <p className="text-lg font-medium text-gray-900">Matching Pool: ${matchingPool} ETH</p>
        </div>
      </div>
    </div>
  );
};

export default QuadraticFunding;