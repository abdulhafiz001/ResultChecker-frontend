import React from 'react';

const ReferEarn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Refer & Earn
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share the power of TermResult with your network and earn rewards while helping others succeed
          </p>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Your Link</h3>
              <p className="text-gray-600">
                Get your unique referral link and share it with friends, family, and colleagues
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">They Sign Up</h3>
              <p className="text-gray-600">
                When someone uses your link to register, they get started with TermResult
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Earn Rewards</h3>
              <p className="text-gray-600">
                Receive exclusive benefits and rewards for every successful referral
              </p>
            </div>
          </div>
        </div>

        {/* Referral Link Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Your Referral Link
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <input
                type="text"
                value="https://termresult.com/school/register"
                readOnly
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Copy
              </button>
            </div>
            <p className="text-sm text-gray-500 text-center">
              Share this link with others to start earning rewards
            </p>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Referral Rewards
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-700 font-medium">Free Reports</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">20%</div>
              <div className="text-gray-700 font-medium">Discount</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">Premium</div>
              <div className="text-gray-700 font-medium">Features</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">VIP</div>
              <div className="text-gray-700 font-medium">Support</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Your Referral Stats
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">0</div>
              <div className="text-gray-600">Total Referrals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">0</div>
              <div className="text-gray-600">Successful Signups</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">0</div>
              <div className="text-gray-600">Rewards Earned</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Referring?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who are already earning rewards by sharing TermResult
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferEarn;
