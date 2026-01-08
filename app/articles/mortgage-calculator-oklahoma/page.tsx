import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Calculator Oklahoma - Calculate Your Monthly Payment | Daniel Fowler",
  description: "Use our Oklahoma mortgage calculator to estimate your monthly payment. Get accurate calculations including property taxes, insurance, and HOA fees for Oklahoma homes.",
  keywords: "mortgage calculator oklahoma, oklahoma mortgage calculator, home loan calculator oklahoma, oklahoma home payment calculator, mortgage payment calculator oklahoma",
};

export default function MortgageCalculatorOklahoma() {
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
            Mortgage Calculator Oklahoma: Estimate Your Monthly Payment
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By Daniel Fowler</span>
            <span>•</span>
            <span>Licensed in Oklahoma</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Calculating your monthly mortgage payment is the first step toward homeownership in Oklahoma. Understanding what you can afford helps you shop with confidence and avoid stretching your budget too thin. In this comprehensive guide, I'll walk you through everything that goes into your monthly payment and provide Oklahoma-specific insights to help you plan your home purchase.
          </p>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Your Personalized Payment Quote</h3>
            <p className="text-gray-700 mb-4">
              Ready to see exactly what your monthly payment would be? Contact me for a detailed breakdown based on current Oklahoma rates and your specific situation.
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

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Property Taxes in Oklahoma</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Oklahoma has relatively affordable property tax rates compared to the national average. The effective property tax rate in Oklahoma is approximately 0.87% of a home's assessed value. Here's what that means for various home prices:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Annual Property Tax Estimates</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• $150,000 home: ~$1,305/year ($109/month)</li>
              <li>• $200,000 home: ~$1,740/year ($145/month)</li>
              <li>• $250,000 home: ~$2,175/year ($181/month)</li>
              <li>• $300,000 home: ~$2,610/year ($218/month)</li>
              <li>• $400,000 home: ~$3,480/year ($290/month)</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Property taxes vary by county and city in Oklahoma. For example:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Oklahoma County:</strong> Average rate around 1.02%</li>
            <li><strong>Tulsa County:</strong> Average rate around 1.07%</li>
            <li><strong>Cleveland County:</strong> Average rate around 0.94%</li>
            <li><strong>Canadian County:</strong> Average rate around 0.89%</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Homeowners Insurance</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Oklahoma homeowners insurance costs are higher than the national average, primarily due to the state's severe weather risk (tornadoes, hail, and wind storms). The average annual premium in Oklahoma is approximately $2,900-$3,500, or about $240-$290 per month.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Factors affecting your insurance cost include:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Home's location and proximity to fire stations</li>
            <li>Age and condition of the home</li>
            <li>Construction materials (brick vs. wood frame)</li>
            <li>Coverage amount and deductible</li>
            <li>Claims history</li>
            <li>Credit score</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Private Mortgage Insurance (PMI)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you put down less than 20% on a conventional loan, you'll pay PMI, which protects the lender if you default. PMI typically costs 0.5% to 1.5% of the original loan amount per year. For example:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>$200,000 loan: $83-$250/month in PMI</li>
            <li>$300,000 loan: $125-$375/month in PMI</li>
            <li>$400,000 loan: $167-$500/month in PMI</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            The good news: PMI can be removed once you reach 20% equity in your home, either through payments or appreciation.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">HOA Fees</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you're buying in a community with a homeowners association, monthly or annual fees will be added to your housing costs. In Oklahoma, HOA fees typically range from $50-$400/month depending on the amenities offered (pools, landscaping, security, etc.).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Oklahoma Home Price Overview</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Understanding Oklahoma's housing market helps you set realistic expectations:
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Oklahoma Median Home Prices</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Statewide Median:</strong> $193,500</li>
              <li>• <strong>Oklahoma City Metro:</strong> $225,000</li>
              <li>• <strong>Tulsa Metro:</strong> $210,000</li>
              <li>• <strong>Edmond:</strong> $325,000</li>
              <li>• <strong>Norman:</strong> $285,000</li>
              <li>• <strong>Broken Arrow:</strong> $265,000</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Oklahoma offers excellent affordability compared to coastal markets, making homeownership accessible for many families.
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

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sample Payment Calculations for Oklahoma</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Let's look at realistic payment examples for various Oklahoma home prices. These calculations assume:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>7% interest rate (rates vary based on credit and market conditions)</li>
            <li>30-year fixed mortgage</li>
            <li>0.87% property tax rate</li>
            <li>$250/month homeowners insurance</li>
          </ul>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">$200,000 Home with 10% Down ($20,000)</h4>
            <p className="text-gray-600 mb-2">Loan Amount: $180,000</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Principal & Interest: $1,197/month</li>
              <li>• Property Taxes: $145/month</li>
              <li>• Homeowners Insurance: $250/month</li>
              <li>• PMI: $135/month</li>
              <li className="font-bold text-primary-green pt-2">• <strong>Total Monthly Payment: $1,727</strong></li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">$250,000 Home with 20% Down ($50,000)</h4>
            <p className="text-gray-600 mb-2">Loan Amount: $200,000</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Principal & Interest: $1,331/month</li>
              <li>• Property Taxes: $181/month</li>
              <li>• Homeowners Insurance: $270/month</li>
              <li>• PMI: $0 (20% down = no PMI)</li>
              <li className="font-bold text-primary-green pt-2">• <strong>Total Monthly Payment: $1,782</strong></li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">$300,000 Home with 5% Down ($15,000)</h4>
            <p className="text-gray-600 mb-2">Loan Amount: $285,000</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Principal & Interest: $1,896/month</li>
              <li>• Property Taxes: $218/month</li>
              <li>• Homeowners Insurance: $290/month</li>
              <li>• PMI: $214/month</li>
              <li className="font-bold text-primary-green pt-2">• <strong>Total Monthly Payment: $2,618</strong></li>
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
            <li><strong>USDA:</strong> No down payment for rural areas, requires guarantee fee</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How Much Can You Afford in Oklahoma?</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Lenders typically use two key ratios to determine how much you can borrow:
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Front-End Ratio (Housing Ratio)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your total housing payment (PITI) should not exceed 28% of your gross monthly income. For example:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>$50,000 annual income ($4,167/month): Maximum $1,167/month housing payment</li>
            <li>$75,000 annual income ($6,250/month): Maximum $1,750/month housing payment</li>
            <li>$100,000 annual income ($8,333/month): Maximum $2,333/month housing payment</li>
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
            Oklahoma homeowners insurance varies significantly between carriers. Get quotes from at least 3-5 companies and consider higher deductibles to lower premiums.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Consider Different Loan Programs</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            VA loans (for veterans) eliminate PMI entirely. FHA loans offer low down payments. USDA loans work for rural Oklahoma properties with no down payment.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Look at Different Areas</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Property taxes and home prices vary significantly across Oklahoma. Expanding your search to nearby cities or counties might yield lower payments.
          </p>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-primary-green to-emerald-600 text-white p-8 rounded-lg my-12 not-prose">
            <h3 className="text-2xl font-bold mb-4">Let's Calculate Your Exact Oklahoma Mortgage Payment</h3>
            <p className="text-lg mb-6">
              As a licensed mortgage professional serving Oklahoma, I'll provide you with accurate payment calculations based on current rates, your credit profile, and the specific home you're considering. No guesswork—just real numbers you can count on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-primary-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Get Your Payment Quote
              </Link>
              <Link
                href="/articles/fha-loan-oklahoma"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Learn About FHA Loans
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is the average mortgage payment in Oklahoma?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The average monthly mortgage payment in Oklahoma is approximately $1,200-$1,500, significantly lower than the national average of $2,000+. This reflects Oklahoma's affordable housing market.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How much income do I need to buy a house in Oklahoma?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            For Oklahoma's median home price of $193,500 with 10% down, you'd need approximately $50,000-$55,000 in annual household income to qualify comfortably. Higher income allows you to afford more expensive homes.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Are property taxes included in my mortgage payment?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most lenders require you to pay property taxes through an escrow account, meaning they're included in your monthly mortgage payment. The lender collects these funds monthly and pays your property taxes annually on your behalf.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can I get a mortgage with less than 20% down in Oklahoma?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Absolutely! Conventional loans allow as little as 3% down, FHA loans require 3.5% down, and VA/USDA loans offer zero down payment options for eligible buyers. You'll pay PMI with less than 20% down on conventional loans, but it's often worth it to get into a home sooner.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How do Oklahoma property taxes compare to other states?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Oklahoma's effective property tax rate of 0.87% is below the national average of 1.07%. This makes Oklahoma one of the more affordable states for property ownership. For comparison, Texas averages 1.69% and Illinois averages 2.08%.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Work With a Local Oklahoma Mortgage Expert</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Calculators provide estimates, but working with a licensed mortgage professional gives you precise numbers based on current market conditions and your unique situation. I'll help you understand all your options, compare different scenarios, and find the best path to homeownership in Oklahoma.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            <Link href="/#contact" className="text-primary-green hover:text-emerald-600 font-bold">
              Contact me today
            </Link> to get started with your Oklahoma home purchase. Let's turn your homeownership dreams into reality.
          </p>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Oklahoma Mortgage Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/articles/fha-loan-oklahoma" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FHA Loans in Oklahoma</h3>
              <p className="text-gray-600 mb-4">Learn about FHA loan requirements and benefits for Oklahoma homebuyers.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/va-loan-oklahoma" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">VA Loans in Oklahoma</h3>
              <p className="text-gray-600 mb-4">Explore VA loan benefits for veterans and military members in Oklahoma.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/down-payment-assistance-oklahoma" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Down Payment Assistance Oklahoma</h3>
              <p className="text-gray-600 mb-4">Discover programs that help Oklahoma first-time homebuyers with down payments.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
