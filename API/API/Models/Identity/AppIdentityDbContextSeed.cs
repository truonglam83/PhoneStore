using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Emerald",
                    Email = "emerald@test.com",
                    UserName = "emerald@test.com",
                    Address = new Address
                    {
                        FirstName = "Bao",
                        LastName = "Nguyen",
                        Street = "107/4 ap Binh Tri 1",
                        Ward = "Thuan My",
                        District = "Chau Thanh",
                        CityProvince = "Long An",
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}
