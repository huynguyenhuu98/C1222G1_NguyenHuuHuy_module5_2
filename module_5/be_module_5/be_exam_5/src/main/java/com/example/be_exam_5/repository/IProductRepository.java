package com.example.be_exam_5.repository;

import com.example.be_exam_5.model.OrderProduct;
import com.example.be_exam_5.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "select * from product",nativeQuery = true)
    List<Product> getAllProduct();
}
