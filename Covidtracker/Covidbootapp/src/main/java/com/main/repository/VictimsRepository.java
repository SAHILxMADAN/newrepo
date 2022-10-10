package com.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.model.Victims;

public interface VictimsRepository extends JpaRepository<Victims, Long>{

}
