
export default function Architecture() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Proposed Architecture</h1>
      
      <div className="space-y-8">
        <section className="mb-8">
          <img
            src="https://d2908q01vomqb2.cloudfront.net/fe2ef495a1152561572949784c16bf23abb28057/2020/02/05/Screen-Shot-2020-01-08-at-5.55.15-PM.png"
            alt="AWS Architecture Diagram"
            className="w-full rounded-lg shadow-lg mb-6"
          />
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Pipeline Overview</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>Our proposed CI/CD pipeline leverages modern AWS services and best practices to ensure reliable, automated deployments.</p>
            
            <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Components</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>GitHub Actions for CI/CD automation</li>
                <li>AWS ECS for containerized workloads</li>
                <li>AWS Lambda for serverless functions</li>
                <li>Terraform for infrastructure as code</li>
                <li>AWS Secrets Manager for secure configuration</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Implementation Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Deployment Strategy</h3>
              <p>Implementation of blue-green deployments using AWS ECS for zero-downtime updates.</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Security & Monitoring</h3>
              <p>Integration with New Relic and Mezmo for comprehensive observability.</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Download Detailed Architecture Slides</h2>
            <p className="mb-4">Get our comprehensive architecture documentation and implementation plan.</p>
            <a 
              href="https://pflegia-slides.s3.us-east-1.amazonaws.com/aws-overview.pdf" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Slides (PDF)
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
