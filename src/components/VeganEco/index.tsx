import React from 'react';
import {
  VeganEcoContainer,
  VeganSection,
  EcoSection,
  SectionTitle,
  ProductList,
  ProductItem,
  StyledMessage
} from './styles';

const VeganEcoSection: React.FC = () => {
  return (
    <VeganEcoContainer>
      <VeganSection>
        <SectionTitle>VEGAN</SectionTitle>
        <p>All products used are Vegan, meaning they are not tested on animals or have any animal ingredients.</p>
        <p>Many people ask me what makes a tattoo vegan/what products are not vegan, so below I answer these questions.</p>
        <h3>Conventional tattoo products that are not vegan can contain:</h3>
        <ProductList>
          <ProductItem>
            <strong>Tattoo Ink</strong><br />
            Bone char: Derived from animal burnt bones. Commonly used to make black ink.<br />
            Gelatin: Derived from boiled cow or pig bones, ligaments, skin, hooves, and tendons.<br />
            Shellac: Derived from Beetle shells.<br />
            Glycerin: Can be derived from plants or beef fat.
          </ProductItem>
          <ProductItem>
            <strong>Razor (lubricating strip)</strong><br />
            Glycerin: Can be derived from plants or beef fat.
          </ProductItem>
          <ProductItem>
            <strong>Stencil Paper</strong><br />
            Lanolin: Derived from sheep's wool
          </ProductItem>
          <ProductItem>
            <strong>Soap (used to wipe and wash the tattoo during the session)</strong><br />
            Green soap is commonly used in the tattoo industry. It can contain Glycerine, which can be derived from plants or beef fat.
          </ProductItem>
          <ProductItem>
            <strong>Vaseline</strong><br />
            Not derived from animals but can be tested on animals.
          </ProductItem>
          <ProductItem>
            <strong>Some aftercare Products</strong><br />
            Aquaphor: Contains Lanolin alcohol derived from sheep's wool and Glycerin (can be derived from plants or beef fat).<br />
            A&D Ointment: Contains Lanolin derived from sheep's wool.<br />
            Other ointments: can contain Beeswax / can be tested on animals.
          </ProductItem>
        </ProductList>
      </VeganSection>

      <EcoSection>
        <SectionTitle>ECO-FRIENDLY products that I use</SectionTitle>
        <p>Conventional plastics can take anywhere from 20-500 years to decompose. The compostable plastics that I use take anywhere from 10 days - 9 months to decompose.</p>
        <ProductList>
          <ProductItem>
            <strong>Bamboo Tongue Depressors instead of wood</strong><br />
            Bamboos grow faster than other trees and release 35% more oxygen into the atmosphere.
          </ProductItem>
          <ProductItem>
            <strong>Ink cap</strong><br />
            Cap made of Bagasse pulp with a starch coating.
          </ProductItem>
          <ProductItem>
            <strong>Gloves</strong><br />
            Biodegradable.
          </ProductItem>
          <ProductItem>
            <strong>Tattoo Needle</strong><br />
            Made from compostable materials.
          </ProductItem>
          <ProductItem>
            <strong>Paper Towel</strong><br />
            Recycled paper towel.
          </ProductItem>
        </ProductList>
      </EcoSection>

      <StyledMessage>Let’s be kind to animals and the planet ♡</StyledMessage>
    </VeganEcoContainer>
  );
};

export default VeganEcoSection;
