import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailsCard from '../DetailsCard';

it('Renders Details card component properly', () => {
    const data = 'Test';
    const icon = '/images/name.png';
    const placeholder = 'Details';
    render(<DetailsCard data={data} icon={icon} placeholder={placeholder} />);

    const details = screen.getByTestId(/details/i);

    expect(details).toHaveTextContent('Test');
    expect(details).toHaveTextContent('Details');
});