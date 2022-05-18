import { BrowserRouter } from "react-router-dom";
import AddEmployee from "../Layout/AddEmployee";

test('async test', async () => {
    const asyncMock = jest.fn().mockResolvedValue(43);
    await asyncMock(); // 43
});

