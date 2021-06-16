package ahmetov.slearnbackend.dao;

import ahmetov.slearnbackend.model.course.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestRepository extends JpaRepository<Test, Long> {
    List<Test> findAllByTrainingSessionId(Long id);
}
