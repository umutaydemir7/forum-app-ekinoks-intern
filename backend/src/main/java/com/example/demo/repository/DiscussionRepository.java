
package com.example.demo.repository;

        import com.example.demo.model.Discussion;
        import org.springframework.data.mongodb.repository.MongoRepository;
        import org.springframework.data.mongodb.repository.Query;
        import org.springframework.stereotype.Repository;
        import java.util.List;


@Repository
public interface DiscussionRepository extends MongoRepository<Discussion, String> {

    @Query("{name:'?0'}")
    Discussion findItemByName(String name);


    @Query("{ 'sideTopicName' : ?0 }")
    List<Discussion> findDiscussionsByName(String sideTopicName);



    public long count();

}