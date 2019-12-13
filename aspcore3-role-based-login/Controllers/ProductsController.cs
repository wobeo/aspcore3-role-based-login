using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using mongo.Models;
using mongo.Services;

using Microsoft.AspNetCore.Cors;

namespace mongo.Controllers
{
    [EnableCors("ProductPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ProductsService _productsService;

        public ProductsController(ProductsService productService)
        {
            _productsService = productService;
        }

        [Route("")]
        [Route("GetAllProducts")]
        [HttpGet]
        public ActionResult<List<Products>> Get() =>
            _productsService.Get();

        [HttpGet("{id:length(24)}", Name = "GetProduct")]
        public ActionResult<Products> Get(string id)
        {
            var product = _productsService.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpPost]
        public ActionResult<Products> Create(Products product)
        {
            _productsService.Create(product);

            return CreatedAtRoute("GetProduct", new { id = product.Id.ToString() }, product);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Products productIn)
        {
            var product = _productsService.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            _productsService.Update(id, productIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var product = _productsService.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            _productsService.Remove(product.Id);

            return NoContent();
        }
    }
}
