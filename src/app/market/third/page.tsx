import Navbar from "@/app/components/navbar";
import Wallet from "@/app/components/wallet";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <Navbar />
      <Wallet />
     </div>
  );
};
export default Page;
