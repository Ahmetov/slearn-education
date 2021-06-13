package ahmetov.slearnbackend.dao;

import ahmetov.slearnbackend.model.course.TrainingSessionPart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainingSessionPartRepository extends JpaRepository<TrainingSessionPart, Long> {
    List<TrainingSessionPart> getAllByTrainingSessionId(Long id);
}
