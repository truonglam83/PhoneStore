﻿    using API.Dtos;
using API.Errors;
using API.Helpers;
using API.Models;
using API.Repositories;
using API.Specifications;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{

    public class ProductController : BaseApiController
    {
        private readonly IGenericRepository<Product> _productsRepo;

        private readonly IGenericRepository<Brand> _brandsRepo;

        private readonly IGenericRepository<Category> _categoriesRepo;

        private readonly IMapper _mapper;
        public ProductController(IGenericRepository<Product> productsRepo,
            IGenericRepository<Brand> brandsRepo, IGenericRepository<Category> categoriesRepo, IMapper mapper)
        {
            _productsRepo = productsRepo;
            _brandsRepo = brandsRepo;
            _categoriesRepo = categoriesRepo;
            _mapper = mapper;
        }


        [HttpGet]
        public async Task<ActionResult<Pagination<ProductToReturnDto>>> GetAllProduct([FromQuery] ProductSpecParams productParams)
        {
            var spec = new CategoriesAndBrandsSpecification(productParams);

            var countSpec = new ProductWithFiltersForCountSpecification(productParams);

            var totalItem = await _productsRepo.CountAsync(countSpec);
          
            var products = await _productsRepo.ListAsync(spec);

            var data = _mapper
                .Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products);

            return Ok(new Pagination<ProductToReturnDto>(productParams.PageIndex, productParams.PageSize, totalItem, data));
        }

        [HttpGet("{Id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductToReturnDto>> GetProductById(int Id)
        {
            var spec = new CategoriesAndBrandsSpecificationID(Id);

            var product =  await _productsRepo.GetEntityWithSpec(spec);

            if (product == null) return NotFound(new ApiResponse(404));

            return _mapper.Map<Product, ProductToReturnDto>(product);
        }
        
        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<Brand>>> GetAllBrands()
        {
            return Ok(await _brandsRepo.ListAllAsync());
        }

        [HttpGet("categories")]
        public async Task<ActionResult<IReadOnlyList<Category>>> GetAllCategories()
        {
            return Ok(await _categoriesRepo.ListAllAsync());
        }
    }
}
