import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 ml-20">
      <div className="max-w-4xl mx-auto">
      <Head>
        <title>Refugee Support Initiative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white">
          <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Supporting Refugees Worldwide</h1>
            <p className="text-xl mb-8">Join our initiative to provide aid and resources to those in need.</p>
            <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100">
              Get Involved
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="Emergency Aid"
                description="Providing immediate assistance to refugees in crisis situations."
                icon="🚑"
              />
              <FeatureCard 
                title="Education Support"
                description="Offering educational resources and programs for refugee children."
                icon="📚"
              />
              <FeatureCard 
                title="Job Training"
                description="Helping refugees develop skills for employment opportunities."
                icon="💼"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Refugee Support Initiative. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  )
}

function FeatureCard({ title, description, icon }: {title: string, description: string, icon: string}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}