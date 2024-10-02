package com.example.profile_api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Distance")
public class Distance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "distanceID")
    private Integer distanceID;

    @Column(name = "pricePerKm", nullable = false)
    private Double pricePerKm;

    @Column(name = "distanceRange", nullable = false)
    private String distanceRange;

    // Quan hệ với bảng Service
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "serviceID", nullable = false)
    private Service service;

    // Constructors, Getters, and Setters
    public Distance() {}

    public Distance(Integer distanceID, Double pricePerKm, String distanceRange, Service service) {
        this.distanceID = distanceID;
        this.pricePerKm = pricePerKm;
        this.distanceRange = distanceRange;
        this.service = service;
    }

    public Integer getDistanceID() {
        return distanceID;
    }

    public void setDistanceID(Integer distanceID) {
        this.distanceID = distanceID;
    }

    public Double getPricePerKm() {
        return pricePerKm;
    }

    public void setPricePerKm(Double pricePerKm) {
        this.pricePerKm = pricePerKm;
    }

    public String getDistanceRange() {
        return distanceRange;
    }

    public void setDistanceRange(String distanceRange) {
        this.distanceRange = distanceRange;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }
}
