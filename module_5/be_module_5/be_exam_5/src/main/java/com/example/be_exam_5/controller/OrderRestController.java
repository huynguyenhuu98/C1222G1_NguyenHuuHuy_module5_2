package com.example.be_exam_5.controller;

import com.example.be_exam_5.model.OrderProduct;
import com.example.be_exam_5.model.Product;
import com.example.be_exam_5.service.IOrderService;
import com.example.be_exam_5.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin("*")
public class OrderRestController {
    @Autowired
    private IOrderService iOrderService;
    @Autowired
    private IProductService iProductService;
    @GetMapping("")
    public ResponseEntity<List<OrderProduct>> getOrder() {
        List<OrderProduct> orders = iOrderService.getAll();
        if (orders.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
    @GetMapping("product")
    public ResponseEntity<List<Product>> getProduct() {
        List<Product> products = iProductService.getProduct();
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @GetMapping("delete/{id}")
    public ResponseEntity<List<OrderProduct>> deleteOrder(@PathVariable int id) {
        iOrderService.delete(id);
        List<OrderProduct> orders = iOrderService.getAll();
        if (orders.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
}
