using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;

using mongo.Models;
using mongo.Services;

namespace mongo
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            /*
            services.AddCors(options =>
            {
                services.AddCors(options =>
                {
                    options.AddDefaultPolicy(
                        builder =>
                        {

                            builder.WithOrigins("http://localhost",
                                                "https://localhost")
                                                .AllowAnyHeader()
                                                .AllowAnyMethod();
                        });

                    options.AddPolicy("UsersPolicy",
                        builder =>
                        {
                            builder.WithOrigins("http://localhost")
                                                .AllowAnyHeader()
                                                .AllowAnyMethod();
                        });

                    options.AddPolicy("ProductsPolicy",
                        builder =>
                        {
                            builder.WithOrigins("http://localhost")
                                                .AllowAnyHeader()
                                                .AllowAnyMethod();
                        });
                });
            });
            */

            // requires using Microsoft.Extensions.Options
            services.Configure<ProjetDatabaseSettings>(
                Configuration.GetSection(nameof(ProjetDatabaseSettings)));

            services.AddSingleton<IProjetDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<ProjetDatabaseSettings>>().Value);

            services.AddSingleton<UsersService>();
            services.AddSingleton<ProductsService>();

            services.AddControllers()
                .AddNewtonsoftJson(options => options.UseMemberCasing());

            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseCors();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
