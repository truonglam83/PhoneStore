using API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Config
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p => p.Name).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Price).HasColumnType("float");
            builder.Property(p => p.Description).IsRequired();
            builder.Property(p => p.LinkImg).IsRequired();
            builder.Property(p => p.linkDetail).IsRequired();
            builder.Property(p => p.Spec).IsRequired();
            builder.HasOne(c => c.Category).WithMany().HasForeignKey(p => p.CategoryID);
            builder.HasOne(b => b.Brand).WithMany().HasForeignKey(p => p.BrandID);
        }
    }
}
