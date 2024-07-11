import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <section className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            This is a brief description of the application.
          </p>
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <TeamMember name="John Doe" />
            <TeamMember name="Jane Smith" />
            <TeamMember name="Alice Johnson" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const TeamMember = ({ name }) => (
  <div className="text-center">
    <img
      src="/placeholder.svg"
      alt="placeholder"
      className="mx-auto object-cover w-24 h-24 rounded-full mb-4"
    />
    <p className="text-lg font-medium">{name}</p>
  </div>
);

export default About;