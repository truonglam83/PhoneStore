using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.OrderAggregate
{
    public class Address
    {
        public Address()
        {
        }

        public Address(string firstName, string lastName, string street, string ward, string district, string cityProvince)
        {
            FirstName = firstName;
            LastName = lastName;
            Street = street;
            Ward = ward;
            District = district;
            CityProvince = cityProvince;
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public string Ward { get; set; }
        public string District { get; set; }
        public string CityProvince { get; set; }
    }
}
