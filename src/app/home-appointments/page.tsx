import React from 'react';
import { HomeAppointmentForm } from './components/HomeAppointmentForm';

const HomeAppointments: React.FC = () => {
  return (
    <div className='flex flex-col space-y-2'>
      <section className='flex bg-grayscale-background-subtle'>
        <HomeAppointmentForm />
      </section>
    </div>
  );
};
export default HomeAppointments;
