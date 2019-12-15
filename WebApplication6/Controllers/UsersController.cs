using System.Web.Http;

namespace WebApplication6.Controllers
{
   // [Route("api/Users")]
    public class UsersController : ApiController
    {
        //[HttpPost]
        public void Login(LoginRequest loginRequest) // [FromBody]
        {
            
        }
    }

    public class LoginRequest
    {
        public string User { get; set; }
        public string Password { get; set; }
    }
}
