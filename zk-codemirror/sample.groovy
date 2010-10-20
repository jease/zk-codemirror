// simple groovy script
import javax.ws.rs.Path
import javax.ws.rs.GET
import javax.ws.rs.PathParam
import javax.ws.rs.POST

@Path("/")
public class HelloWorld {
  @GET
  @Path("helloworld/{name}")
  public String hello(@PathParam("name") String name) {
    return "Hello " + name
  }
  
  @POST
  @Path("helloworld/{name}")
  public String hello2(@PathParam("name") String name) {
    return "Hello " + name
  }
}