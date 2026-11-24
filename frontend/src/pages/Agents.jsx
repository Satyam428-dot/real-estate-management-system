import AgentCard from "../components/jsx/AgentCard";
import Navbar from "../components/jsx/Navbar";
import Footer from "../components/jsx/Footer"
import "./css/Agents.css";

const agentsData = [{
    id: 1,name: "Rahul Sharma",role: "Senior Property Consultant",location: "Pune, Maharashtra",rating: 4.8,
    reviews: 1200,badge: null,specialization: ["Residential","Luxury", "Apartments"],properties: 1280,
    experience: "7+ Year Exp.",image: "https://static.vecteezy.com/system/resources/previews/070/487/526/large_2x/sales-professional-engaging-with-customers-in-an-automotive-showroom-during-a-bright-daytime-setting-photo.jpg",
},
{
    id: 2,name: "Neha Verma",role: "Property Advisor",location: "Mumbai, Maharashtra",rating: 4.7,
    reviews: 980,badge: "Verified Agent",specialization: ["Residential","Villas", "Investments"],properties: 960,
    experience: "6+ Year Exp.",image: "https://img.freepik.com/premium-photo/successful-sales-agent-portrait_926199-1970380.jpg",
},
{
    id: 3,name: "Amit Patel",role: "Property Consultant",location: "Bengaluru, Karnataka",rating: 4.6,
    reviews: 850,badge: "Verified Agent",badgeType: "verified",specialization: ["Commercial","Office Space", "Retail"],properties: 740,
    experience: "5+ Year Exp.",image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
},
{
    id: 4,name: "Pooja Iyer",role: "Real Estate Advisor",location: "Hyderabad, Telangana",rating: 4.9,
    reviews: 1100,badge: "Top-rated",badgeType: "top-rated",specialization: ["Residential","Plots", "Villas"],properties: 1010,
    experience: "8+ Year Exp.",image: "https://th.bing.com/th/id/OIP.kO6LzLl2Yb1T9wkvt7mB8AHaFZ?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
},
{
    id: 5,name: "Vikram Singh",role: "Property Consultant",location: "Delhi NCR",rating: 4.5,
    reviews: 700,badge: null,specialization: ["Residential","Apartments", "Investment"],properties: 820,
    experience: "6+ Year Exp.",image: "https://th.bing.com/th/id/R.05a6fee2b140805728597474acdaa3bc?rik=uqrM9b9CxUV73g&riu=http%3a%2f%2fagents.btrpay.com%2fwp-content%2fuploads%2f2021%2f09%2fAdobeStock_299316054-851x567.jpeg&ehk=okSP5brbecnKPeoKOZ0bEVenGnygSgCUqpcJQrf%2bxRk%3d&risl=&pid=ImgRaw&r=0",
},
{
    id: 6,name: "Sneha Reddy",role: "Property Advisor",location: "Chennai, Tamil Nadu",rating: 4.6,
    reviews: 600,badge: null,specialization: ["Residential","Villas", "Luxury"],properties: 670,
    experience: "5+ Year Exp.",image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
},
{
    id: 7,name: "Arjun Mehta",role: "Senior Property Consultant",location: "Ahemdabad, Gujarat",rating: 4.7,
    reviews: 950,badge: null,specialization: ["Commercial","Retail", "Investment"],properties: 900,
    experience: "6+ Year Exp.",image: "https://tse2.mm.bing.net/th/id/OIP.2EgbW8w3DdX7YtOdz8xz6AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
},
{
    id: 8,name: "Kavya Nair",role: "Property Advisor",location: "Varanasi, Uttar Pradesh",rating: 4.8,
    reviews: 750,badge: null,specialization: ["Residential","Plots", "Apartments"],properties: 580,
    experience: "4+ Year Exp.",image: "https://static.vecteezy.com/system/resources/thumbnails/010/455/091/small_2x/asian-confident-working-woman-who-has-a-long-hair-with-a-black-suit-is-standing-and-arm-crossing-in-work-from-home-concept-photo.jpg", 
}
];

export default function Agents() {
    return (
        <>
        <Navbar />
        <main className="agents-page-wrapper">
            <div className="agents-container">
                <div className="agents-header">
                    <h1>Property Agents</h1>
                    <p>Connect with our expert agents for personalized guidance and tailored solutions.</p>
                </div>

                <div className="agents-grid">{agentsData.map((agent) => (
                    <AgentCard key={agent.id} agent={agent} />
                ))}</div>
            </div>
        </main>

        <Footer />
        </>
    );
}