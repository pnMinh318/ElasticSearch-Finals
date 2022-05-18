import { render, screen, waitFor } from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

test('async test', async () => {
    const asyncMock = jest.fn().mockResolvedValue(43);
    await asyncMock(); // 43
});

test('should submit data send data', async () => {
    const handleSubmit = jest.fn()
    render(
        <BrowserRouter>
            <AddEmployee onsubmit={handleSubmit} />
        </BrowserRouter>
    )

    await userEvent.type(screen.getByLabelText(/First Name/i), 'Hai')
    await userEvent.type(screen.getByLabelText(/Last Name/i), 'NgocThach')
    await userEvent.type(screen.getByLabelText(/Email/i), 'hai@gmail.com')

    await userEvent.click(screnn.getByRole('button', { name: /sunmit/i }))
    await waitFor(() =>
        expect(handleSubmit).toHaveBeenCalledWith({
            firstName: 'Hai',
            lastName: 'NgocThach',
            Email: 'hai@gmail.com',
        }),
    )
})
