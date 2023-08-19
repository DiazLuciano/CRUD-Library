using Microsoft.AspNetCore.Mvc;
using WebApi.Models.Entities;
using WebApi.Repositories;
using WebApi.Service;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookRepository _bookRepository;
        private readonly BookService _bookService;

        public BookController(IBookRepository bookRepository, BookService bookService)
        {
            _bookRepository = bookRepository;
            _bookService = bookService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _bookRepository.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await _bookRepository.GetById(id));
        }

        [HttpPost]
        public async Task<IActionResult> CreateBook([FromBody] Book book)
        {
            if (book == null)
                return BadRequest();

            // Validacion del formulario, por si falta algo, alguna validacion que no se cumple...
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _bookRepository.Insert(book);

            return Created("created", created);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateBook([FromBody] Book book)
        {
            if (book == null)
                return BadRequest();

            // Validacion del formulario, por si falta algo, alguna validacion que no se cumple...
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _bookRepository.Update(book);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            await _bookRepository.SoftDelete(id);
            return NoContent();
        }
    }
}
