import React from 'react';
import {
  AppointmentContainer,
  SectionTitle,
  InfoText,
  SubTitle,
  List,
  ListItem,
  HighlightText,
  PriceInfo
} from './styles';

const AppointmentSection: React.FC = () => {
  return (
    <AppointmentContainer>
      <SectionTitle>Appointment</SectionTitle>

      <InfoText>
        <strong>Pricing</strong>
        <p>My minimum price is $150. The price is based on the complexity of the design, size, and placement.</p>
        <HighlightText>*I charge an hourly rate for long sessions.</HighlightText>
      </InfoText>

      <InfoText>
        <p>To get a quote please email <a href="mailto:beri.tattoo@gmail.com">beri.tattoo@gmail.com</a> or Directly Message me on Instagram:</p>
      </InfoText>

      <SubTitle>Custom designs</SubTitle>
      <List>
        <ListItem>Photo references</ListItem>
        <ListItem>Detailed description</ListItem>
        <ListItem>Approximate size (inches or cm)</ListItem>
        <ListItem>Part of the body you would like to get tattooed</ListItem>
        <HighlightText>* I do NOT copy other artists' work, but I can create something similar</HighlightText>
      </List>

      <SubTitle>Flash designs (Pre-drawn designs from my IG highlights)</SubTitle>
      <List>
        <ListItem>A screenshot of the design</ListItem>
        <ListItem>Approximate size (inches or cm)</ListItem>
        <ListItem>Part of the body you would like to get tattooed</ListItem>
      </List>

      <SubTitle>Deposits</SubTitle>
      <InfoText>
        <p>A non-refundable deposit will be required to confirm your appointment. Deposits go towards the total cost.</p>
        <PriceInfo>
          - <span>$75</span> 1-2 hours session<br />
          - <span>$100</span> 2-5 hours session<br />
          - <span>$150</span> 5 hours~
        </PriceInfo>
      </InfoText>

      <SubTitle>Custom designs</SubTitle>
      <InfoText>
        <p>Custom designs will be sent for approval 1-2 days prior to the appointment date (there should be enough time to adjust it if needed).</p>
      </InfoText>
    </AppointmentContainer>
  );
};

export default AppointmentSection;
