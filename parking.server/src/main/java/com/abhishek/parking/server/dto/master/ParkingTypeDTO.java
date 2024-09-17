package com.abhishek.parking.server.dto.master;

import lombok.Getter;
import lombok.Setter;

public class ParkingTypeDTO {
    private Integer id;
    @Setter
    @Getter
    private String parkingType;

    public ParkingTypeDTO(String parkingType) {
        this.parkingType = parkingType;
    }

}
