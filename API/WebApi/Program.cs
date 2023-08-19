using Microsoft.EntityFrameworkCore;
using WebApi.Data.AccessData;
using WebApi.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add Automapper.  
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// Add connection to MySql database.
var connectionString = builder.Configuration.GetConnectionString("MySqlConnection");
builder.Services.AddDbContext<MySqlDbContext>(options =>
{
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

// Add repositories.
builder.Services.AddScoped<IBookRepository, BookRepository>();

// Add services.
//builder.Services.AddScoped<>

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
