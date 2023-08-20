using FluentValidation;
using WebApi.Models.Dto;

namespace WebApi.Domain.Validators
{
    public class BookDtoValidator : AbstractValidator<BookPostDto>
    {
        public BookDtoValidator()
        {
            RuleFor(book => book.Title)
                .NotEmpty().WithMessage("Title is required")
                .Length(3, 50).WithMessage("Title should be between 3 and 50 characters");

            RuleFor(book => book.Description)
                .NotEmpty().WithMessage("Description is required")
                .Length(3, 50).WithMessage("Description should be between 3 and 50 characters");

            RuleFor(book => book.CreatedDate)
                .NotEmpty().WithMessage("Created Date is required");

            RuleFor(book => book.Stock)
                .NotEmpty().WithMessage("Stock is required")
                .GreaterThan(0).WithMessage("Stock has to be greater than 0");

            RuleFor(book => book.AuthorId)
                .NotEmpty().WithMessage("Author ID is required")
                .GreaterThan(0).WithMessage("Author ID has to be greater than 0");
        }
    }
}
