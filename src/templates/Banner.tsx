import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Jump right in as a climate change warrior!"
      subtitle=""
      button={
        <Link href="#">
          <a>
            <Button>Get the game!</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
