using System;
using Portfolio.Models;
using Portfolio.Services;
using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly IEmailService _service;

        public MessageController(IEmailService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<string> Get()
        {
            _service.SendMessage(new Message());
            return "Email controller works";
        }

        [HttpPost]
        public void Post([FromBody] Message message)
        {
            
        }
    }
}