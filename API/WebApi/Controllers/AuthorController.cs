using FluentValidation.Results;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Domain.Validators;
using WebApi.Models.Dto;
using WebApi.Service;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        private readonly IAuthorService _authorService;

        public AuthorController(IAuthorService authorService)
        {
            _authorService = authorService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var authorDto = await _authorService.GetAllAuthors();
            if (authorDto == null)
            {
                return NotFound();
            }
            return Ok(authorDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var author = await _authorService.GetAuthorById(id);
            if (author == null)
            {
                return NotFound();
            }
            return Ok(author);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAuthor([FromBody] AuthorPostDto authorDto)
        {
            if (authorDto == null)
            {
                return BadRequest("Author data is required.");
            }

            // Validacion del formulario, por si falta algo, alguna validacion que no se cumple...
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            AuthorDtoValidator validator = new AuthorDtoValidator();
            ValidationResult results = validator.Validate(authorDto);

            if (!results.IsValid)
            {
                var errors = results.Errors.Select(error => error.ErrorMessage);
                return BadRequest(new { Errors = errors });
            }

            var insertedAuthorDto = await _authorService.Insert(authorDto);
            return Created("created", insertedAuthorDto);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAuthor(int id, [FromBody] AuthorPostDto authorDto)
        {
            if (authorDto == null)
            {
                return BadRequest("Author data is required.");
            }

            // Validacion del formulario, por si falta algo, alguna validacion que no se cumple...
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            AuthorDtoValidator validator = new AuthorDtoValidator();
            ValidationResult results = validator.Validate(authorDto);

            if (!results.IsValid)
            {
                var errors = results.Errors.Select(error => error.ErrorMessage);
                return BadRequest(new { Errors = errors });
            }

            var result = await _authorService.UpdateAuthor(id, authorDto);
            if (!result)
            {
                return NotFound();
            }

            return Ok("Author updated successfully.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAuthor(int id)
        {
            var result = await _authorService.SoftDeleteAuthor(id);
            if (!result)
            {
                return NotFound();
            }

            return Ok("Author soft deleted successfully.");
        }
    }
}
