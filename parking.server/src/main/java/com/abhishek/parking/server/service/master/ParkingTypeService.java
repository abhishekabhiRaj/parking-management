package com.abhishek.parking.server.service.master;

import com.abhishek.parking.server.dto.UserDTO;
import com.abhishek.parking.server.dto.master.ParkingTypeDTO;
import com.abhishek.parking.server.entity.User;
import com.abhishek.parking.server.entity.master.ParkingType;
import com.abhishek.parking.server.repository.master.ParkingTypeRepositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParkingTypeService {
    @Autowired
    private ParkingTypeRepositry parkingTypeRepositry;

    public List<ParkingType> findAll() {
        return (List<ParkingType>) parkingTypeRepositry.findAll();
    }
}
