package com.abhishek.parking.server.repository.auth;

import com.abhishek.parking.server.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepository extends CrudRepository<User, Integer> {

}
