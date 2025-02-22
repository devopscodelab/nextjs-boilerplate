
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-50 dark:from-background dark:to-gray-900">
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Cloud Engineering Assessment</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive AWS Migration & CI/CD Pipeline Implementation 2025
          </p>
        </div>

        <section className="mb-16 max-w-4xl mx-auto">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              This technical assessment demonstrates the design and implementation of a modern cloud infrastructure migration strategy. 
              The project focuses on transitioning a distributed application stack from legacy hosting to a fully automated AWS cloud environment, 
              implementing industry best practices and DevOps methodologies.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="mb-4">
                The migration encompasses a complete infrastructure overhaul, including the implementation of automated CI/CD pipelines, 
                containerized applications, and serverless architectures. Key focus areas include high availability, scalability, 
                security, and operational efficiency.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Infrastructure as Code using Terraform for automated resource provisioning</li>
                <li>Containerization strategy with AWS ECS and ECR</li>
                <li>Blue-green deployment implementation for zero-downtime updates</li>
                <li>Comprehensive monitoring and logging solutions</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Technical Highlights</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Multi-region deployment architecture for improved latency and redundancy</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Automated security scanning and compliance checks in CI/CD pipeline</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Cost optimization through resource right-sizing and auto-scaling policies</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Integrated secrets management and role-based access control</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card
            title="Current Infrastructure"
            description="Detailed analysis of existing setup and identified optimization opportunities"
            link="/infrastructure"
          />
          <Card
            title="Proposed Architecture"
            description="Comprehensive CI/CD pipeline design with AWS best practices"
            link="/architecture"
          />
          <Card
            title="Migration Strategy"
            description="Phased implementation plan with risk mitigation strategies"
            link="/strategy"
          />
        </div>

        <section className="mt-16 mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm max-w-md mx-auto">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For inquiries about this cloud engineering assessment, please reach out at:
            </p>
            <a href="mailto:oguzhanilkanboran@gmail.com" className="text-blue-500 hover:text-blue-600 font-semibold">
              emailme
            </a>
          </div>
        </section>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-8">Core Technologies & Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "AWS ECS",
              "GitHub Actions",
              "Terraform",
              "Lambda",
              "CloudWatch",
              "Route53",
              "ELB",
              "RDS",
              "CloudFront",
              "S3"
            ].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function Card({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Link href={link} className="block group">
      <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </Link>
  );
}
