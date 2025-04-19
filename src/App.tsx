import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const [name, setName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const handleDownload = async () => {
    const element = document.getElementById('certificate');
    if (element) {
      const canvas = await html2canvas(element, {
        useCORS: true,
        scale: 2, // sharper image
      });
      const link = document.createElement('a');
      link.download = `${name}_certificate.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    setShowCertificate(false);
  };

  if (showCertificate) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 print:bg-white">
        {/* CERTIFICATE ONLY */}
        <div
          id="certificate"
          className="relative w-[1100px] h-[850px] bg-no-repeat bg-contain bg-center bg-white shadow-lg border border-gray-300"
          style={{
            backgroundImage: "url('/certificate.png')", // Replace with your certificate background image
          }}
        >
          {/* Title */}
          <h1 className="absolute top-[30%] w-full text-center text-5xl font-extrabold text-gray-800">
            Certificate of Excellence
          </h1>

          {/* Recipient Name */}
          <p className="absolute top-[50%] w-full text-center text-4xl font-bold text-blue-900">
            {name}
          </p>

          {/* Appreciation Sentence */}
          <p className="absolute top-[40%] w-full text-center text-lg italic text-gray-700 px-8">
            We appreciate your dedication and outstanding achievement!
          </p>

          {/* Course Completion Line */}
          <p className="absolute top-[60%] w-full text-center text-lg text-gray-600">
            has successfully completed the course.
          </p>

          {/* Signature Lines */}
          <div className="absolute bottom-35 left-16 text-sm text-gray-500">
            <div className="border-t border-gray-400 w-40 mb-1" />
            Instructor Signature
          </div>
          <div className="absolute bottom-35 right-16 text-sm text-gray-500">
            <div className="border-t border-gray-400 w-40 mb-1" />
            Date
          </div>
          </div>

        {/* BUTTONS (Hidden when printing) */}
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
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Enter Your Name</h2>
        <p className="text-lg">
          My name is
          <input
            type="text"
            className="border-b-2 border-blue-500 focus:outline-none focus:border-blue-700 ml-2 px-2 w-2/3"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && name.trim()) {
                setShowCertificate(true);
              }
            }}
          />
        </p>
        <button
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => name.trim() && setShowCertificate(true)}
        >
          Generate Certificate
        </button>
      </div>
    </div>
  );
}

export default App;
