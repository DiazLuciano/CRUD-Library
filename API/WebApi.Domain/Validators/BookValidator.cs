using FluentValidation;

namespace WebApi.Domain.Validators
{
    public class BookValidator : AbstractValidator<Book>
    {
        public BookValidator()
        {
            RuleFor(book => book.Title)
            .NotEmpty().WithMessage("{0} is required")
            .Length(3, 50).WithMessage("Title should be between 3 and 50 characters");

            RuleFor(book => book.Description)
                .NotEmpty().WithMessage("{0} is required")
                .Length(3, 50).WithMessage("Description should be between 3 and 50 characters");

            RuleFor(book => book.CreatedDate)
                .NotEmpty().WithMessage("{0} is required");

            RuleFor(book => book.Stock)
                .NotEmpty().WithMessage("{0} is required")
                .GreaterThan(1).WithMessage("{0} has to be greater than 0");
        }
    }
}
