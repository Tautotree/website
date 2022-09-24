import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our mission"
    description="Gamifying Urban forestry and Tree adoption"
  >
    <VerticalFeatureRow
      title="The Game"
      description="Location based real life adevnture collection game invloving minting trees as NFT"
      image="/assets/images/Gaming (1).svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Farm to Plate"
      description="Orchid and big farm owners raise fund by minting their trees with a leverage that NFT owners get the produce after the tree / farm is matured"
      image="/assets/images/Farm to plate.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Go green incentive"
      description="Companies can contribute to Green cover in urban areas by owning lots of tree NFTs and contribute to their well being in the gamification"
      image="/assets/images/CSR.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
