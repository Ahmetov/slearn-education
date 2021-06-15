package ahmetov.slearnbackend.service;

import ahmetov.slearnbackend.model.course.Course;
import ahmetov.slearnbackend.model.course.TrainingSession;
import ahmetov.slearnbackend.service.BaseService;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface TrainingSessionService extends BaseService<TrainingSession, Long> {
    void create(TrainingSession trainingSession, MultipartFile multipartFile);

    List<TrainingSession> getByCourseId(Long id);

    TrainingSession createAndReturnId(TrainingSession trainingSession, MultipartFile multipartFile);
}
