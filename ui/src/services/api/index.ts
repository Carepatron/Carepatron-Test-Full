import apiClient from "./apiClient";

export const getClients = (): Promise<IClient[]> => {
  return apiClient.get<IClient[]>("clients");
};

export const createClient = (client: IClient): Promise<void> => {
  return apiClient.post<void>("clients", client);
};

export const updateClient = (client: IClient): Promise<void> => {
  return apiClient.put<void>("clients", client);
};
