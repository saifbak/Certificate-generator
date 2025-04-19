import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    setShowCertificate(false);
  };

  if (showCertificate) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4 print:bg-white">
        {/* CERTIFICATE */}
        <div
          id="certificate"
          className="relative w-[1100px] h-[850px] bg-no-repeat bg-contain bg-center bg-white shadow-lg border border-gray-300"
          style={{
            backgroundImage: "url('/certificate.png')",
          }}
        >
          {/* Logo */}
         

          {/* Title */}
          <h1 className="absolute top-[29%] w-full text-center text-5xl font-extrabold text-gray-800 font-playfair">
            Certificate of Excellence
          </h1>

          {/* Appreciation Sentence */}
          <p className="absolute top-[38%] w-full text-center text-lg italic text-gray-700 px-8 font-inter ">
            We appreciate your dedication and outstanding achievement!
          </p>

          {/* Recipient Name */}
          <p className="absolute top-[50%] w-full text-center text-4xl font-bold text-blue-900 font-vibes">
            {name}
          </p>

          {/* Course Completion Line */}
          <p className="absolute top-[60%] w-full text-center text-lg text-gray-600">
            has successfully committed the mission.
          </p>

          {/* Signature Lines */}
          <div className="absolute bottom-[20%] left-20 text-sm text-gray-500">
            <div className="border-t border-gray-400 w-40 mb-1" />
            Signature
          </div>
          <div className="absolute bottom-[20%] right-20 text-sm text-gray-500">
            <div className="border-t border-gray-400 w-40 mb-1" />
            Date
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 no-print">
          <button
            onClick={handleBack}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Back
          </button>
          <button
            onClick={handlePrint}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Print
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 px-4">
       <img
            src="/logo-ca.png"
            alt="Logo"
            className="absolute top-8 left-1/2 transform -translate-x-1/2 w-40 h-auto"
          />
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Commitment Pledge</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          I Dr.
          <input
            type="text"
            className="border-b-2 border-blue-500 focus:outline-none focus:border-blue-700 mx-2 px-2 w-2/3"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && name.trim()) {
                setShowCertificate(true);
              }
            }}
          />
          have committed to spare no effort to help 2030 mission through:
        </p>
        <ul className="list-disc list-inside text-gray-700 my-4 ml-4">
          <li>Screen high risk population</li>
          <li>Initiate treatment for eligible patients</li>
          <li>Elevate awareness among my clinical peers & public</li>
        </ul>
        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => name.trim() && setShowCertificate(true)}
        >
          Generate Certificate
        </button>
      </div>
    </div>
  );
}

export default App;
