
export default function Infrastructure() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Current Infrastructure</h1>
      
      <div className="space-y-8">
        <section className="mb-8">
          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Current Environment Overview</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our infrastructure is currently distributed across Heroku and AWS, with plans to consolidate on AWS
              to optimize costs and improve deployment automation. This migration presents an opportunity to implement
              modern DevOps practices and enhance our operational efficiency.
            </p>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Current Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Cloud Services</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>API/Backend on AWS and Heroku</li>
                <li>Frontend on Vercel</li>
                <li>ECS, AWS AppRunner, AWS Lambda</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Development Tools</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>GitHub Actions for CI/CD</li>
                <li>Nx for Monorepo Management</li>
                <li>Nest.js (GraphQL API)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Pain Points</h2>
          <div className="space-y-4">
            <div className="p-4 border border-red-200 dark:border-red-900 rounded-lg bg-red-50 dark:bg-red-900/20">
              <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">Manual Production Deployments</h3>
              <p className="text-red-600 dark:text-red-300">Current process lacks full automation, leading to potential human errors and inefficiencies.</p>
            </div>
            <div className="p-4 border border-red-200 dark:border-red-900 rounded-lg bg-red-50 dark:bg-red-900/20">
              <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">No Blue-Green Deployments</h3>
              <p className="text-red-600 dark:text-red-300">Lack of zero-downtime deployment strategy impacts service availability during updates.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
