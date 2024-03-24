import Admin from "@/app/components/admin";
import Content from "@/app/components/content";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Content className="flex-grow" />
      <Footer />
    </div>
  );
};

export default Page;
