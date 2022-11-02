interface IClient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface IDictionary<T> {
  [key: string]: T;
}

interface IStore {
  entities: IDictionary<IClient>;
}
