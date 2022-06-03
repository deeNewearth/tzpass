using Microsoft.AspNetCore.Authentication.Cookies;
//using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
//using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//using Utilities;

namespace backend
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

            
            //services.ConfigureUtilities(Configuration /, Utilities.UtilsConfigureExtensions.AddTrackConsumers/);

            //services.AddCors();
            services.AddControllers()
                .AddNewtonsoftJson()
                ;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env,  ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

/*
            app.UseExceptionHandler(
              builder =>
              {
                  builder.Run(
                    async context =>
                    {

                        var exception = context.Features.Get<IExceptionHandlerFeature>()?.Error;

                        var error = ErrorMessage.SetStatusGetResult(context, exception, loggerFactory.CreateLogger("Global-Exception"));
                        context.Response.ContentType = "application/json";

                        await context.Response.WriteAsync(JsonConvert.SerializeObject(error)).ConfigureAwait(false);
                    });
              });
*/

            //app.UseDefaultFiles();
            //app.UseStaticFiles();

            app.UseRouting();
/*
#if DEBUG
            app.UseCors(builder =>
            {
                builder.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            });
#endif

            app.UseAuthentication();
            app.UseAuthorization();
*/
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
  //              endpoints.MapFallbackToFile("/index.html");
            });
        
    

        }
    }
}