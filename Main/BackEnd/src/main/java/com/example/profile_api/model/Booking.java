package com.example.profile_api.model;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="bookingID")
    private Integer bookingID;

    // Quan hệ với bảng Users
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "userID", nullable = false)
    private User user;

    // Quan hệ với bảng Koi
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "koiID", nullable = false)
    private Koi koi;

    // Quan hệ với bảng Veteran (bác sĩ thú y)
    @OneToMany(fetch = FetchType.LAZY)
    private List<Veterian> vet;

    // Quan hệ với bảng Service
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "serviceID", nullable = false)
    private Service service;

    @Column(name="date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date date;

    // Constructors, Getters, and Setters
    public Booking() {}

    public Booking(Integer bookingID, User user, Koi koi, List<Veterian> vet, Service service, Date date) {
        this.bookingID = bookingID;
        this.user = user;
        this.koi = koi;
        this.vet = vet;
        this.service = service;
        this.date = date;
    }

    public Integer getBookingID() {
        return bookingID;
    }

    public void setBookingID(Integer bookingID) {
        this.bookingID = bookingID;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Koi getKoi() {
        return koi;
    }

    public void setKoi(Koi koi) {
        this.koi = koi;
    }

    public List<Veterian> getVet() {
        return vet;
    }

    public void setVet(List<Veterian> vet) {
        this.vet = vet;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}