import React from 'react';
import styled from 'styled-components';

import Stepper from '../components/stepper';
import BudgetTable from '../components/budget-table';

const Container = styled.div`
  max-width: 720px;
  margin: auto;
`;

const Section = styled.section`
  padding: 24px;
`;

const SectionTitle = styled.h2`
  padding: 0;
  font-size: 1.2rem;
  margin: 0 0 4px -1px;
`;

const SectionSubtitle = styled.small`
  display: block;
  font-size: 0.9rem;
  color: #333;
`;

const SectionMain = styled.div`
  padding: 24px 16px;
  color: #333;
  font-size: 1.5rem;
`;

const Input = styled.input`
  text-align: right;
  border: 1px solid #666;
  color: #333;
  font-size: 1.5rem;
  width: 10rem;
`;

class CreateBudget extends React.Component {
  render() {
    return (
      <Container>
        <header>
          <h1>Create your budget</h1>
          <div>
            <Stepper
              steps={[
                'Fixed expenses',
                'Approximate expenses',
                'Incomes',
                'Current month events'
              ]}
              current={1}
            />
          </div>
        </header>
        <main>
          <Section>
            <SectionTitle>Housing</SectionTitle>
            <SectionSubtitle>Monthly rental</SectionSubtitle>
            <SectionMain>
              <Input type='text' /> SEK
            </SectionMain>
          </Section>
          <Section>
            <SectionTitle>Subscriptions</SectionTitle>
            <SectionSubtitle>Services that you have subscribed</SectionSubtitle>
            <SectionMain>
              <BudgetTable
                options={[
                  'Netflix',
                  'Spotify Premium',
                  'Internet'
                ]}
              />
            </SectionMain>
          </Section>
          <section>
            <h2>Regular expenses</h2>
            <h3>Fast-moving consumable goods</h3>
            <p>Food, cleaning products...</p>
            <p>Weekly <Input type='number' /> SEK</p>

            <hr />

            <h3>Leisure</h3>
            <p>Pub, club, cinema, dinners</p>
            <p>Weekly <Input type='number' /> SEK</p>

            <hr />

            <h3>Durable goods</h3>
            <p>Books, clothes, furniture</p>
            <p>Weekly <Input type='number' /> SEK</p>

            <hr />

            <h3>Taxes and fees</h3>
            <p>Books, clothes, furniture</p>
            <p>Weekly <Input type='number' /> SEK</p>

            <hr />

            <h3>Unexpected expenses</h3>
            <p>Reparations, medicines...</p>
            <p>Weekly <Input type='number' /> SEK</p>
          </section>
        </main>
      </Container>
    );
  }
}

export default CreateBudget;
