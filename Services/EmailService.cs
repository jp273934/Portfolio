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
                emailMessage.To.Add(new MailAddress("jparris195@email.com", "Me"));
                emailMessage.From = new MailAddress("admin@parriswebdesign.com", "Me");
                emailMessage.Subject = "Test";
                emailMessage.Body = "Body";
                emailMessage.IsBodyHtml = true;

                using (var client = new SmtpClient("smtp.gmail.com"))
                {
                    client.UseDefaultCredentials = false;
                    client.Port = 25;
                    client.Credentials = new NetworkCredential("admin@parriswebdesign.com", "Noah11!!jacob");
                    //client.EnableSsl = true;
                    client.Send(emailMessage);
                }
            }
        }
    }
}