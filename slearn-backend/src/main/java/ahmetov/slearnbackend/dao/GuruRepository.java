package ahmetov.slearnbackend.dao;

import ahmetov.slearnbackend.model.course.Achievement;
import ahmetov.slearnbackend.model.course.Guru;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuruRepository extends JpaRepository<Guru, Long> {
}
