package ahmetov.slearnbackend.dao;

import ahmetov.slearnbackend.model.course.Achievement;
import ahmetov.slearnbackend.model.course.TrainingSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainingSessionRepository extends JpaRepository<TrainingSession, Long> {
}
