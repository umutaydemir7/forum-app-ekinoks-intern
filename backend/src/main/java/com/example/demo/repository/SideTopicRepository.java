package com.example.demo.repository;


import com.example.demo.model.SideTopic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface SideTopicRepository extends MongoRepository<SideTopic, String> {

    @Query("{name:'?0'}")
    SideTopic findItemByName(String name);

    public long count();

}