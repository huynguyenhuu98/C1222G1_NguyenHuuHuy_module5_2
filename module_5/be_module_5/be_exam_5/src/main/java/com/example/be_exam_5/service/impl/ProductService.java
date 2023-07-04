package com.example.be_exam_5.service.impl;

import com.example.be_exam_5.model.Product;
import com.example.be_exam_5.repository.IProductRepository;
import com.example.be_exam_5.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public List<Product> getProduct() {
        return iProductRepository.getAllProduct();
    }
}
