import { Button } from "@/components/ui/button"

export function PricingcompGst() {
  return (
    (<section
      className="min-h-screen w-full py-12 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <div
            className="flex flex-col p-6 shadow-lg rounded-lg justify-between border border-blue-500 dark:border-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-800 duration-300">
            <div>
              <h3 className="text-2xl font-bold text-center">Future & Options Plan</h3>
              <div className="mt-4 text-center">
                <span className="text-4xl font-bold">&#8377;2599</span>/ year
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  F&O Income/Loss(No Audit)
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Speculative Income
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Single & Multiple Employers
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Single & Multiple House Property
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Multiple Capital Gain income
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Business & Professional Income
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Income from Other Sources
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Agriculture Income
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full bg-indigo-500 bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-600 hover:to-green-700">Get Started</Button>
            </div>
          </div>
          <div
            className="relative flex flex-col p-6 shadow-lg rounded-lg  justify-between border  border-purple-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-800 duration-300">
            <div
              className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              NRI
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">NRI/Resident Having Foreign Income</h3>
              <div className="mt-4 text-center">
                <span className="text-4xl font-bold">&#8377;6332</span>/ year
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1" />
                  Foreign Salary
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  DTAA Tax Relief
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Speculative Income
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Single & Multiple Employers
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Single & Multiple House Property
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Multiple Capital Gain income
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  RSU/ESOP
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Business & Professional Income
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Crypto Income
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Income from Other Sources
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  F&O Income/Loss(Non Audit)
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Agriculture Income
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full bg-indigo-500 bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-600 hover:to-green-700">Get Started</Button>
            </div>
          </div>
          <div
            className="flex flex-col p-6 shadow-lg rounded-lg justify-between border border-blue-300 dark:border-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-800 duration-300">
            <div>
              <h3 className="text-2xl font-bold text-center">Crypto Currency Plan</h3>
              <div className="mt-4 text-center">
                <span className="text-4xl font-bold">&#8377;3799</span>/ year
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Crypto income
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  F&O Income/Loss(No Audit)
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Speculative Income
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Single & Multiple Employers
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Single & Multiple House Property
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  multiple Capital Gain income
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Business & Professional Income
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Income from Other Sources
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Agriculture Income
                </li>
                
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full bg-indigo-500 bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-600 hover:to-green-700">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}


function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>)
  );
}
