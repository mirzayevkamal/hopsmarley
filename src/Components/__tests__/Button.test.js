import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../Button";
import '@testing-library/jest-dom/extend-expect';

test('Renders a button element with a text and have a callback onClick function', () => {
    const onClick = jest.fn();
    render(<Button onButtonClick={onClick}> Search </Button>);

    const buttonElem = screen.getByTestId(/button/i);

    fireEvent.click(buttonElem);
    expect(onClick).toHaveBeenCalled();
    expect(buttonElem).toHaveTextContent('Search');
});
