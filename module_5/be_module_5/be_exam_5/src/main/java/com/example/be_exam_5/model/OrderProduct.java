package com.example.be_exam_5.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class OrderProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Integer idOrder;
    private String dateBuy;
    private Integer total;
    private String amount;
    @ManyToOne
    @JoinColumn(name = "product.id", referencedColumnName = "id")
    private Product product;

    public OrderProduct() {
    }

    public OrderProduct(int id, int idOrder, String dateBuy, int total, String amount, Product product) {
        this.id = id;
        this.idOrder = idOrder;
        this.dateBuy = dateBuy;
        this.total = total;
        this.amount = amount;
        this.product = product;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdOrder() {
        return idOrder;
    }

    public void setIdOrder(int idOrder) {
        this.idOrder = idOrder;
    }

    public String getDateBuy() {
        return dateBuy;
    }

    public void setDateBuy(String dateBuy) {
        this.dateBuy = dateBuy;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}