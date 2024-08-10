import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

interface Initiative {
  id: number;
  name: string;
  description: string;
  impact: string;
  fundingGoal: number;
  currentFunding: number;
}

const initiatives: Initiative[] = [
  {
    id: 1,
    name: "Refugee Microfinance Network",
    description: "Provides microloans to refugee entrepreneurs to start sustainable businesses.",
    impact: "Helped 500 refugee families achieve financial independence",
    fundingGoal: 100000,
    currentFunding: 75000,
  },
  {
    id: 2,
    name: "Eco-Refugee Housing Project",
    description: "Builds sustainable, eco-friendly housing for refugee communities.",
    impact: "Housed 200 families in green, self-sustaining communities",
    fundingGoal: 500000,
    currentFunding: 350000,
  },
  {
    id: 3,
    name: "Refugee Skill-Share Platform",
    description: "A decentralized platform for refugees to share skills and earn cryptocurrency.",
    impact: "Connected 1000+ refugees with remote work opportunities",
    fundingGoal: 200000,
    currentFunding: 150000,
  },
  {
    id: 4,
    name: "Clean Water DAOfund",
    description: "A DAO-managed fund investing in clean water projects for refugee camps.",
    impact: "Provided clean water to 10 refugee camps, serving 50,000 people",
    fundingGoal: 1000000,
    currentFunding: 750000,
  },
];

const ReFiForRefugees: React.FC = () => {
  const [expandedInitiative, setExpandedInitiative] = useState<number | null>(null);

  const toggleInitiative = (id: number) => {
    setExpandedInitiative(expandedInitiative === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Regenerative Finance for Refugees</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Supporting refugee communities through sustainable, impactful financial initiatives.
        </p>
        
        <div className="space-y-6">
          {initiatives.map((initiative) => (
            <div key={initiative.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center cursor-pointer" onClick={() => toggleInitiative(initiative.id)}>
                <h3 className="text-lg leading-6 font-medium text-gray-900">{initiative.name}</h3>
                {expandedInitiative === initiative.id ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                )}
              </div>
              {expandedInitiative === initiative.id && (
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Description</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{initiative.description}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Impact</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{initiative.impact}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Funding Progress</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mr-4">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(initiative.currentFunding / initiative.fundingGoal) * 100}%` }}></div>
                          </div>
                          <span>${initiative.currentFunding.toLocaleString()}  ETH / ${initiative.fundingGoal.toLocaleString()} ETH</span>
                        </div>
                      </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Support This Initiative</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Contribute
                        </button>
                      </dd>
                    </div>
                  </dl>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReFiForRefugees;