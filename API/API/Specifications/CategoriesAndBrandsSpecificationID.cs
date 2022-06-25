using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Specifications
{
    public class CategoriesAndBrandsSpecificationID : BaseSpecification<Product>
    {
        public CategoriesAndBrandsSpecificationID(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Category);
            AddInclude(x => x.Brand);
        }
    }
}
