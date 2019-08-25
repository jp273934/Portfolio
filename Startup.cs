using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Portfolio.Services;

namespace Portfolio
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
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddTransient<IEmailService, EmailService>();

            services.Configure<IISServerOptions>(options => {
                options.AutomaticAuthentication = false;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            //app.UseHttpsRedirection();
            app.UseDefaultFiles();
            app.UseStaticFiles();          
            app.UseMvc();

            app.Run(async (context) => {
                context.Response.ContentType = "text/html";
                await context.Response.SendFileAsync(Path.Combine(env.WebRootPath, "index.html"));
            });
            
          app.Use(async (c, next) =>
{
   
        c.Response.Headers.Add("Cache-Control", "no-store,no-cache");
        c.Response.Headers.Add("Pragma", "no-cache");
    
    await next();
});
        }
    }
}
