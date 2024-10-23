import React, { useState } from 'react';
import {
  FAQContainer,
  SectionTitle,
  Question,
  Answer,
  FAQItem
} from './styles';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do you take walk-ins?",
    answer: "I like to take the time with each client without interruptions or rushing the session, for this reason I do not take walk-ins."
  },
  {
    question: "Where are you located?",
    answer: "I’m located in Downtown LA at: 1530 S Alameda #2, Los Angeles, CA 90021"
  },
  {
    question: "Is there parking available?",
    answer: "Yes! We have plenty of parking available."
  },
  {
    question: "Can I bring a friend?",
    answer: "Friends and family are welcome! You can bring up to 2 people with you."
  },
  {
    question: "Can I see a sketch before booking an appointment?",
    answer: "I only start working on a design after the deposit is made and the appointment is confirmed. If you book your appointment too far ahead I will only start working on your design when it is close to the appointment date."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <SectionTitle>FAQ</SectionTitle>
      {faqData.map((item, index) => (
        <FAQItem key={index}>
          <Question onClick={() => toggleFAQ(index)}>
            {item.question}
          </Question>
          {activeIndex === index && (
            <Answer>{item.answer}</Answer>
          )}
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQSection;
