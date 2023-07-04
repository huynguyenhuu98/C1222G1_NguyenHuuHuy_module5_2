package com.example.be_exam_5.service;

import com.example.be_exam_5.model.OrderProduct;

import java.util.List;

public interface IOrderService {
    List<OrderProduct> getAll();
    void delete(int id);
    List<OrderProduct> findByName(String name);
}
