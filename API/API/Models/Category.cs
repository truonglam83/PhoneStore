﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Category : BaseEntity
    {
        
        public string NameCate { get; set; }
    }
}
