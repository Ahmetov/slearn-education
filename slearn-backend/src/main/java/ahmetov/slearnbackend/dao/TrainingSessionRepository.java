package ahmetov.slearnbackend.dao;

import ahmetov.slearnbackend.model.course.TrainingSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainingSessionRepository extends JpaRepository<TrainingSession, Long> {
    List<TrainingSession> getAllByCourseId(Long id);
}
