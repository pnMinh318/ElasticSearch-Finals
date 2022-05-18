import getNameEmployFirst from '../Feature/EmployeePage';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import EmployeePage from '../Feature/EmployeePage';
import { getListEmploy } from '../Utils/GetListEmploy';

test('async test', async () => {
    const asyncMock = jest.fn().mockResolvedValue(43);

    await asyncMock(); // 43
});

test('Getdata', async () => {

    let mock = new MockAdapter(axios);
    const data = { response: true };
    mock.onGet('http://localhost:8080/api/v1/employees').reply(200, data);

    const result = await getListEmploy();
    expect.mock.history.get[0].url.toEqual("http://localhost:8080/api/v1/employees")
    expect(data).toStrictEqual(result.data)
});





