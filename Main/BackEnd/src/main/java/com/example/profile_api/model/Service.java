package com.example.profile_api.model;


import jakarta.persistence.*;

@Entity
@Table(name = "Service")
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="serviceID")
    private Integer serviceID;

    @Column(name="name", nullable = false)
    private String name;

    @Column(name="description")
    private String description;

    @Column(name="basePrice", nullable = false)
    private Double basePrice;

    @Column(name="serviceType")
    private String serviceType;

    @Column(name="duration")
    private Integer duration;

    // Constructors, Getters, and Setters
    public Service() {}

    public Service(Integer serviceID, String name, String description, Double basePrice, String serviceType, Integer duration) {
        this.serviceID = serviceID;
        this.name = name;
        this.description = description;
        this.basePrice = basePrice;
        this.serviceType = serviceType;
        this.duration = duration;
    }

    public Integer getServiceID() {
        return serviceID;
    }

    public void setServiceID(Integer serviceID) {
        this.serviceID = serviceID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getBasePrice() {
        return basePrice;
    }

    public void setBasePrice(Double basePrice) {
        this.basePrice = basePrice;
    }

    public String getServiceType() {
        return serviceType;
    }

    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }
}
