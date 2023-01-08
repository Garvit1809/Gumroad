import React from "react";
import styled from "styled-components";

const Section = styled.div`
h1{
    color: #333;
}
`;

const FAQData = [
    {
        ques: 'What Can I Sell on Gumroad?',
        ans: 'Digital Products, Physical Products and Memberships - almost anything! Creators in just about every industry use (and love) Gumroad, from digital artists, writers, musicians and other creative-types to business-minded entrepreneurs and tech gurus like our SaaS creators. A better question is, “what can’t you sell on Gumroad?”'
    },
    {
        ques: 'How Do I Get Paid?',
        ans: 'Gumroad’s goal is to help creators make a living doing what they love, so we make it as simple as possible to get paid. How we pay creators, whether through direct deposit or PayPal, varies by country.'
    },
    {
        ques: 'What Are The Fees?',
        ans: 'Unlike other platforms, Gumroad doesn’t charge you a monthly fee. Instead, our fees are deducted as a small percentage of every sale, so we only make money when you do.'
    },
    {
        ques: 'Can I Use Gumroad for Memberships?',
        ans: 'Yes! Whether it’s for a podcast, online course, or SaaS subscriptions, Gumroad makes it easy to manage memberships.'
    }
]

const FAQ = () => {
  return (
    <Section>
      <h1>Frequently asked questions</h1>
      <p>Don't see your question? Visit our help center.</p>

    </Section>
  );
};

export default FAQ;
