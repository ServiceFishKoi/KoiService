package com.example.profile_api.model;


import jakarta.persistence.*;

@Entity
@Table(name = "Veterian")
public class Veterian {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vetID")
    private Integer vetID;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "specialization", nullable = false)
    private String specialization;

    @ManyToOne(  cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "BookingID", nullable = true)
    private Booking booking;

    // Constructors, Getters, and Setters
    public Veterian() {}

    public Veterian(Integer vetID, String name, String phone, String email, String specialization) {
        this.vetID = vetID;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.specialization = specialization;
    }

    public Integer getVetID() {
        return vetID;
    }

    public void setVetID(Integer vetID) {
        this.vetID = vetID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}
