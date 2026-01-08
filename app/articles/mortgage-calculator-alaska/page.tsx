import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Calculator Alaska - Calculate Your Monthly Payment | Daniel Fowler",
  description: "Use our Alaska mortgage calculator to estimate your monthly payment. Get accurate calculations including property taxes, insurance, and HOA fees for Alaska homes.",
  keywords: "mortgage calculator alaska, alaska mortgage calculator, home loan calculator alaska, alaska home payment calculator, mortgage payment calculator alaska",
};

export default function MortgageCalculatorAlaska() {
  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="bg-gradient-to-br from-primary-green/5 via-emerald-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <Link href="/" className="text-primary-green hover:text-emerald-600 font-medium">
              ← Back to Home
            </Link>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mortgage Calculator Alaska: Estimate Your Monthly Payment
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By Daniel Fowler</span>
            <span>•</span>
            <span>Licensed in Alaska</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Calculating your monthly mortgage payment is the first step toward homeownership in Alaska. Understanding what you can afford helps you shop with confidence in Alaska's unique housing market, where higher home prices and special considerations like cold weather and remote location factor into your decision. In this comprehensive guide, I'll walk you through everything that goes into your monthly payment with Alaska-specific insights.
          </p>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Your Personalized Payment Quote</h3>
            <p className="text-gray-700 mb-4">
              Ready to see exactly what your monthly payment would be? Contact me for a detailed breakdown based on current Alaska rates and your specific situation.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary-green hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Contact Daniel Today
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Your Mortgage Payment Components</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Your monthly mortgage payment consists of several components, commonly referred to as PITI:
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Principal and Interest</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The principal is the amount you borrowed, while interest is what the lender charges for lending you money. In the early years of your mortgage, most of your payment goes toward interest. As you pay down the loan, more goes toward principal, helping you build equity faster.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Property Taxes in Alaska</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Alaska has moderate property tax rates compared to the national average. The effective property tax rate in Alaska is approximately 1.04% of a home's assessed value. Here's what that means for various home prices:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Annual Property Tax Estimates</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• $285,000 home: ~$2,964/year ($247/month)</li>
              <li>• $350,000 home: ~$3,640/year ($303/month)</li>
              <li>• $425,000 home: ~$4,420/year ($368/month)</li>
              <li>• $465,000 home: ~$4,836/year ($403/month)</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Property taxes vary by borough in Alaska. For example:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Anchorage Municipality:</strong> Average rate around 1.19%</li>
            <li><strong>Fairbanks North Star Borough:</strong> Average rate around 1.09%</li>
            <li><strong>Juneau Borough:</strong> Average rate around 1.08%</li>
            <li><strong>Matanuska-Susitna Borough:</strong> Average rate around 0.82%</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Homeowners Insurance</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Alaska homeowners insurance costs are higher than the national average due to harsh weather conditions, remote location, and potential for extreme cold damage. The average annual premium in Alaska is approximately $1,200-$1,800, or about $100-$150 per month.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Factors affecting your insurance cost include:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Home's location and accessibility</li>
            <li>Age and condition of the home</li>
            <li>Construction materials (important for cold weather)</li>
            <li>Coverage amount and deductible</li>
            <li>Distance from fire protection</li>
            <li>Credit score</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Private Mortgage Insurance (PMI)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you put down less than 20% on a conventional loan, you'll pay PMI, which protects the lender if you default. PMI typically costs 0.5% to 1.5% of the original loan amount per year. For example:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>$300,000 loan: $125-$375/month in PMI</li>
            <li>$350,000 loan: $146-$438/month in PMI</li>
            <li>$400,000 loan: $167-$500/month in PMI</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            The good news: PMI can be removed once you reach 20% equity in your home, either through payments or appreciation.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">HOA Fees</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you're buying in a community with a homeowners association, monthly or annual fees will be added to your housing costs. In Alaska, HOA fees typically range from $100-$500/month depending on the amenities offered and snow removal services.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Alaska Home Price Overview</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Understanding Alaska's housing market helps you set realistic expectations:
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Alaska Median Home Prices</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Statewide Median:</strong> $350,000</li>
              <li>• <strong>Anchorage:</strong> $425,000</li>
              <li>• <strong>Fairbanks:</strong> $285,000</li>
              <li>• <strong>Juneau:</strong> $465,000</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Alaska has some of the highest home prices in the nation, driven by remote location, limited inventory, and high construction costs. However, the state offers unique lifestyle benefits and no state income tax.
          </p>

          {/* CTA Box */}
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

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sample Payment Calculations for Alaska</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Let's look at realistic payment examples for various Alaska home prices. These calculations assume:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>7% interest rate (rates vary based on credit and market conditions)</li>
            <li>30-year fixed mortgage</li>
            <li>1.04% property tax rate</li>
            <li>$125/month homeowners insurance</li>
          </ul>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">$350,000 Home with 10% Down ($35,000)</h4>
            <p className="text-gray-600 mb-2">Loan Amount: $315,000</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Principal & Interest: $2,095/month</li>
              <li>• Property Taxes: $303/month</li>
              <li>• Homeowners Insurance: $125/month</li>
              <li>• PMI: $236/month</li>
              <li className="font-bold text-primary-green pt-2">• <strong>Total Monthly Payment: $2,759</strong></li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">$425,000 Home with 20% Down ($85,000)</h4>
            <p className="text-gray-600 mb-2">Loan Amount: $340,000</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Principal & Interest: $2,261/month</li>
              <li>• Property Taxes: $368/month</li>
              <li>• Homeowners Insurance: $150/month</li>
              <li>• PMI: $0 (20% down = no PMI)</li>
              <li className="font-bold text-primary-green pt-2">• <strong>Total Monthly Payment: $2,779</strong></li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">$285,000 Home with 5% Down ($14,250)</h4>
            <p className="text-gray-600 mb-2">Loan Amount: $270,750</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Principal & Interest: $1,801/month</li>
              <li>• Property Taxes: $247/month</li>
              <li>• Homeowners Insurance: $110/month</li>
              <li>• PMI: $203/month</li>
              <li className="font-bold text-primary-green pt-2">• <strong>Total Monthly Payment: $2,361</strong></li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Factors That Affect Your Payment</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Credit Score</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your credit score significantly impacts your interest rate. Here's how rates typically vary:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>760+:</strong> Best rates available</li>
            <li><strong>700-759:</strong> Slightly higher rates</li>
            <li><strong>680-699:</strong> Moderately higher rates</li>
            <li><strong>660-679:</strong> Higher rates</li>
            <li><strong>640-659:</strong> Significantly higher rates</li>
            <li><strong>620-639:</strong> Highest conventional loan rates</li>
            <li><strong>Below 620:</strong> May need FHA or other programs</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Down Payment Amount</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your down payment affects your monthly payment in three ways:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Loan amount:</strong> Larger down payment = smaller loan = lower payment</li>
            <li><strong>PMI:</strong> 20%+ down payment eliminates PMI entirely</li>
            <li><strong>Interest rate:</strong> Larger down payments sometimes qualify for better rates</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Loan Term</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            While 30-year mortgages are most common, you can choose different terms:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>15-year:</strong> Higher monthly payment, much lower total interest</li>
            <li><strong>20-year:</strong> Middle ground between 15 and 30-year</li>
            <li><strong>30-year:</strong> Lowest monthly payment, highest total interest</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Loan Type</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Different loan programs have different costs:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Conventional:</strong> Competitive rates, requires PMI below 20% down</li>
            <li><strong>FHA:</strong> Lower credit requirements, requires mortgage insurance</li>
            <li><strong>VA:</strong> No down payment, no PMI (for eligible veterans)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How Much Can You Afford in Alaska?</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Lenders typically use two key ratios to determine how much you can borrow:
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Front-End Ratio (Housing Ratio)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your total housing payment (PITI) should not exceed 28% of your gross monthly income. For example:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>$75,000 annual income ($6,250/month): Maximum $1,750/month housing payment</li>
            <li>$100,000 annual income ($8,333/month): Maximum $2,333/month housing payment</li>
            <li>$125,000 annual income ($10,417/month): Maximum $2,917/month housing payment</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Back-End Ratio (Total Debt Ratio)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your total monthly debt payments (including housing, car loans, credit cards, student loans) should not exceed 43% of gross monthly income (some programs allow up to 50%).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tips for Lowering Your Monthly Payment</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Improve Your Credit Score</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Even a small credit score improvement can save you thousands. Pay down credit cards, make all payments on time, and dispute any errors on your credit report.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Increase Your Down Payment</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every additional dollar toward your down payment reduces your loan amount and monthly payment. Hitting 20% eliminates PMI entirely.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Shop Insurance Rates</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Alaska homeowners insurance varies significantly between carriers. Get quotes from at least 3-5 companies and consider higher deductibles to lower premiums.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Consider Different Loan Programs</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            VA loans (for veterans) eliminate PMI entirely. FHA loans offer low down payments and flexible credit requirements.
          </p>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-primary-green to-emerald-600 text-white p-8 rounded-lg my-12 not-prose">
            <h3 className="text-2xl font-bold mb-4">Let's Calculate Your Exact Alaska Mortgage Payment</h3>
            <p className="text-lg mb-6">
              As a licensed mortgage professional serving Alaska, I'll provide you with accurate payment calculations based on current rates, your credit profile, and the specific home you're considering. No guesswork—just real numbers you can count on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-primary-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Get Your Payment Quote
              </Link>
              <Link
                href="/articles/fha-loan-alaska"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Learn About FHA Loans
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is the average mortgage payment in Alaska?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The average monthly mortgage payment in Alaska is approximately $2,200-$2,800, higher than the national average due to Alaska's elevated home prices and unique market conditions.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How much income do I need to buy a house in Alaska?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            For Alaska's median home price of $350,000 with 10% down, you'd need approximately $90,000-$95,000 in annual household income to qualify comfortably.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Are property taxes included in my mortgage payment?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most lenders require you to pay property taxes through an escrow account, meaning they're included in your monthly mortgage payment. The lender collects these funds monthly and pays your property taxes annually on your behalf.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can I get a mortgage with less than 20% down in Alaska?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Absolutely! Conventional loans allow as little as 3% down, FHA loans require 3.5% down, and VA loans offer zero down payment options for eligible buyers. You'll pay PMI with less than 20% down on conventional loans, but it's often worth it to get into a home sooner.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How do Alaska property taxes compare to other states?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Alaska's effective property tax rate of 1.04% is close to the national average of 1.07%. However, Alaska has no state income tax, which significantly reduces the overall tax burden on homeowners.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Work With a Local Alaska Mortgage Expert</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Calculators provide estimates, but working with a licensed mortgage professional gives you precise numbers based on current market conditions and your unique situation. I'll help you understand all your options, compare different scenarios, and find the best path to homeownership in Alaska.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            <Link href="/#contact" className="text-primary-green hover:text-emerald-600 font-bold">
              Contact me today
            </Link> to get started with your Alaska home purchase. Let's turn your homeownership dreams into reality.
          </p>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Alaska Mortgage Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/articles/fha-loan-alaska" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FHA Loans in Alaska</h3>
              <p className="text-gray-600 mb-4">Learn about FHA loan requirements and benefits for Alaska homebuyers.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/va-loan-alaska" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">VA Loans in Alaska</h3>
              <p className="text-gray-600 mb-4">Explore VA loan benefits for veterans and military members in Alaska.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/down-payment-assistance-alaska" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Down Payment Assistance Alaska</h3>
              <p className="text-gray-600 mb-4">Discover programs that help Alaska first-time homebuyers with down payments.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
