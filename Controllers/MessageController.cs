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

        [HttpPost]
        public IActionResult Post([FromBody] Message message)
        {
            try
            {
                _service.SendMessage(message);
                return Ok();
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}