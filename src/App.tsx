import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

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
  };

  if (showCertificate) {

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 print:bg-white print:min-h-0 print:h-auto print:w-auto">
        {/* VISIBLE ONLY IN PRINT */}
        {/* <div className="hidden print:block text-black font-myriad text-xl p-8">
          <h2 className="text-left font-semibold text-gray-800 tracking-wide">
            I, Dr. <span className='text-[#c41f3e] uppercase'>{name}</span>
          </h2>
        </div> */}

        <div className='hidden print:block absolute top-[26%] left-[2%] px-5 md:px-10'>
          <div className='flex flex-row mt-10 md:mt-15 items-center'>
            <h2 className="text-left mr-1 ml-3 md:text-center text-xl font-semibold mb-3 text-gray-800 tracking-wide font-myriad">
              I, Dr. <span className='text-[#c41f3e] font-myriad text-xl uppercase'>{name}</span>
            </h2>
          </div>
        </div>

        {/* VISIBLE ONLY ON SCREEN */}
        <div className="print:hidden flex flex-col items-center">
          <div
            id="certificate"
            className="relative w-[1122px] h-[793px] bg-no-repeat bg-contain bg-center bg-white shadow-lg border border-gray-300"
            style={{
              backgroundImage: "url('/certificate_original.png')",
            }}
          >
            <div className='absolute top-[26%] left-[2%] px-5 md:px-10'>
              <div className='flex flex-row mt-10 md:mt-15 items-center'>
                <h2 className="text-left mr-1 ml-3 md:text-center text-xl font-semibold mb-3 text-gray-800 tracking-wide font-myriad">
                  I, Dr. <span className='text-[#c41f3e] font-myriad text-xl uppercase'>{name}</span>
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
              <img src="/certificate_graph.png" alt="signature" className='w-[20rem] h-[18rem] object-contain ml-[30%] -mt-10' />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
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
      </div>
    );
  }


  return (
    <div className={`flex flex-col w-screen h-screen bg-[url('/gilead_bg.jpg')] bg-fixed bg-cover bg-center`}>

      {/* Header */}
      <div className='flex flex-row justify-between w-full h-1/5 bg-white-600 mt-10'>
        <div className='flex w-full md:w-1/2 bg-[#c41f3e] h-28 self-end mb-5 items-center pl-5  '>
          <span className='text-white font-myriad text-2xl xl:text-4xl font-bold uppercase'>
            Viral Hepatitis Elimination Commitment
          </span>
        </div>
      </div>
      {/* Body */}
      <div className='flex flex-col w-full h-4/6  items-start md:items-center bg-white '>
        <div className='px-5 md:px-10'>
          <div className='flex flex-row  mt-10 md:mt-15 items-center justify-start'>
            <h2 className="text-left mr-1 md:text-center self-start text-xl md:text-[30px] font-semibold mb-3 text-gray-800 tracking-wide font-myriad">
              I, Dr. <span className='text-[#c41f3e] font-myriad text-lg md:text-[30px] lg:text-[30px]'>(
                <input
                  type="text"
                  className="ml-2  bg-transparent focus:outline-none focus:border-[#c41f3e] w-28 md:w-40 lg:w-55"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && name.trim()) {
                      setShowCertificate(true);
                    }
                  }}
                />
                ),</span>
            </h2>
          </div>
          <p className="text-center text-xl md:text-[30px] text-gray-700 mb-10 font-myriad">
            have committed to duly and dutifully put in the efforts that will take to get to 2030 goal.
          </p>
          <ul className="text-xl md:text-[30px] text-[#c41f3e] list-disc list-inside mb-5 px-10 leading-loose font-myriad -space-y-5">
            <li>Screen high risk population</li>
            <li>Initiate treatment for eligible patients</li>
            <li>Elevate awareness among my clinical peers & public</li>
          </ul>

        </div>
        <button className={`${name.trim() ? 'bg-[#c41f3e] ' : 'bg-gray-400'} text-white self-center font-myriad text-xl md:text-[24px] font-myriad font-bold uppercase px-10 py-1 mt-15 md:mt-5 rounded-lg cursor-pointer`}
          onClick={() => name.trim() && setShowCertificate(true)}
        >
          I AM COMMITTED
        </button>
        <div className=" text-xs text-gray-500 px-10 mt-10">
          <p className="mt-5 mb-2 font-myriad text-xs">ME-UNB-1113 | Prepared April 2025</p>
          <h1 className='font-normal font-myriad text-xs'>Disclaimer:</h1>
          <p className='font-myriad text-xs'>
            If you have medical questions related to any of Gilead's products or therapeutic areas,
            please email askGileadME@gilead.com. Reporting suspected adverse reactions of medicinal product is important.
            It allows continued monitoring of the benefit/risk balance of the medicinal product. Healthcare professionals
            and patients are asked to report any suspected adverse reactions via the national reporting schemes as applicable.
            For KSA: 19999 or npc.drug@sfda.gov.sa. For Kuwait: drugsafety@warbamed.com
          </p>

        </div>
      </div>
      {/* Footer */}
      <div className='flex w-full h-1/6' />
    </div>
  );
}

export default App;
