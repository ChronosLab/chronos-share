import Admin from "./components/admin";
import Content from "./components/content";
import Footer from "./components/footer";
import Link from "next/link";
import Navbar from "@/app/components/navbar";

const Page: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <Content className="flex-grow"/>
            <Footer/>
        </div>
    );
};

export default Page;
