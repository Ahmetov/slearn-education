package ahmetov.slearnbackend.dao;

import ahmetov.slearnbackend.model.course.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {

}
