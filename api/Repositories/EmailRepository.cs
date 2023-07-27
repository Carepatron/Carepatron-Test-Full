using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public interface IEmailRepository
    {
        Task Send(string email, string message);
    }

    public class EmailRepository : IEmailRepository
    {
        public async Task Send(string _, string __)
        {
            // this simulates sending an email
            // leave this delay as 10s to emulate real life
            await Task.Delay(10000);
        }
    }
}

