using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;

namespace WebApplication6
{
    public class GameHub : Hub
    {
        static Dictionary<string,string> _users = new Dictionary<string, string>();

        public  override Task OnConnected()
        {
            return base.OnConnected();
        }

        public bool Login(string user, string password)
        {
            lock (_users)
            {
                if (_users.ContainsKey(user) == false)
                {
                    _users.Add(user, Context.ConnectionId);
                    return true;
                }
            }

            return false;
        }

        public bool Send(string toUser, string message)
        {
            if (_users.ContainsKey(toUser))
            {
                var userId = _users[toUser];
                Clients.User(userId).receive(message);
                return true;
            }

            return false;
        }
    }
}