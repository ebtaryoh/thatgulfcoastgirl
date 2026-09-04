import SellerHero from "../components/sellers/SellerHero";
import SellerProgram from "../components/SellerProgram";
import HomeValue from "../components/HomeValue";
import FinalCTA from "../components/FinalCTA";

export default function SellersPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <SellerHero />
      <SellerProgram />
      <HomeValue />
      <FinalCTA />
    </div>
  );
}
