import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import apiService from "../src/services/apiService";

const mock = new MockAdapter(axios);
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

describe("apiService", () => {
  
  afterEach(() => {
    mock.reset();
  });

  it("should fetch a user by email successfully", async () => {
    const email = "test@example.com";
    const mockData = { id: 1, firstName: "John", email };
    
    mock.onGet(`${BASE_URL}/email`, { params: { email } }).reply(200, mockData);

    const result = await apiService.getUserByEmail(email);
    expect(result).toEqual(mockData);
  });

  it("should fetch a user by ID successfully", async () => {
    const id = 1;
    const mockData = { id, firstName: "John", email: "test@example.com" };

    mock.onGet(`${BASE_URL}/${id}`).reply(200, mockData);

    const result = await apiService.getUserById(id);
    expect(result).toEqual(mockData);
  });

  it("should search users by keyword successfully", async () => {
    const keyword = "John";
    const mockData = [{ id: 1, firstName: "John" }, { id: 2, firstName: "Johnny" }];

    mock.onGet(BASE_URL, { params: { keyword } }).reply(200, mockData);

    const result = await apiService.searchUsers(keyword);
    expect(result).toEqual(mockData);
  });

  it("should load users successfully from the external API", async () => {
    const mockMessage = "Users loaded successfully.";
    mock.onPost(`${BASE_URL}/load`).reply(200, mockMessage);

    const result = await apiService.loadUsers();
    expect(result).toEqual(mockMessage);
  });

  it("should handle errors when fetching user by email", async () => {
    const email = "invalid@example.com";
    mock.onGet(`${BASE_URL}/email`, { params: { email } }).reply(404);

    await expect(apiService.getUserByEmail(email)).rejects.toThrow();
  });

  it("should handle errors when loading users", async () => {
    mock.onPost(`${BASE_URL}/load`).reply(500, "Failed to load users");

    await expect(apiService.loadUsers()).rejects.toThrow();
  });
});
