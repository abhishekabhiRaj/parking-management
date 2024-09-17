package com.abhishek.parking.server.controller.master;

import com.abhishek.parking.server.entity.User;
import com.abhishek.parking.server.entity.master.ParkingType;
import com.abhishek.parking.server.response.ApiResponse;
import com.abhishek.parking.server.service.master.ParkingTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/master/parking-type")
public class ParkingTypeController {
    @Autowired
    private ParkingTypeService parkingTypeService;


    @GetMapping("/lists")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<ApiResponse<List<ParkingType>>> getParkingType() {
        List<ParkingType> parkingType = parkingTypeService.findAll();

        if (parkingType.isEmpty()) {
            // If the list is empty, return a different response
            ApiResponse<List<ParkingType>> response = new ApiResponse<>(
                    "data_not_available", // type
                    204,                  // status (204: No Content)
                    new ArrayList<>()                  // no data
            );
            return ResponseEntity.ok(response);  // Return status 204 (No Content)
        }

        // If the list is not empty, return the data as usual
        ApiResponse<List<ParkingType>> response = new ApiResponse<>(
                "data_available", // type
                200,              // status
                parkingType       // data (your list of ParkingType)
        );
        return ResponseEntity.ok(response);  // Return status 200 (OK)
    }

}
