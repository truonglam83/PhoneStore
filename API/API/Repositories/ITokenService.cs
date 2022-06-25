using API.Models.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repositories
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
