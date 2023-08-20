using FluentValidation.Results;
using Microsoft.AspNetCore.Mvc;
using WebApi.Domain.Validators;
using WebApi.Models.Dto;
using WebApi.Models.Entities;
using WebApi.Repositories;
using WebApi.Service;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var bookDto = await _bookService.GetAllBooks();
            if (bookDto == null)
            {
                return NotFound();
            }
            return Ok(bookDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var bookDto = await _bookService.GetBookById(id);
            if (bookDto == null)
            {
                return NotFound();
            }
            return Ok(bookDto);
        }

        [HttpPost]
        public async Task<IActionResult> CreateBook([FromBody] BookPostDto bookDto)
        {
            if (bookDto == null)
            {
                return BadRequest("Book data is required.");
            }

            // Validacion del formulario, por si falta algo, alguna validacion que no se cumple...
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            BookDtoValidator validator = new BookDtoValidator();
            ValidationResult results = validator.Validate(bookDto);

            if (!results.IsValid)
            {
                var errors = results.Errors.Select(error => error.ErrorMessage);
                return BadRequest(new { Errors = errors });
            }

            var insertedBookDto = await _bookService.Insert(bookDto);
            return Created("created", insertedBookDto);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateBook(int id, [FromBody] BookPostDto bookDto)
        {
            if (bookDto == null)
            {
                return BadRequest("Book data is required.");
            }

            // Validacion del formulario, por si falta algo, alguna validacion que no se cumple...
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            BookDtoValidator validator = new BookDtoValidator();
            ValidationResult results = validator.Validate(bookDto);

            if (!results.IsValid)
            {
                var errors = results.Errors.Select(error => error.ErrorMessage);
                return BadRequest(new { Errors = errors });
            }

            var result = await _bookService.UpdateBook(id, bookDto);
            if (!result)
            {
                return NotFound();
            }

            return Ok("Book updated successfully.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            var result = await _bookService.SoftDeleteBook(id);
            if (!result)
            {
                return NotFound();
            }

            return Ok("Book soft deleted successfully.");
        }
    }
}
