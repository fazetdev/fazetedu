export default function Header() {
    return (
<header className="bg-blue-600 text-white p-4 border-t-4 border-green-600">
{/* border-t-4 border-green-600 adds Nigerian green stripe */}        <h1 className="text-2xl font-bold">Fazet Edutech</h1>
        <p className="text-sm">Smart Solutions for Nigerian Schools</p>
        <p className="text-xs mt-2 opacity-90">
          Affordable digital tools designed around how Nigerian schools actually work.
        </p>
      </header>
    );
  }