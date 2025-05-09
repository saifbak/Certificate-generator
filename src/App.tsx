import { useState } from 'react';
import useFetch from './services/useFetch';

function App() {
  const [name, setName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const { saveUserToSheet, loading } = useFetch();

  const handlePrint = () => {
    const previousTitle = document.title;
    document.title = 'Certificate_of_Viral_Hepatitis_Elimination';
    window.print();
    setTimeout(() => {
      document.title = previousTitle;
    }, 1000);
  };

  const handleBack = () => {
    setShowCertificate(false);
    setName('');
  };

  if (showCertificate) {
    return (
      <div className="flex flex-col items-center justify-center mb-20 min-h-screen bg-gray-100 print:bg-white print:min-h-0 print:h-auto print:w-auto">
        {/* Print-only Certificate Layer */}
        <div className="hidden print:block absolute top-[26%] left-[2%] px-5 md:px-10 mb-20">
          <div className="flex flex-row mt-10 md:mt-15 items-center">
            <h2 className="text-left mr-1 ml-3 md:text-center text-xl font-semibold mb-3 text-gray-800 tracking-wide font-myriad">
              I, Dr. <span className="text-[#c41f3e] font-myriad text-xl uppercase">{name}</span>
            </h2>
          </div>
        </div>

        {/* On-screen Certificate */}
        <div className="print:hidden flex flex-col items-center">
          <div
            id="certificate"
            className="relative w-[1122px] h-[793px] bg-no-repeat bg-contain bg-center bg-white shadow-lg border border-gray-300"
            style={{ backgroundImage: "url('/certificate_original.png')" }}
          >
            <div className="absolute top-[26%] left-[2%] px-5 md:px-10">
              <div className="flex flex-row mt-10 md:mt-15 items-center">
                <h2 className="text-left mr-1 ml-3 md:text-center text-xl font-semibold mb-3 text-gray-800 tracking-wide font-myriad">
                  I, Dr. <span className="text-[#c41f3e] font-myriad text-xl uppercase">{name}</span>
                </h2>
              </div>
              <p className="text-xl text-gray-800 mb-5 font-myriad">
                have committed to duly and dutifully put in the efforts that will take to get to 2030 goal.
              </p>
              <ul className="text-lg text-[#c41f3e] list-disc list-inside mb-5 px-10 leading-loose font-myriad -space-y-3">
                <li>Screen high risk population</li>
                <li>Initiate treatment for eligible patients</li>
                <li>Elevate awareness among my clinical peers & public</li>
              </ul>
              <img
                src="/certificate_graph.png"
                alt="signature"
                className="w-[20rem] h-[18rem] object-contain ml-[30%] -mt-10"
              />
            </div>
          </div>
        </div>

        {/* Buttons (screen only) */}
        <div className="print:hidden mt-6 flex gap-4 z-10">
          <button
            onClick={handleBack}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Back
          </button>
          <button
            onClick={handlePrint}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-[#c41f3e] transition"
          >
            Print
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen h-screen bg-[url('/gilead_bg.jpg')] bg-fixed bg-cover bg-center">
      {/* Header */}
      <div className="flex flex-row justify-between w-full h-1/5 bg-white-600 mt-10">
        <div className="flex w-full md:w-1/2 bg-[#c41f3e] h-28 self-end mb-5 items-center pl-5">
          <span className="text-white font-myriad text-2xl xl:text-4xl font-bold uppercase">
            Viral Hepatitis Elimination Commitment
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col w-full h-4/6 items-start md:items-center bg-white">
        <div className="px-5 md:px-10">
          <div className="flex flex-row mt-10 md:mt-15 items-center justify-start">
            <h2 className="text-left mr-1 md:text-center self-start text-xl md:text-[28px] xl:text-[30px] font-semibold mb-3 text-gray-800 tracking-wide font-myriad">
              I, Dr.
              <span className="text-[#c41f3e] font-myriad text-xl md:text-[28px] xl:text-[30px]">
                (
                <input
                  type="text"
                  className="ml-2 bg-transparent focus:outline-none focus:border-[#c41f3e] w-35 md:w-55"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && name.trim()) {
                      setShowCertificate(true);
                    }
                  }}
                />
                ),
              </span>
            </h2>
          </div>

          <p className="text-center text-lg md:text-[28px] xl:text-[30px] text-gray-700 mb-3 xl:mb-10 font-myriad">
            have committed to duly and dutifully put in the efforts that will take to get to 2030 goal.
          </p>

          <ul className="text-sm md:text-lg xl:text-[30px] text-[#c41f3e] list-disc list-inside lg:mb-5 md:px-10 leading-loose font-myriad -space-y-1 md:-space-y-2 xl:-space-y-5">
            <li>Screen high risk population</li>
            <li>Initiate treatment for eligible patients</li>
            <li>Elevate awareness among my clinical peers & public</li>
          </ul>
        </div>

        <button
          className={`${
            name.trim() ? 'bg-[#c41f3e]' : 'bg-gray-400'
          } text-white self-center font-myriad text-sm xl:text-[24px] font-bold uppercase px-10 py-1 mt-15 lg:mt-5 rounded-lg cursor-pointer flex items-center gap-2`}
          onClick={async () => {
            if (name.trim()) {
              await saveUserToSheet(name.trim());
              setTimeout(() => {
                setShowCertificate(true);
              }, 1000);
            }
          }}
          disabled={loading}
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
              LOADING...
            </>
          ) : (
            'I AM COMMITTED'
          )}
        </button>

        {/* Disclaimer */}
        <div className="text-xs text-gray-500 px-2 md:px-10 mt-18 md:mt-10">
          <p className="mt-5 mb-2 font-myriad text-[8px] sm:text-xs">
            ME-UNB-1113 | Prepared April 2025
          </p>
          <h1 className="font-normal font-myriad text-[8px] sm:text-xs">Disclaimer:</h1>
          <p className="font-myriad text-[8px] sm:text-xs">
            If you have medical questions related to any of Gilead's products or therapeutic areas,
            please email askGileadME@gilead.com. Reporting suspected adverse reactions of medicinal product is important.
            It allows continued monitoring of the benefit/risk balance of the medicinal product. Healthcare professionals
            and patients are asked to report any suspected adverse reactions via the national reporting schemes as applicable.
            For KSA: 19999 or npc.drug@sfda.gov.sa. For Kuwait: drugsafety@warbamed.com
          </p>
        </div>
      </div>

      {/* Footer Spacer */}
      <div className="flex w-full h-1/6" />
    </div>
  );
}

export default App;
