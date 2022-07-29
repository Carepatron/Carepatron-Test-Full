using System;
using System.Collections.Concurrent;
using api.Models;

namespace api.Data
{
    public static class DataStore
    {
        public static ConcurrentDictionary<string, Client> Clients { get; } = new ConcurrentDictionary<string, Client>
        {
            ["xjisldiw"] = new Client("xjisldiw", "John", "Smith", "john@gmail.com", "+18298101920")
        };
    }
}

