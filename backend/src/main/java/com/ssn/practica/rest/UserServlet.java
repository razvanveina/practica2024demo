// backend/src/main/java/com/example/servlet/UserServlet.java
package com.ssn.practica.rest;


import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.ssn.practica.dao.UserDAO;
import com.ssn.practica.model.User;

import java.util.List;

@Path("/users")
public class UserServlet {
    private UserDAO userDAO = new UserDAO();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> getUsers() {
        return userDAO.getUsers();
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addUser(User user) {
        userDAO.addUser(user); 
        return Response.status(Response.Status.CREATED).build();
    }
}
