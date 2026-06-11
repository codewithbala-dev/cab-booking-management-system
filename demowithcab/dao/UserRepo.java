package com.example.demowithcab.dao;
import com.example.demowithcab.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer>{

}
