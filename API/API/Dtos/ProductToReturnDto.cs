using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class ProductToReturnDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
        public string LinkImg { get; set; }
        public string LinkDetail { get; set; }
        public string Spec { get; set; }
        //FK for Product
        public string Category { get; set; }
        public string Brand { get; set; }
    }
}
