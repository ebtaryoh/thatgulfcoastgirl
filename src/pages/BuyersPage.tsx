import BuyerHero from "../components/buyers/BuyerHero";
import BuyerExperience from "../components/BuyerExperience";
import BuyerPerks from "../components/buyers/BuyerPerks";
import FinalCTA from "../components/FinalCTA";

export default function BuyersPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <BuyerHero />
      <BuyerExperience />
      <BuyerPerks />
      <FinalCTA />
    </div>
  );
}
