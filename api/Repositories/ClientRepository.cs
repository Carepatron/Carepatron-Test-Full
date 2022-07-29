using System;
using api.Data;
using api.Models;

namespace api.Repositories
{
    public interface IClientRepository
    {
        Client[] Get();
        void Create(Client client);
        void Update(Client client);
    }

    public class ClientRepository : IClientRepository
    {
        public ClientRepository()
        {
        }

        public void Create(Client client)
        {
            DataStore.Clients.TryAdd(client.Id, client);
        }

        public Client[] Get()
        {
            return DataStore.Clients.Values.ToArray();
        }

        public void Update(Client client)
        {
            DataStore.Clients.AddOrUpdate(client.Id, client, (id, client) => client);
        }
    }
}

