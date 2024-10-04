import React from "react";
import {
  BiGlobe,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiMailSend,
  BiPhone,
} from "react-icons/bi";

const Contacts = () => (
  <div className="min-h-screen">
    <div className="max-w-md mx-auto">
      <h2 className="text-primary text-lg font-semibold font-mono mb-6">
        Investor Relations
      </h2>

      <div className="bg-emerald-700 rounded-lg p-6 mb-6">
        <h2 className="text-primary text-lg font-semibold font-mono mb-3">
          Contact Information
        </h2>

        <div className="space-y-4">
          <div className="flex items-center">
            <BiPhone className="w-6 h-6 mr-3 text-success" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-emerald-300">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center">
            <BiMailSend className="w-6 h-6 mr-3 text-success" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-emerald-300">investors@company.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <BiGlobe className="w-6 h-6 mr-3 text-success" />
            <div>
              <p className="font-medium">Website</p>
              <p className="text-emerald-300">www.company.com/investors</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-700 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Social Media</h2>

        <div className="space-y-4">
          <div className="flex items-center">
            <BiLogoLinkedin className="w-6 h-6 mr-3 text-success" />
            <p className="text-emerald-300">linkedin.com/company/ourcompany</p>
          </div>

          <div className="flex items-center">
            <BiLogoTwitter className="w-6 h-6 mr-3 text-success" />
            <p className="text-emerald-300">@OurCompanyIR</p>
          </div>
        </div>
      </div>

      <div className="bg-emerald-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Investor Resources</h2>

        <ul className="list-disc list-inside space-y-2 text-emerald-300">
          <li>Annual Reports</li>
          <li>Quarterly Earnings</li>
          <li>SEC Filings</li>
          <li>Corporate Governance</li>
          <li>Stock Information</li>
        </ul>
      </div>

      <button
        type="button"
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-full mt-6 transition duration-200"
      >
        Schedule a Call
      </button>

      <p className="text-center text-xs text-success mt-4">
        For urgent inquiries, please contact our Investor Relations hotline at
        +1 (800) 555-1234
      </p>
    </div>
  </div>
);

export default Contacts;
