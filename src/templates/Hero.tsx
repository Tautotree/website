import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/Tautotree/tautotree-codebase">
            <a>GitHub</a>
          </Link>
        </li>
        
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Reversing climate change\n'}
            <span className="text-primary-500">One NFT tree at a time</span>
          </>
        }
        description=""
        button={
          <></>
        }
      />
    </Section>
  </Background>
);

export { Hero };
