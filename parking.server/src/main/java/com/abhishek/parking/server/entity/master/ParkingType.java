package com.abhishek.parking.server.entity.master;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "parkingType")
public class ParkingType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Setter
    @Getter
    private String parkingType;

    public ParkingType() {
    }

    public ParkingType(Integer id, String parkingType) {
        this.id = id;
        this.parkingType = parkingType;
    }

}
