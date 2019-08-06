using Portfolio.Models;

namespace Portfolio.Services
{
    public interface IEmailService
    {
         void SendMessage(Message message);
    }
}