package com.example.profile_api.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Koi")
public class Koi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "koiID")
    private Integer koiID;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "species", nullable = false)
    private String species;

    @Column(name = "color", nullable = false)
    private String color;

    @Column(name = "weight", nullable = false)
    private Double weight;

    // Quan hệ với bảng Booking
    @OneToMany(mappedBy = "koi", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Booking> bookings;

    // Constructors, Getters, and Setters
    public Koi() {}

    public Koi(Integer koiID, String name, String species, String color, Double weight) {
        this.koiID = koiID;
        this.name = name;
        this.species = species;
        this.color = color;
        this.weight = weight;
    }

    public Integer getKoiID() {
        return koiID;
    }

    public void setKoiID(Integer koiID) {
        this.koiID = koiID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }
    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

}
