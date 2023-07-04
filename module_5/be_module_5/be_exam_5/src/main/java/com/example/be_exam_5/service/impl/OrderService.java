package com.example.be_exam_5.service.impl;

import com.example.be_exam_5.model.OrderProduct;
import com.example.be_exam_5.repository.IOrderRepository;
import com.example.be_exam_5.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository iOrderRepository;
    @Override
    public List<OrderProduct> getAll() {
        return iOrderRepository.getOrder();
    }

    @Override
    public void delete(int id) {
        iOrderRepository.delete(id);
    }

    @Override
    public List<OrderProduct> findByName(String name) {
        return null;
    }
}
