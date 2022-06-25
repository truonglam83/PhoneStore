using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repositories
{
    public interface IProductRepository
    {
        Task<Product> GetProductByIdAsync(int id);
        Task<IReadOnlyList<Product>> GetAllProductAsync();
        Task<IReadOnlyList<Brand>> GetAllBrandAsync();
        Task<IReadOnlyList<Category>> GetAllCetegoryAsync();
    }
}
