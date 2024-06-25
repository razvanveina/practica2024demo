// backend/src/main/java/com/example/dao/UserDAO.java
package com.ssn.practica.dao;

import org.hibernate.Session;

import com.ssn.core.persistence.WithSessionAndTransaction;
import com.ssn.practica.model.User;

import java.util.List;

public class UserDAO {

    public List<User> getUsers() {
    	return (List<User>) new WithSessionAndTransaction<List<User>>() {

			@Override
			protected void executeBusinessLogic(Session session) {
				List<User> users = session.createQuery("from User").getResultList();
				setReturnValue(users);
			}
		}.run();
    }
    
    public void addUser(User user) {
        new WithSessionAndTransaction<Void>() {

            @Override
            protected void executeBusinessLogic(Session session) {
                session.save(user); 
            }

        }.run();
    }
}
