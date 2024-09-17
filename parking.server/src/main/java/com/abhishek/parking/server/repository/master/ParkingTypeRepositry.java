package com.abhishek.parking.server.repository.master;

import com.abhishek.parking.server.entity.master.ParkingType;
import org.springframework.data.repository.CrudRepository;

public interface ParkingTypeRepositry extends CrudRepository<ParkingType, Integer> {

}
