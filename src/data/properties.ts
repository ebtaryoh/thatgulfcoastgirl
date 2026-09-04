export interface Property {
  id: number;
  name: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  lot: string;
  image: string;
  location: string;
  tags: string[];
  status: string;
  description?: string;
  features?: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    name: "Single Family — Hernando Beach",
    price: "$599,000",
    beds: 3,
    baths: 2,
    sqft: 2210,
    lot: "7,405 sq.ft.",
    image: "/images/featured-property.jpg",
    location: "3342 Turks Cap Drive, Hernando Beach, FL 34607",
    tags: ["Waterfront", "Active"],
    status: "For Sale",
    description: "Experience the ultimate coastal lifestyle in this stunning Hernando Beach waterfront home. Perfectly positioned for direct Gulf access, this beautifully updated property features expansive outdoor living spaces, a private dock, and modern interior finishes designed for both relaxation and entertaining. Wake up to serene water views and spend your days boating right from your backyard.",
    features: ["Direct Gulf Access", "Private Dock", "Updated Kitchen", "Open Floor Plan", "Covered Lanai", "Two-Car Garage"]
  },
  {
    id: 2,
    name: "Single Family — Spring Hill",
    price: "$285,000",
    beds: 2,
    baths: 2,
    sqft: 1036,
    lot: "0.32 ac",
    image: "/images/hero-coast.jpg",
    location: "12411 Brookside Street, Spring Hill, FL 34609",
    tags: ["Coastal", "Active"],
    status: "For Sale",
    description: "A charming and meticulously maintained home in the heart of Spring Hill. This property offers a cozy layout with abundant natural light, making it a perfect starter home or investment property. The spacious lot provides plenty of room for outdoor activities, gardening, or future expansions.",
    features: ["Large Lot", "Mature Landscaping", "Recent Roof Update", "No HOA", "Close to Shopping", "Quiet Neighborhood"]
  },
  {
    id: 3,
    name: "Single Family — Spring Hill",
    price: "$289,900",
    beds: 3,
    baths: 2,
    sqft: 1480,
    lot: "10,000 sq.ft.",
    image: "/images/community-crystal.jpg",
    location: "1185 Macfarlane Avenue, Spring Hill, FL 34608",
    tags: ["Residential", "Active"],
    status: "For Sale",
    description: "This move-in-ready 3-bedroom home offers a fantastic split floor plan ideal for families or hosting guests. Featuring a modern kitchen and an enclosed Florida room, this home seamlessly blends indoor comfort with Florida's famous sunny lifestyle. Located in a highly desirable neighborhood with easy access to the Suncoast Parkway.",
    features: ["Florida Room", "Split Floor Plan", "Fenced Backyard", "Modern Appliances", "Close to Schools", "Vaulted Ceilings"]
  },
  {
    id: 4,
    name: "Condo — Island Estates",
    price: "$415,000",
    beds: 2,
    baths: 2,
    sqft: 1120,
    lot: "Condo",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    location: "Island Estates, Clearwater, FL 33767",
    tags: ["Condo", "Pending"],
    status: "Pending",
    description: "Island living at its finest. This beautiful condominium is located in the prestigious Island Estates community, offering resort-style amenities and breathtaking views. Just minutes from the world-famous sands of Clearwater Beach, this unit features a private balcony and access to a community pool.",
    features: ["Water Views", "Community Pool", "Private Balcony", "Walk to Beach", "Fitness Center", "Assigned Parking"]
  },
  {
    id: 5,
    name: "Single Family — Trinity",
    price: "$725,000",
    beds: 4,
    baths: 3,
    sqft: 2850,
    lot: "0.45 ac",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    location: "Trinity, FL 34655",
    tags: ["Luxury", "Active"],
    status: "For Sale",
    description: "An elegant luxury estate located in a premium gated community in Trinity. This spacious 4-bedroom home boasts high-end finishes, a chef's kitchen with a massive island, and a gorgeous screened-in pool area. Perfect for those who appreciate fine living and love to entertain.",
    features: ["Gated Community", "Screened-In Pool", "Chef's Kitchen", "Outdoor Kitchen", "Smart Home Tech", "Three-Car Garage"]
  },
  {
    id: 6,
    name: "Townhouse — Safety Harbor",
    price: "$510,000",
    beds: 3,
    baths: 2.5,
    sqft: 1850,
    lot: "Townhome",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    location: "Safety Harbor, FL 34695",
    tags: ["Townhome", "Active"],
    status: "For Sale",
    description: "Discover the charm of Safety Harbor in this beautiful, low-maintenance townhome. Located within walking distance to downtown's quaint shops, restaurants, and the waterfront park, this property features an open-concept living area, high ceilings, and a master suite with a walk-in closet.",
    features: ["Walk to Downtown", "Open Concept", "High Ceilings", "Master Suite", "Low Maintenance", "Attached Garage"]
  },
  {
    id: 7,
    name: "Single Family — Dunedin",
    price: "$649,900",
    beds: 3,
    baths: 2,
    sqft: 1920,
    lot: "0.2 ac",
    image: "https://images.unsplash.com/photo-1570129477492-45c003eaa271?auto=format&fit=crop&q=80",
    location: "Dunedin, FL 34698",
    tags: ["Coastal", "Sold"],
    status: "Sold",
    description: "A classic Dunedin coastal cottage with modern upgrades. This beautiful property is just a short golf-cart ride to Downtown Dunedin and the Pinellas Trail. Featuring a lush, tropical backyard and a newly renovated kitchen, it offers the perfect blend of historical charm and contemporary luxury.",
    features: ["Golf Cart Friendly", "Near Pinellas Trail", "Tropical Backyard", "Renovated Kitchen", "Historic Charm", "Hardwood Floors"]
  },
  {
    id: 8,
    name: "Estate — Tarpon Springs",
    price: "$1,250,000",
    beds: 5,
    baths: 4,
    sqft: 4200,
    lot: "1.2 ac",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    location: "Tarpon Springs, FL 34689",
    tags: ["Estate", "Active"],
    status: "For Sale",
    description: "A spectacular 5-bedroom luxury estate set on over an acre of pristine land in Tarpon Springs. This architectural masterpiece features soaring ceilings, custom millwork, a private home theater, and an oasis-like backyard complete with a resort-style pool and spa.",
    features: ["Over 1 Acre", "Resort-Style Pool", "Home Theater", "Custom Millwork", "Soaring Ceilings", "Private Oasis"]
  },
  {
    id: 9,
    name: "Condo — Clearwater Beach",
    price: "$895,000",
    beds: 2,
    baths: 2,
    sqft: 1450,
    lot: "Condo",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    location: "Clearwater Beach, FL 33767",
    tags: ["Waterfront", "Active"],
    status: "For Sale",
    description: "Enjoy panoramic views of the Gulf of Mexico from this luxurious beachfront condo. With an expansive balcony, floor-to-ceiling windows, and access to premium building amenities, this property is the perfect luxury retreat or high-yield investment on Clearwater Beach.",
    features: ["Panoramic Gulf Views", "Beachfront", "Expansive Balcony", "Luxury Amenities", "Floor-to-Ceiling Windows", "Secure Building"]
  }
];
