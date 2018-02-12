using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WorkoutsDB.Startup))]
namespace WorkoutsDB
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
