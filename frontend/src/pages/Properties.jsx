import { useNavigate } from "react-router-dom";
import { JAVA_BACKEND_URL } from "../utils/config";
import { useState } from "react";

const API_URL = `${JAVA_BACKEND_URL}`;

const presetLocations = ["Baner,Pune","Hinjewadi,Pune","Kothrud, Pune","Wakad, Pune","Kharadi, Pune","Viman Nagar, Pune",
    "Hadaspar, Pune","Bavdhan, Pune","Aundh, Pune","Pimple Saudagar, Pune","Bandra, Mumbai","Andheri, Mumbai","Whitefield, Banglore",
];

const sampleProperties = [{
    id:1,title: "Modern 3 BHK Apartment", location: "Hinjewadi, Pune",city: "Pune",price: 7200000,
    tag: "For Sale",tagClass: "tag-sale",listingType: "SALE",propertyType: "APARTMENT",bedrooms: 3,
    bathrooms: 3,areaSqft: 1450,beds: "3 Beds",baths: "3 Baths",sqft: "1450 sq.ft",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
},
{
    id:2,title: "Luxury 2 BHK Apartment", location: "Baner, Pune",city: "Pune",price: 28000,
    tag: "For Rent",tagClass: "tag-rent",listingType: "RENT",propertyType: "APARTMENT",bedrooms: 2,
    bathrooms: 2,areaSqft: 1100,beds: "2 Beds",baths: "2 Baths",sqft: "1100 sq.ft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
},
{
    id:3,title: "Elegant Villa", location: "Kothrud, Pune",city: "Pune",price: 13500000,
    tag: "For Sale",tagClass: "tag-sale",listingType: "SALE",propertyType: "VILLA",bedrooms: 15,
    bathrooms: 12,areaSqft: 28000,beds: "15 Beds",baths: "12 Baths",sqft: "28000 sq.ft",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80",
},
{
    id:4,title: "Spacious 1 BHK Apartment", location: "Wakad, Pune",city: "Pune",price: 16000,
    tag: "For Rent",tagClass: "tag-rent",listingType: "RENT",propertyType: "APARTMENT",bedrooms: 1,
    bathrooms: 1,areaSqft: 800,beds: "1 Beds",baths: "1 Baths",sqft: "800 sq.ft",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
},
{
    id:5,title: "Premium 2BHK Apartment", location: "Kharadi, Pune",city: "Pune",price: 6500000,
    tag: "For Sale",tagClass: "tag-sale",listingType: "SALE",propertyType: "APARTMENT",bedrooms: 2,
    bathrooms: 2,areaSqft: 1200,beds: "2 Beds",baths: "2 Baths",sqft: "1200 sq.ft",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
},
{
    id:6,title: "Furnished 3BHK Apartment", location: "Viman Nagar, Pune",city: "Pune",price: 35000,
    tag: "For Rent",tagClass: "tag-rent",listingType: "RENT",propertyType: "APARTMENT",bedrooms: 3,
    bathrooms: 3,areaSqft: 2000,beds: "3 Beds",baths: "3 Baths",sqft: "2000 sq.ft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
},
];

export default function Properties() {
    const navigate = useNavigate();
    const [viewMode, setViewMode] = useState("grid");

    // Property list state from API
    const [allProperties, setAllProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    //Modal state for unregistered
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [selectedPropertyTitle, setSelectedPropertyTitle] = useState("");

    // Toggle state to open/collapse horizontal filters bar
    
}
