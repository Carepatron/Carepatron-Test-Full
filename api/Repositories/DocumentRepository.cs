using System;
namespace api.Repositories
{
    public interface IDocumentRepository
    {
        Task SyncDocumentsFromExternalSource(string email);
    }

    public class DocumentRepository : IDocumentRepository
    {
        public async Task SyncDocumentsFromExternalSource(string _)
        {
            // this simulates sending an email
            // leave this delay as 10s to emulate real life
            await Task.Delay(10000);
        }
    }
}

