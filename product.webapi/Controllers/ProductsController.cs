using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Model;

namespace product.webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private static readonly string[] Descriptions = new[]
        {
            "Car Tires",
            "Transmission Belts",
            "Miscellaneous Rubber",
            "Casks and Barrels",
            "Coated Paper",
            "Bonded Fiber Fabrics",
            "Textiles Fabrics for Machinery",
            "Polishing Stones",
            "Abrasive Powder",
            "Unworked Cast Glass"
        };

        private readonly ILogger<Product> _logger;

        public ProductsController(ILogger<Product> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Product
            {
                Id = index,
                Description = Descriptions[index],
                Price = rng.Next(0, 255)
            })
            .ToArray();
        }
    }
}
