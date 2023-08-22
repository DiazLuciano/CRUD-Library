using FluentValidation;
using WebApi.Models.Dto;

namespace WebApi.Domain.Validators
{
    public class AuthorDtoValidator : AbstractValidator<AuthorPostDto>
    {
        public AuthorDtoValidator()
        {
            RuleFor(author => author.Name)
                .NotEmpty().WithMessage("Name is required")
                .Length(3, 50).WithMessage("Name should be between 3 and 50 characters");

            RuleFor(author => author.Lastname)
                .NotEmpty().WithMessage("Lastname is required")
                .Length(3, 50).WithMessage("Lastname should be between 3 and 50 characters");

        }
    }
}
