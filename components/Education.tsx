import Head from 'next/head'
import { useState } from 'react'

export default function Education() {
  const [selectedLanguage, setSelectedLanguage] = useState('English')

  const educationalResources = [
    { title: 'Basic Language Skills', level: 'Beginner', type: 'Course' },
    { title: 'Mathematics Fundamentals', level: 'Intermediate', type: 'Workshop' },
    { title: 'Introduction to Coding', level: 'Beginner', type: 'Tutorial' },
    { title: 'Local Culture and Customs', level: 'All Levels', type: 'Guide' },
    { title: 'Job Interview Preparation', level: 'Advanced', type: 'Course' },
    { title: 'Health and Wellness', level: 'All Levels', type: 'Workshop' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 ml-20">
      <div className="max-w-4xl mx-auto">
      <Head>
        <title>Refugee Educational Support</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white">
          <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Educational Support for Refugees</h1>
            <p className="text-xl mb-8">Empowering through knowledge and skills development</p>
            <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100">
              Start Learning
            </button>
          </div>
        </section>

        {/* Educational Resources Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Educational Resources</h2>
            
            {/* Language Selector */}
            <div className="mb-6 text-center">
              <label htmlFor="language" className="mr-2">Select Language:</label>
              <select 
                id="language" 
                value={selectedLanguage} 
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="border rounded p-2"
              >
                <option>English</option>
                <option>Arabic</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
            </div>

            {/* Resource Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {educationalResources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 RefugeeEdu. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  )
}

function ResourceCard({ title, level, type }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">Level: {level}</p>
      <p className="text-gray-600 mb-4">Type: {type}</p>
      <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
        Access Resource
      </button>
    </div>
  )
}