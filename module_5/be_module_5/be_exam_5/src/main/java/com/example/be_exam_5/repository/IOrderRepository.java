package com.example.be_exam_5.repository;

import com.example.be_exam_5.model.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface IOrderRepository extends JpaRepository<OrderProduct, Integer> {
    @Query(value = "select * from order_product",nativeQuery = true)
    List<OrderProduct> getOrder();
    @Query(value = "delete from order_product where id = :id",nativeQuery = true)
    void delete( int id);
}
