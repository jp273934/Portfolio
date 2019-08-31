using Portfolio.Services;
using Portfolio.Models;
using System.Net;
using System.Net.Mail;

namespace Portfolio.Services
{
    public class EmailService : IEmailService
    {
        public void SendMessage(Message message)
        {
            using(var emailMessage = new MailMessage())
            {
                emailMessage.To.Add(new MailAddress("jparris195@gmail.com", "Me"));
                emailMessage.From = new MailAddress("jparris195@gmail.com", "Me");
                emailMessage.Subject = "Test";
                emailMessage.Body = "Body";
                emailMessage.IsBodyHtml = true;

                using (var client = new SmtpClient("smtp.gmail.com"))
                {
                    client.DeliveryMethod = SmtpDeliveryMethod.Network;
                    client.Port = 587;
                    client.Credentials = new NetworkCredential("jparris195@gmail.com", "oxqgtbqmjplunqvl");
                    client.EnableSsl = true;
                    client.Send(emailMessage);
                }
            }
        }
    }
}