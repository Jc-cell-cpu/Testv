import { Button } from "@/components/ui/button";

export function PricingcompBasic() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex justify-center">
          <div
            className="relative flex flex-col p-6 justify-center shadow-lg rounded-lg border border-purple-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-800 duration-300">
            <div
              className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              FREE
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">Tax Planning(DIY)</h3>
              <div className="mt-4 text-center">
                <span className="text-4xl font-bold">FREE</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1" />
                  Maximize your financial potintial with  <mark>capital Tax Plus.</mark>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Your Execlusive access to tax planning.
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full bg-indigo-500 bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-600 hover:to-green-700">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props) {
  return (
    <svg
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
    </svg>
  );
}
