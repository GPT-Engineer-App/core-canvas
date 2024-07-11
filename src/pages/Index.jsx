import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Application</h1>
        <p className="text-lg mb-8">
          This is a brief description of what our application does.
        </p>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring focus:ring-opacity-50">
          Get Started
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Index;