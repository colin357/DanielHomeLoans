import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Calculator Arkansas - Calculate Your Monthly Payment | Daniel Fowler",
  description: "Use our Arkansas mortgage calculator to estimate your monthly payment. Get accurate calculations including property taxes, insurance, and HOA fees for Arkansas homes.",
  keywords: "mortgage calculator arkansas, arkansas mortgage calculator, home loan calculator arkansas, arkansas home payment calculator, mortgage payment calculator arkansas",
};

export default function MortgageCalculatorArkansas() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary-green/5 via-emerald-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <Link href="/" className="text-primary-green hover:text-emerald-600 font-medium">
              ← Back to Home
            </Link>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mortgage Calculator Arkansas: Estimate Your Monthly Payment
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By Daniel Fowler</span>
            <span>•</span>
            <span>Licensed in Arkansas</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Calculating your monthly mortgage payment is the first step toward homeownership in Arkansas. Understanding what you can afford helps you shop with confidence in one of America's most affordable housing markets. In this comprehensive guide, I'll walk you through everything that goes into your monthly payment with Arkansas-specific insights.
          </p>

          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Your Personalized Payment Quote</h3>
            <p className="text-gray-700 mb-4">
              Ready to see exactly what your monthly payment would be? Contact me for a detailed breakdown based on current Arkansas rates and your specific situation.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary-green hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Contact Daniel Today
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Your Mortgage Payment Components</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Property Taxes in Arkansas</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Arkansas has some of the lowest property tax rates in the nation. The effective property tax rate in Arkansas is approximately 0.61% of a home's assessed value. Here's what that means for various home prices:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Annual Property Tax Estimates</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• $150,000 home: ~$915/year ($76/month)</li>
              <li>• $170,000 home: ~$1,037/year ($86/month)</li>
              <li>• $215,000 home: ~$1,312/year ($109/month)</li>
              <li>• $275,000 home: ~$1,678/year ($140/month)</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Property taxes vary by county in Arkansas. For example:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Pulaski County (Little Rock):</strong> Average rate around 0.64%</li>
            <li><strong>Washington County (Fayetteville):</strong> Average rate around 0.68%</li>
            <li><strong>Sebastian County (Fort Smith):</strong> Average rate around 0.57%</li>
            <li><strong>Benton County:</strong> Average rate around 0.72%</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Homeowners Insurance</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Arkansas homeowners insurance costs are moderate, with the average annual premium around $1,600-$2,000, or about $133-$167 per month. Rates vary based on location, home value, and coverage.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Arkansas Home Price Overview</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Arkansas Median Home Prices</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Statewide Median:</strong> $170,000</li>
              <li>• <strong>Little Rock:</strong> $215,000</li>
              <li>• <strong>Fayetteville:</strong> $275,000</li>
              <li>• <strong>Fort Smith:</strong> $165,000</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Arkansas offers exceptional affordability compared to most of the nation, with low property taxes making homeownership even more accessible for families.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">See Your Exact Payment</h3>
            <p className="text-gray-700 mb-4">
              Every buyer's situation is unique. Let me calculate your specific monthly payment based on current rates, your credit profile, and down payment amount.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Get Your Custom Quote
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sample Payment Calculations for Arkansas</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Let's look at realistic payment examples for Arkansas home prices. These calculations assume:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>7% interest rate (rates vary based on credit and market conditions)</li>
            <li>30-year fixed mortgage</li>
            <li>0.61% property tax rate</li>
            <li>$140/month homeowners insurance</li>
          </ul>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">$170,000 Home with 10% Down ($17,000)</h4>
            <p className="text-gray-600 mb-2">Loan Amount: $153,000</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Principal & Interest: $1,018/month</li>
              <li>• Property Taxes: $86/month</li>
              <li>• Homeowners Insurance: $140/month</li>
              <li>• PMI: $115/month</li>
              <li className="font-bold text-primary-green pt-2">• <strong>Total Monthly Payment: $1,359</strong></li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">$215,000 Home with 20% Down ($43,000)</h4>
            <p className="text-gray-600 mb-2">Loan Amount: $172,000</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Principal & Interest: $1,144/month</li>
              <li>• Property Taxes: $109/month</li>
              <li>• Homeowners Insurance: $150/month</li>
              <li>• PMI: $0 (20% down = no PMI)</li>
              <li className="font-bold text-primary-green pt-2">• <strong>Total Monthly Payment: $1,403</strong></li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">$165,000 Home with 5% Down ($8,250)</h4>
            <p className="text-gray-600 mb-2">Loan Amount: $156,750</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Principal & Interest: $1,043/month</li>
              <li>• Property Taxes: $84/month</li>
              <li>• Homeowners Insurance: $135/month</li>
              <li>• PMI: $118/month</li>
              <li className="font-bold text-primary-green pt-2">• <strong>Total Monthly Payment: $1,380</strong></li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How Much Can You Afford in Arkansas?</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Front-End Ratio (Housing Ratio)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your total housing payment (PITI) should not exceed 28% of your gross monthly income. For example:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>$40,000 annual income ($3,333/month): Maximum $933/month housing payment</li>
            <li>$60,000 annual income ($5,000/month): Maximum $1,400/month housing payment</li>
            <li>$80,000 annual income ($6,667/month): Maximum $1,867/month housing payment</li>
          </ul>

          <div className="bg-gradient-to-r from-primary-green to-emerald-600 text-white p-8 rounded-lg my-12 not-prose">
            <h3 className="text-2xl font-bold mb-4">Let's Calculate Your Exact Arkansas Mortgage Payment</h3>
            <p className="text-lg mb-6">
              As a licensed mortgage professional serving Arkansas, I'll provide you with accurate payment calculations based on current rates, your credit profile, and the specific home you're considering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-primary-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Get Your Payment Quote
              </Link>
              <Link
                href="/articles/fha-loan-arkansas"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Learn About FHA Loans
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is the average mortgage payment in Arkansas?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The average monthly mortgage payment in Arkansas is approximately $1,100-$1,400, significantly lower than the national average, reflecting Arkansas's affordable housing market and low property taxes.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How much income do I need to buy a house in Arkansas?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            For Arkansas's median home price of $170,000 with 10% down, you'd need approximately $40,000-$45,000 in annual household income to qualify comfortably.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How do Arkansas property taxes compare to other states?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Arkansas's effective property tax rate of 0.61% is well below the national average of 1.07%, making it one of the most affordable states for property ownership.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Work With a Local Arkansas Mortgage Expert</h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            <Link href="/#contact" className="text-primary-green hover:text-emerald-600 font-bold">
              Contact me today
            </Link> to get started with your Arkansas home purchase. Let's turn your homeownership dreams into reality.
          </p>
        </div>
      </article>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Arkansas Mortgage Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/articles/fha-loan-arkansas" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FHA Loans in Arkansas</h3>
              <p className="text-gray-600 mb-4">Learn about FHA loan requirements and benefits for Arkansas homebuyers.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/va-loan-arkansas" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">VA Loans in Arkansas</h3>
              <p className="text-gray-600 mb-4">Explore VA loan benefits for veterans and military members in Arkansas.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/down-payment-assistance-arkansas" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Down Payment Assistance Arkansas</h3>
              <p className="text-gray-600 mb-4">Discover programs that help Arkansas first-time homebuyers with down payments.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
